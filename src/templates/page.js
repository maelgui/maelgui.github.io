import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const Project = ({ data }) => (
    <Layout noFooter={true}>
        <SEO title="Project" />
        <div className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={ styles.imgContainer }>
                    <Img fluid={image.childImageSharp.fluid} className={ styles.img }/>
                </div>
                <div className={ styles.content } >
                    <h2>{ data.markdownRemark.frontmatter.title }</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
                <div className={styles.navigation}>
                    <a href="javascript:window.history.back();">
                        <div className={styles.aContent}>Go Back</div>
                    </a>
                    <a href="javascript:window.history.back();">
                        <div className={styles.aContent}>Next Part</div>
                    </a>
                </div>
            </div>
        </div>
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default Project
