import React from 'react';
import Section from "./section";
import styles from './about.module.scss';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Zoom from 'react-reveal/Zoom';


class About extends React.Component {

    render () {
        return (
            <StaticQuery
                query={graphql`
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
                `}
                render={data => (
                    <Section id="about" class={styles.about}>
                        <div className="container row align-items-center">
                            <div className="col-md-4 col-lg-3">
                                <div className={styles.face}>
                                    <Zoom>
                                        <div>
                                            <div className={styles.canvas}>
                                                <Img fluid={data.imageFace.childImageSharp.fluid} />
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h2>{data.content.childMarkdownRemark.frontmatter.title}</h2>
                                <div
                                    className="blog-post-content"
                                    dangerouslySetInnerHTML={{ __html: data.content.childMarkdownRemark.html }}
                                />
                            </div>
                        </div>
                    </Section>
                )}
            />
        );
    }
}

export default About;
