import React from 'react'
import ContentForChronique from '../../Components/Chronique/ContentForChronique'
import { graphql } from 'gatsby'


const TemplateForChronique = ({ data }) => {

    return(
        <div>
            <ContentForChronique data={data} />
        </div>
    )
}

export default TemplateForChronique


export const query = graphql`
    query ($slug: String!) {
            datoCmsChronique(slug: {eq: $slug}) {
                imageDeLaChronique {
                    url
                }
                leTitreDeLaChronique
                auteurDeLaChronique
                dateDePublicationDeLaChronique(formatString: "DD MMMM YYYY", locale: "fr")
                slug
                contenuDeLaChroniqueNode {
                    childMarkdownRemark {
                        html
                    }
                }
            }
    }
`
