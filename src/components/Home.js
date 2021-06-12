import React from 'react'
import { motion } from 'framer-motion'
import HomeImage from './images/home-image.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const mainVariant = {
    hidden: {
      opacity: 0,
      x: "100%"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "Tween",
        when: "beforeChildren",
        staggerChildren: 0.4,
        // delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  }
  
  const childVariant2 = {
    hidden: {
      opacity: 0,
      y: "-100%"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "Tween"
      }
    }
  }
  
  const childVariant1 = {
    hidden: {
      opacity: 0,
      x: "-100%"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "Tween"
      }
    }
  }

const Home = () => {
    return (
        <motion.div className="main" id="home"
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
           <motion.div className="home-icons"
              variants={childVariant1}
            >
              <a href="https://www.linkedin.com/in/brett-scheepers-588b4a20a/" className="home-link" target="_blank" rel="noreferrer">
                <FaLinkedin className="home-icon" />
              </a>
              <a href="https://github.com/BrettScheepers" className="home-link" target="_blank" rel="noreferrer">
                <FaGithub className="home-icon" />
              </a>
              <a href="mailto:brettscheepers3100@gmail.com" className="home-link" target="_blank" rel="noreferrer">
                <FiMail className="home-icon" />
              </a>
           </motion.div>
           <div className="home-image">
               <div className="home-image-container">
                <img src={HomeImage} alt=""/>
               </div>
           </div>
           <div className="home-text">
               <h2 className="classic-font">Hi, I'm</h2>
               <motion.h1 variants={childVariant2}>Brett Scheepers</motion.h1>
               <p>Consider me as the developer to see to all your needs on the front-end!</p>
           </div>
        </motion.div>
    )
}

export default Home;