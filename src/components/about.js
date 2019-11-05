import React from 'react';
import Section from "./section";
import styles from './about.module.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Zoom from 'react-reveal/Zoom';

function About() {
    const data = useStaticQuery(graphql`
        query {
            imageFace: file(relativePath: { eq: "mael.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            },
            content: file(relativePath: {eq: "about.md"}) {
                childMarkdownRemark {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    `)

    return (
        <Section id="about" class={styles.about}>
            <div class={styles.scrollAstronaut}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.6 107.6" id="star-svg">
                    <path id="star-path" fill="#eee" stroke="black" stroke-width="2"  d=" ... " />
                </svg>
            </div>
            <div class="container row align-items-center">
                <div class="col-md-4 col-lg-3">
                    <div class={styles.face}>
                        <Zoom>
                            <div>
                                <div class={styles.canvas}>
                                    <Img fluid={data.imageFace.childImageSharp.fluid} />
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
                <div class="col-md-8 col-lg-9">
                    <h2>{data.content.childMarkdownRemark.frontmatter.title}</h2>
                    <div
                        class="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: data.content.childMarkdownRemark.html }}
                    />
                </div>
            </div>
        </Section>
    );
}

export default About;
