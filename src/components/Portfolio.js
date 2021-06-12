import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import TVMaze from './images/tv.jpg'
import Country from './images/countries.jpg'

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

const Portfolio = () => {
    return (
        <motion.div className="main" id="portfolio"
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
              <motion.div className="portfolio-card"
                variants={childVariant}
              >
                <div className="portfolio-img">
                  <img src={TVMaze} alt=""/>
                </div>
                <div className="portfolio-name">
                  <h4 className="classic-font">Javascript TVMaze <br /> API Project</h4>
                </div>
                <div className="portfolio-links">
                  <a href="https://github.com/BrettScheepers/tv-show-dom-project" className="portfolio-link" target="_blank" rel="noreferrer" ><FaGithub /></a>
                  <a href="https://cyf-brettscheepers-tv.netlify.app/" className="portfolio-link" target="_blank" rel="noreferrer" ><FaGoogle /></a>
                </div>
              </motion.div>
              <motion.div className="portfolio-card"
                variants={childVariant}
              >
                <div className="portfolio-img">
                  <img src={Country} alt=""/>
                </div>
                <div className="portfolio-name">
                  <h4 className="classic-font">React RESTCountry <br /> API Project</h4>
                </div>
                <div className="portfolio-links">
                  <a href="https://github.com/BrettScheepers/countries-react" className="portfolio-link" target="_blank" rel="noreferrer" ><FaGithub/></a>
                  <a href="https://cyf-brettscheepers-countries-react.netlify.app/" target="_blank" rel="noreferrer" className="portfolio-link"><FaGoogle/></a>
                </div>
              </motion.div>
            </div>
        </motion.div>
    )
}

export default Portfolio;