import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Chronique = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulRecitPoesie {
                edges {
                    node {
                        imageDuCover {
                            title
                            file {
                                url
                            }
                        }
                        titreDuRcitOuPosie
                        descriptionDuRcit {
                            raw
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            
        </div>
    )
}

export default Chronique
