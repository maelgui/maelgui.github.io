import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'


import Layout from "../components/layout"
import styles from "./page-header.module.scss"
import SEO from "../components/seo"

const PageHeader = ({ data }) => (
    <Layout noFooter={true}>
        <SEO title="Project" />
        <div className={styles.header}>
            <div className={`container ${styles.back}`}>
                <Link to={`/#${data.markdownRemark.id}`}><FontAwesomeIcon icon={faChevronLeft} /> Go back</Link>
            </div>
            <div className={`container ${styles.container}`}>
                <div className={ styles.imgContainer }>
                    <Img fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} className={ styles.img }/>
                </div>
                <div className={ styles.content } >
                    <h2>{ data.markdownRemark.frontmatter.title }</h2>
                    <div className={styles.tags}>
                        {data.markdownRemark.frontmatter.tags.map((value, index) => {
                            return <span className={styles.tag} key={index}>{value}</span>
                        })}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <div className="d-flex justify-content-between">
                        {data.markdownRemark.frontmatter.more ? (
                            <a href={data.markdownRemark.frontmatter.more} className={`btn ${styles.btn}`}><FontAwesomeIcon icon={faGlobeEurope} /> Access project</a>
                        ) : <span></span>}
                        {data.markdownRemark.frontmatter.next ? (
                            <Link to={data.markdownRemark.frontmatter.next} className={`btn ${styles.btn}`}>Read next part <FontAwesomeIcon icon={faChevronRight} /></Link>
                        ) : <span></span>}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                tags
                more
                next
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

export default PageHeader
