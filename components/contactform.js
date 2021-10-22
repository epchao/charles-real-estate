import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    
    const [result, setResult] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Your contact form has been submitted!')

        let data = {
            name,
            email,
            tel,
            subject,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setResult(data)
            setName('')
            setEmail('')
            setTel('')
            setSubject('')
            setMessage('')
         }).catch((error) => {
            console.log(error)
            setResult({
                success: false, 
                message: 'Something went wrong. Please try again later'
            })
        })

    }

    return(
        <div className={styles.contact}>
            <form className={styles.contactform} onSubmit={handleSubmit}>
                {/* Name */}
                <div className={styles.formgroup}>
                    <label htmlFor='name'>Name
                    <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} name='name' className={styles.formcontrol} required/>
                    </label>
                </div>
                {/* Email */}
                <div className={styles.formgroup}>
                    <label htmlFor='email'>Email Address
                    <input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} name='email' className={styles.formcontrol} required/>
                    </label>
                </div>
                {/* Phone Number */}
                <div className={styles.formgroup}>
                    <label htmlFor='tel'>Phone Number
                    <input type='tel' value={tel} onChange={(e) => {setTel(e.target.value)}} name='tel' className={styles.formcontrol} required/>
                    </label>
                </div>
                {/* Subject */}
                <div className={styles.formgroup}>
                    <label htmlFor='subject'>Subject
                    <input type='text' value={subject} onChange={(e) => {setSubject(e.target.value)}} name='subject' className={styles.formcontrol} required/>
                    </label>
                </div>
                {/* Your Message */}
                <div className={styles.formgroup}>
                    <label htmlFor='message'>Message
                    <textarea type='text' value={message} rows="5" onChange={(e) => {setMessage(e.target.value) }} name='message' className={styles.formcontrol} required/>
                    </label>
                </div>
                {/* Submit */}
                <div className={styles.submitbox}>
                <button type='submit' className={styles.formsubmit}>Submit</button>
                </div>
            </form>
            <div className="form-result">
                {result && (
                    <p className={`${result.success ? 'success' : 'error'}`}>{result.message}</p>
                )}
                <style jsx>{`
                    .success {
                        text-align: center;
                        color: #628F4D;
                    }

                    .error {
                        text-align: center;
                        color: #B53737;
                    }
                `}</style>
            </div>
        </div>
    )
}