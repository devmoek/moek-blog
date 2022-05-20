import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header


  if (isRootPath) {
    header = (
      <h1 className="main-heading text-3xl font-bold">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  return (
    
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <header className="global-header">{header}</header>
      <nav><Navbar /></nav>
      <main>{children}</main>
      <footer>
        © <a className="hover:underline" href="https://twitter.com/devmoek" >moek</a> {new Date().getFullYear()}
      </footer>
    </div> 
  )
}

export default Layout
