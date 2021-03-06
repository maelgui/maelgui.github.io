/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "./navbar";
import Footer from "./footer";
import "./layout.scss";

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navbar autohide={this.props.autohide} siteTitle={data.site.siteMetadata.title} />
            <main>{this.props.children}</main>
            {!this.props.noFooter &&
              <Footer />
            }
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Navbar.defaultProps = {
  autohide: false,
}

export default Layout
