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
                      <li><BiChevronRight />Context Api</li>
                      <li><BiChevronRight />React Routing</li>
                      <li><BiChevronRight />Framer Motion Animations</li>
                    </ul>
                  <li>Node Js</li>
                    <ul className="specific-skills-list">
                      <li><BiChevronRight />Express</li>
                      <li><BiChevronRight />Creating an API</li>
                      <li><BiChevronRight />CRUD Operations</li>
                    </ul>
                  <li>Git/Github</li>
                    <ul className="specific-skills-list">
                      <li><BiChevronRight />Relevant Git Skills</li>
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
                I am a junior developer and I began my tutelage in July of 2020. I started learning through the coding bootcamp CodeYourFuture Cape Town and learnt the fundementals of HTML, CSS and Javascript. Learning front-end web development has been a wonderful journey this past year. For the first time I felt that I was taking my education into my own hands I was developing skills that could make me valuable to people. I loved learning all the intricacies of this field and I enjoy sharpening my skills day by day.
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