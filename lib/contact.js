export default function (req, res) {
    require('dotenv').config()

    const EMAIL = process.env.email;
    const PASSWORD = process.env.password;

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: EMAIL,
            pass: PASSWORD
        },
        secure: true,
    });

    try {
        const mailData = {
            from: 'do.not.reply' + ' <' + EMAIL + '>',
            to: process.env.email,
            subject: req.body.subject,
            html: `${req.body.name} (${req.body.email}) (${req.body.tel}) says: ${req.body.message}`
        };

        transporter.sendMail(mailData, function(err, info) {
            if(err) {
                res.status(500).send({
                    success: false,
                    message: 'There is an issue sending the response. Please try again later'
                });
            } else {
                console.log(req.body)
                res.status(200).send({
                    success: true,
                    message: 'Thank you for contacting us. We will get back to you shortly.'
                });
            }
        })
    } catch(error) {
        res.status(500).send({
            success: false,
            message: 'There is an issue with the server at the moment. Please try again later'
        });
    }

    res.status(200)
}
