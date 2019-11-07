import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from './portfolio.module.scss';
import Section from "../components/section";
import Slide from 'react-reveal/Slide';
import Img from "gatsby-image"

const Portfolio = () => {
        const data = useStaticQuery(graphql`query {
            projects: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/(projects)/.*.md$/"}},
                sort: {fields: frontmatter___year, order: DESC}
            ) {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            title
                            year
                            tags
                            more
                            featuredImage {
                                childImageSharp {
                                  sizes(maxWidth: 1000) {
                                    ...GatsbyImageSharpSizes
                                  }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Section id="portfolio" class={styles.portfolio} head dark>
            <div className={styles.parallax}>
                <div className="container">
                    <div>
                        <div>
                            <h2>Portfolio</h2>
                        </div>
                        <div>
                            <p>Find here all my personnal projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    {data.projects.edges.map((value, index) => {
                        return <Project data={value.node} left={index%2} key={value.node.id} />
                    })}
                </div>
            </div>
        </Section>
    );
}

const Project = (props) => {
    return (
        <Slide up>
            <div>
                <div className={`row ${styles.project} ${props.left ? 'flex-row-reverse' : ''}`}>
                    <div className="col-md-8" >
                        <div className={styles.thumbContainer}>
                            <div className={styles.thumbnail}>
                                {props.data.frontmatter.featuredImage ? (
                                    <Img sizes={props.data.frontmatter.featuredImage.childImageSharp.sizes}/>
                                ) : ""}
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 ${styles.desc}`}>
                        <h4>{props.data.frontmatter.title}</h4>
                        <div className={styles.tags}>
                            {props.data.frontmatter.tags.map((value, index) => {
                                return <span className={styles.tag} key={index}>{value}</span>
                            })}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: props.data.html }} className={styles.descHtml}></div>
                        <Link to="/project" className={`btn ${styles.more}`} >Read More </Link>
                    </div>                    
                </div>
            </div>
        </Slide>
    );
}

export default Portfolio