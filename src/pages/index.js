import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about";
import Header from "../components/header";
import Studies from "../components/studies";
import Portfolio from "../components/portfolio";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Studies />
    <Portfolio />
  </Layout>
)

export default IndexPage
