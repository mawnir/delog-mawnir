import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import NCopy from "../components/ncopy"
import 'prismjs/themes/prism-okaidia.css';
import FiestaImg from "../images/main_logo.png"
import Seo from "./seo";
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <div className="header-bg">
        <header className="site-header">

          <div className="site-title">
            <Link to="/"><img src={FiestaImg} alt="A dog smiling in a party hat" /></Link>
          </div>
          <Seo />
          <Navigation />
         
        </header>
        <NCopy />
      </div>

      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> </p>
      </footer>
    </div>
  )
}
