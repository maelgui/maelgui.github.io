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
            <div class={`container ${styles.container}`}>
                <h2><span class="fa fa-graduation-cap"></span> Ma Formation</h2>
                <div class={styles.timeline}>
                    {data.studies.edges.map((value, index) => {
                        return <Study data={value.node} left={index%2}/>
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
                        class={`${styles.item} ${props.left ? styles.left : styles.right}`} 
                        data-size={props.data.frontmatter.end - props.data.frontmatter.start}
                        data-city={props.data.frontmatter.city}
                    >
                        <div 
                            class={styles.title}
                        >
                            <span class={styles.years}>{props.data.frontmatter.start} - {props.data.frontmatter.end}</span>
                            <span class={styles.school}>{props.data.frontmatter.school}</span>
                        </div>
                        <div class={styles.desc}>
                            <p class={styles.city}>{props.data.frontmatter.city}</p>
                            <div
                                dangerouslySetInnerHTML={{ __html: props.data.html }}
                            >
                            </div>
                            {props.data.frontmatter.more ? (
                                <a href={props.data.frontmatter.more}>Learn More <span class="fa fa-angle-right"></span></a>
                            ) : ""}
                        </div>
                    </div>
                </div>
                
            </Slide>
                    
        );

}

export default Studies