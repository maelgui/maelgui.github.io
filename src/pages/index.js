import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about";
import Home from "../components/home";
import Studies from "../components/studies";
import Portfolio from "../components/portfolio";

const IndexPage = () => (
  <Layout autohide={true}>
    <SEO title="Home" />
    <Home />
    <About />
    <Studies />
    <Portfolio />
  </Layout>
)

export default IndexPage
