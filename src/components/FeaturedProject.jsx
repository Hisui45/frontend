import '../App.css';
import React from 'react'

const FeaturedProject = () => {
  return (
    <span className='project-container'>
          <div className='project-line-decoration line-2' />
          <h4>Featured Project</h4>
          <h3>SCODD</h3>
          <h5>Mobile Development</h5>
          <img src='https://placehold.co/348x200'></img>
          <div className='tech-container'>
            <span className='tech-item'>Kotlin</span>
            <span className='tech-item'>Material Design 3</span>
            <span className='tech-item'>Compose</span>
            <span className='tech-item'>Android Jetpack</span>
          </div>
          <div className='feature-description'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.
            </span>
          </div>
          <a className='feature-expand'>More</a>
    </span>
  )
}

export default FeaturedProject