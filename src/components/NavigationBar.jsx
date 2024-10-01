import React from 'react'
import logo from '../assets/logo 2-cropped.svg'
import menu from '../menu-icon.svg'
import '../App.css';

const NavigationBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark nav-shadow " style={{backgroundColor: "transparent" }}>
          <div class="container-fluid" >
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" width="75" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
              <img src={menu} width="35" />
            </button>
            {/* <div class="justify-end" id="navbarNavAltMarkup">
              <div class="flex flex-col">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </div>
            </div> */}
          </div>
        </nav>
  )
}

export default NavigationBar