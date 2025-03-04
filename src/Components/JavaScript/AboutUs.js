import React from 'react'
import { ChevronRight, Users } from 'lucide-react'
import "../CSS/About.css"

const stats = [
  { value: '25+', label: 'Active Users' },
  { value: '5+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'States' }
]

const values = [
  {
    title: 'Innovation First',
    description: "We continuously push the boundaries of what's possible in development tools, creating solutions that make developers' lives easier."
  },
  {
    title: 'Developer Focused',
    description: 'Every feature we build starts with the developer experience in mind. We believe in creating tools that developers love to use.'
  },
  {
    title: 'Quality Driven',
    description: 'We maintain the highest standards in our code quality, documentation, and support to ensure reliable development experiences.'
  }
]

const team = [
  {
    name: 'Rahul Agarwal',
    role: 'Founder & CEO',
    bio: 'Former engineer with 3+ years of developer tools experience. Passionate about cyber security, cloud technologies, network security, and DevOps. Skilled in building secure, scalable, and efficient solutions.'
  }
  ,
  {
    name: 'Naved Khan',
    role: 'Lead Developer',
    bio: 'Full-stack expert specializing in developer productivity tools.'
  },
  {
    name: 'Rahul Kumar',
    role: 'Chief Visionary Officer',
    bio: 'A passionate leader focused on empowering teams and creating intuitive developer experiences. Rahul guides the strategic direction and fosters an environment of innovation and collaboration.'
  }
]

const AboutUs = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Elevating Developer Experience</h1>
          <p>We are passionate about creating tools that help developers soar to new heights</p>
          <a href='/contact'>
            <button className="button button-primary">
              Get Started
              <ChevronRight className="icon" />
            </button></a>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team">
        <div className="team-container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">
                  <Users className="avatar-icon" />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of developers who are already using Developer Kite to improve their development workflow.</p>
          <a href="/contact">
            <button class="button button-primary">Start Free Trial</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutUs