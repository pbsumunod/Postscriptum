import PropTypes from 'prop-types'
import React from 'react'
import project01 from '../images/proj-01.png'
import resume from '../images/resume.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>Company projects</h3>
          <ul>
            <li><b>API Engine</b> (2020) - API that performs based on business operation requirements with Swagger for UI and Azure Durable Function dependencies</li>
            <li><b>7 iOS Applications</b> (2019) - 2 sports apps, 3 productivity apps, 1 meditation app and 1 educational app</li>
            <li><b>QlikView Application</b> (2017 - 2018) - Charts showing the status and performance of business operation</li>
            <li><b>Certiﬁcation Web Application</b> (2017 - 2019) - Web application for the examination of users using ASP.Net MVC</li>
            <li><b>Control Web Service</b> (2017 - 2019) - REST API that controls data from equipment to user interface (vice versa)</li>
            <li><b>IoT System</b> (2016 - 2017) - Web application that shows information created using ASP.Net MVC</li>
            <li><b>Tracking System</b> (2016 - 2019) - Web and console applications that track count using C# and ASP.Net MVC</li>
            <li><b>Data Migration</b> (2016) - Console application that migrates data from MySQL to MS SQL Server</li>
            <li><b>Service Request Android Application</b> (2016) - Mobile application for service request created using Xamarin Android</li>
            <li><b>Email Parser</b> (2016) - Console application that parses incoming emails using C# and Exchange Web Service</li>
          </ul>
          <h3>Personal projects</h3>
          <ul>
            <li><b>Work portfolio</b> - Created using Gatsby JS and hosted to Surge</li>
            <span className="image main">
              <img src={project01} alt="" />
            </span>
            <h4><a href="" target="_blank" id="btn">GitHub</a> | <a href="http://postscriptum.surge.sh/" target="_blank" id="btn">Live</a></h4>
          </ul>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <span className="image main">
            Click image to view the PDF version.
            <a href="https://drive.google.com/file/d/1o8dtij263J_hlg2gV-Hik3sO0aAtSDs7/view?usp=sharing" target="_blank">
            <img src={resume} alt="" />
            </a>
          </span>
          {close}
        </article>

      {/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
