import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const ChroniquesList = () => {

    const data = useStaticQuery(graphql`
        allContentfulChronique(sort: {fields: image___createdAt, order: DESC}) {
            edges {
                node {
                    image {
                        file {
                            url
                        }
                        description
                    }
                    titreDeLaChronique
                    descriptionDeLaChronique {
                        raw
                    }
                }
            }
        }
    `)

    return (
        <div>
            <div>
                {/* Picture */}
                {/* Title */}
                {/* Description */}
                {/* Buttons */}
            </div>
        </div>
    )
}

export default ChroniquesList
