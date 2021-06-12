import React from 'react'
import { motion } from 'framer-motion'
import { BiChevronRight } from 'react-icons/bi'

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
        staggerChildren: 0.4
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
  
  const childVariant = {
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
        type: "Tween"
      }
    }
  }

const About = () => {
    return (
        <motion.div className="main" id="about"
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="about-skills">
              <h2>Skills</h2>
              <motion.div className="skills-container"
                variants={childVariant}
              >
                <ol className="skills-list">
                  <li>HTML/CSS</li>
                    <ul className="specific-skills-list">
                      <li><BiChevronRight />Responsive Design</li>
                      <li><BiChevronRight />CSS Flexbox/Grid</li>
                      <li><BiChevronRight />Visual Design</li>
                    </ul>
                  <li>Javascript</li>
                    <ul className="specific-skills-list">
                      <li><BiChevronRight />DOM Manipulation</li>
                      <li><BiChevronRight />Dynamic Interface</li>
                    </ul>
                  <li>React</li>
                    <ul className="specific-skills-list">
                      <li><BiChevronRight />React Routing</li>
                      <li><BiChevronRight />Framer Motion Animations</li>
                    </ul>
                </ol>
              </motion.div>
            </div>
            <div className="about-about-me">
              <h2>About Me</h2>
              <motion.div
                variants={childVariant}
              >
                <p>
                I am a Junior Developer. I have experience creating websites using my knowledge in HTML, CSS and Javascript. I can build a static landing page with a fantastic UI that will look appealing to any eye that falls upon it. I can enhance the site with Javascript to make the page dynamic. I can build that same project using the very popular front-end framework, React.
                </p>
                <p>
                I have a passion for learning technology and improving my skillset. I tackle everything that I do with the mindset of constant improvement and becoming the most capable developer that I can be. Any technology that I undertake that I am not proficient at I will strive to master in the most efficient time that I possibly can.
                </p>
              </motion.div>
            </div>
        </motion.div>
    )
}

export default About;