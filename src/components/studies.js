import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import styles from './studies.module.scss';
import Section from "../components/section";
import Slide from "react-reveal/Slide";

const Studies = () => {

    const data = useStaticQuery(graphql`
        query {
            studies: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/(studies)/.*.md$/"}},
                sort: {fields: frontmatter___start, order: DESC}
            ) {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            city
                            school
                            start
                            end
                            more
                        }
                    }
                }
            }
        }
    `);

    return (
        <Section id="studies" class={styles.studies} dark>
            <div className={`container ${styles.container}`}>
                <h2><span className="fa fa-graduation-cap"></span> Ma Formation</h2>
                <div className={styles.timeline}>
                    {data.studies.edges.map((value, index) => {
                        return <Study data={value.node} left={index%2} key={value.node.id}/>
                    })}
                </div>
            </div>
        </Section>
    );
}

const Study = (props) => {
        return (
            <Slide {...props.left ? {left:true} : {right:true}}>
                <div>
                    <div 
                        className={`${styles.item} ${props.left ? styles.left : styles.right}`} 
                        data-size={props.data.frontmatter.end - props.data.frontmatter.start}
                        data-city={props.data.frontmatter.city}
                    >
                        <div 
                            className={styles.title}
                        >
                            <span className={styles.years}>{props.data.frontmatter.start} - {props.data.frontmatter.end}</span>
                            <span className={styles.school}>{props.data.frontmatter.school}</span>
                        </div>
                        <div className={styles.desc}>
                            <p className={styles.city}>{props.data.frontmatter.city}</p>
                            <div
                                dangerouslySetInnerHTML={{ __html: props.data.html }}
                            >
                            </div>
                            {props.data.frontmatter.more ? (
                                <a href={props.data.frontmatter.more}>Learn More <span className="fa fa-angle-right"></span></a>
                            ) : ""}
                        </div>
                    </div>
                </div>
                
            </Slide>
                    
        );

}

export default Studies