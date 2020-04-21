import React from 'react'
// import { Link } from "gatsby"
import style from "./about.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import Image from "../components/image"

const About = () => (
    <Layout>
        <SEO title="About" />
        <div className={style.container}>
            <h2>About Untools</h2>
            <p>
                Untools is a collection of mental tools for better thinking. 
                It spans systems thinking, problem solving and decision making.
            </p>
            <div className={style.top}>
                <div style={{margin: `0.5rem`}}>
                    <h3>Hi, I'm Adam Amran <span role="img" aria-label="hello-emoji">👋</span></h3>
                    <p>
                        I'm a product designer from Brno, <span role="img" aria-label="Czechia">🇨🇿</span> and a maker of Untools.
                    </p>
                    <p>
                        Let me tell you why I created this little site.
                    </p>
                </div>
                <img src="/adam.png" alt="Portrait of Adam Amran" style={{float: `left`, marginLeft: `2rem`}}></img>
            </div>
            <p>
                As a designer, I'm paid for good thinking. I solve problems and make decisions on day-to-day basis.
                A while ago, I began to look into purposefully improving my thinking. 
                There are plenty of digital design tools, but they are not enough. 
                I couldn't find one place that would offer "brain" tools.
            </p>
            <p>
                Eventually, I found plenty of these tools, but scattered around the web.
                My goal is to build a collection of mental models and frameworks, covering areas like problem solving, systems thinking or decision making.
                I started building it for myself, but I hope it will be useful to many of you.
            </p>
            <p>
                I'm happy to hear your feedback and any suggestions you might have. I'm always looking to add new tools and improve this resource.
                <br/>Connect with me on <a href="https://www.twitter.com/amrancz">Twitter</a>.
            </p>
        </div>
    </Layout>
)

export default About