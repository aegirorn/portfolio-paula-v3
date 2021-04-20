import React from "react"
import Title from "../components/Title"
import Seo from "../components/Seo"
import aboutPhoto from "../../static/images/projects-3.jpg"

const About = () => {
  aboutPhoto =
    "https://res.cloudinary.com/dkgrjtewg/image/upload/v1618700014/portfolio-web/projects-4_ci44rr.jpg"
  const title = "about paula"
  const info = "Here is some information about how I am a great developer"
  const stack = [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      title: "REACT.JS",
    },
    {
      id: 5,
      title: "NODE.JS",
    },
    {
      id: 6,
      title: "GATSBY.JS",
    },
  ]
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={aboutPhoto} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
