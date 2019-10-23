import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import styles from './portfolio.module.scss';
import Section from "../components/section";
import Fade from 'react-reveal/Fade';
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
                                  sizes(maxWidth: 630) {
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
        <Section id="portfolio" class={styles.portfolio}>
            <div class="container">
                <h2>Portfolio</h2>
                <div class="row">
                    {data.projects.edges.map((value, index) => {
                        return <Project data={value.node} />
                    })}
                </div>
            </div>
        </Section>
    );
}

const Project = (props) => {
    return (
        <div class="col-md-3">
            <Fade>
                <div>
                    <a href="#" class={styles.project} data-id="9">
                        <div class={styles.img}>
                            {props.data.frontmatter.featuredImage ? (
                                <Img sizes={props.data.frontmatter.featuredImage.childImageSharp.sizes} />
                            ) : ""}
                        </div>
                        <div class="desc">
                            <span class="txt">
                                <h5>{props.data.frontmatter.title}</h5>
                            </span>
                        </div>
                    </a>
                </div>
            </Fade>
        </div>
    );
}

export default Portfolio