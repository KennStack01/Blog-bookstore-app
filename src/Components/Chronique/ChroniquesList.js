import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const ChroniquesList = () => {

    const data = useStaticQuery(graphql`
    query {
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
    }
    `)

    const allChroniques = data.allContentfulChronique.edges.map(({node}) => node)

    return (
        <div>
            <div>

                {/* Buttons */}
                 <div className="flex flex-col md:grid md:grid-cols-3">
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow md:h-80 h-72 w-72 m-auto my-4">
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                <div>
                                    <h1 className="text-md font-regular font-medium"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                        </section>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default ChroniquesList
