import React from 'react'
import HeaderForChronique from '../../Components/Chronique/HeaderForChronique'
import { useStaticQuery, StaticQuery, graphql } from 'gatsby'
// import Bodytext from './BodyText'


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
        }
    }
`


const TemplateForChronique = ({ data }) => {

    return(
        <div>
            <HeaderForChronique data={data} />
        </div>
    )

    // return (
    //     <div>
    //         <div>
    //             {/* Header for Chronique */}
    //             <HeaderForChronique data={data} />
    //             {/* <Bodytext/> */}
    //         </div>
    //     </div>
    // )
}

export default TemplateForChronique