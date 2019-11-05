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
            <div class={styles.parallax}>
                <div class="container">
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
            <div class="container">
                <div>
                    {data.projects.edges.map((value, index) => {
                        return <Project data={value.node} left={index%2} />
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
                <div class={`row ${styles.project} ${props.left ? 'flex-row-reverse' : ''}`}>
                    <div class="col-md-8" >
                        <div class={styles.thumbContainer}>
                            <div class={styles.thumbnail}>
                                {props.data.frontmatter.featuredImage ? (
                                    <Img sizes={props.data.frontmatter.featuredImage.childImageSharp.sizes}/>
                                ) : ""}
                            </div>
                        </div>
                    </div>
                    <div class={`col-md-4 ${styles.desc}`}>
                        <h4>{props.data.frontmatter.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: props.data.html }} class={styles.descHtml}></div>
                        <Link to="/project" class={`btn ${styles.more}`} >Read More </Link>
                    </div>                    
                </div>
            </div>
        </Slide>
    );
}

export default Portfolio