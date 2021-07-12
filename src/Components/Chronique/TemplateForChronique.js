import React from 'react'
import HeaderForChronique from './HeaderForChronique'
import { useStaticQuery, StaticQuery, graphql } from 'gatsby'
// import Bodytext from './BodyText'

const TemplateForChronique = () => {

    return(
        <StaticQuery
            query={graphql`
                query {
                    datoCmsChronique{
                        imageDeLaChronique {
                            url
                        }
                        leTitreDeLaChronique
                        auteurDeLaChronique
                        dateDePublicationDeLaChronique(formatString: "DD MMMM YYYY", locale: "fr")
                        slug
                    }
                }
            `}
            render={data => (
                <HeaderForChronique data={data} />
            )}
        />
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