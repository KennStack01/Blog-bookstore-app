import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { HiOutlineShare } from 'react-icons/hi'

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


                 <div className="flex flex-col md:grid md:grid-cols-3">
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                <div>
                                    <h1 className="text-md font-normal mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-extralight text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'}
                            </p>

                            <div className="flex flex-row justify-end mt-2">
                                <button className="px-3 text-white bg-mirage-500">
                                    Lire
                                </button>
                                <div className="text-2xl mx-2 cursor-pointer">
                                    <HiOutlineShare/>
                                </div>
                            </div>
                        </section>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default ChroniquesList
