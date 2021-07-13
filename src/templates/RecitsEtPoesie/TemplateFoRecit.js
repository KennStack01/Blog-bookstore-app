import React from 'react'
import ContentForRecit from '../../Components/Recits&Poesies/ContentForRecit'
import { graphql } from 'gatsby'


const TemplateFoRecit = ({ data }) => {

    return(
        <div>
            <ContentForRecit data={data} />
        </div>
    )
}

export default TemplateFoRecit


export const query = graphql`
    query($slug: String!) {
            datoCmsRecitEtPoesie(slug: {eq: $slug}) {
                imageDuRecit {
                    url
                }
                titreDuRecit
                auteurDuRecit
                descriptionDuRecit
                dateDePublicationDuRecit(formatString: "DD MMMM YYYY", locale: "fr")
                slug
                contenuDuRecitNode {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
`
