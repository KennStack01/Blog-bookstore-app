import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import ShareToSocial from '../Sharing/ShareToSocial'



const ChroniquesList = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsChronique(sort: {fields: dateDePublicationDeLaChronique, order: DESC}) {
            edges {
                node {
                    imageDeLaChronique {
                        url
                    }
                    leTitreDeLaChronique
                    id
                    descriptionDeLaChronique
                    slug
                    dateDePublicationDeLaChronique(formatString: "DD MMMM YYYY", locale: "fr")
                }
            }
        }
    }
    `)

    const allChroniques = data.allDatoCmsChronique.edges.map(({node}) => node)

    return (
        <div>
            <div className="">
                <div className="grid justify-items-center lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10 transform transition duration-500 hover:scale-105" key={chronique.id}>
                            {/* Picture */}
                            <Link to={`/chroniques/${chronique.slug}`}>
                                <img
                                    className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                    src={chronique.imageDeLaChronique.url}
                                    alt=""
                                    />
                            </Link>
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <Link to={`/chroniques/${chronique.slug}`}>
                                    <div>
                                        <h1 className="text-sm md:text-md font-semibold hover:text-yellow-600 hover:underline mt-1"> {chronique.leTitreDeLaChronique} </h1>
                                    </div>
                                </Link>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {chronique.descriptionDeLaChronique}
                            </p>
                            
                            <div className="flex flex-row justify-between">
                                <div className="text-xs font-normal mt-4">
                                    <p className="text-gray-600 mx-3">
                                        { `Le ${chronique.dateDePublicationDeLaChronique}`}
                                    </p>
                                </div>
                                <div className="flex flex-row justify-end mt-2 mr-5">
                                    <Link to={`/chroniques/${chronique.slug}`}>
                                        <button className="px-5 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded">
                                            Lire
                                        </button>
                                    </Link>
                                    <div className="z-100 ml-3 text-gray-600">
                                        <ShareToSocial  title={chronique.leTitreDeLaChronique} description={chronique.descriptionDeLaChronique} slug={chronique.slug} />
                                    </div>
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
