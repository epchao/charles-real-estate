import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default function About() {
    return (
      <div className={styles.aboutmain}>
          <Layout title={'About'} />
          <div className={styles.abouttitle}>
            <h1>About Charles</h1>
            <Image
              src='/Charles-Chao-Portrait.jpg'
              alt='Charles Chao Portrait'
              width={510}
              height={350}
            />
          </div>
          <div className={styles.aboutcontent}>
            <p>Having a career as a Realtor means that our clients are our number one focus throughout real estate. Our clients are pretty much everything when it comes to the work that we do. Without them, our careers would mean nothing. That is why I am very dedicated to helping them find their dream home. Even clients successfully sell their property in the value of which their properties are worth. My overall goal is to make the entire transaction in real estate smooth and controlled so that my client can have a better and more relaxed way of buying or selling their properties.<br/><br/>
            My name is Charles Chao, and I am a Realtor. I’m currently brokered by eXp Realty, the world’s fastest-growing cloud-based brokerage. The reason I decided to work with them is that their main ideas involve innovation, which helpsclients and their agents work better and communicate easier than ever before. I believe that communication is our most important tool foreveryone so that we as agents and clients can be on the same page.<br/><br/>
            As a realtor, I always want to ensure that I give my service to all my clients the best it can be. Whether you are buying or selling a home, I want to help people understand all the processes and important information that my client needs to understand. My job is to help families find their true homes and help them in any way to make their life of real estate much easier. If you need a real estate agent, you can trust me to help you in any way during the real estate process. I have learned to adapt to all types of clients, and I want to ensure that you get the best service possible. I want to help as many people as I possibly can. So give me a chance, and you won’t regret it.<br/><br/>
            Now it’s my goal to help you to find your dream home. To also sell your property if needed. Anything is possible in Real Estate!</p>
          </div>
          <Footer/>
      </div>
    )
}