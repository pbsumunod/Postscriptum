import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <img className="icon" src={logo} alt="" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>PAMELA SUMUNOD</h1>
        <h3>Software Support Engineer | iOS Developer | Application Developer/Consultant</h3>
        <h4>
          C# | Swift | ASP.Net MVC | ASP.Net Core | HTML | CSS | Vanilla JS | jQuery | Bootstrap
          <br/>
          | T-SQL (MS SQL Server) | REST API | MySQL | Xamarin Android | QlikView | GIT | Microsoft Azure
        </h4>
        {/* <h5>Effective communicator | Fast learner | Team contributor | Problem solver</h5> */}
        <h3><a href="https://www.linkedin.com/in/pamela-sumunod/" target="_blank" id="btn">LinkedIn</a> | <a href="https://github.com/pbsumunod" target="_blank" id="btn">GitHub</a> | <a href="mailto:pamela.sumunod@gmail.com" target="_blank" id="btn">Email</a></h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button 
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('resume')
            }}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
