import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { IoArrowBackSharp } from 'react-icons/io5'
import ShareToSocial from '../Sharing/ShareToSocial'



export default function HeaderForChronique({ data }) {


    const Otherdata = useStaticQuery(graphql`
    query {
        allDatoCmsChronique(
            sort: {fields: dateDePublicationDeLaChronique, order: ASC}
            limit: 5
        ) {
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

    const allChroniques = Otherdata.allDatoCmsChronique.edges.map(({node}) => node)

    return (
        <div>
            <section>
                <div>
                    {/* Add Previous page link path: <Link to=".."></Link> */}
                    <Link to='/' className="absolute z-50 bg-white hover:bg-yellow-500 hover:text-white text-3xl p-2 rounded-full ml-4 mt-4 shadow-md">
                        <IoArrowBackSharp/>
                    </Link>
                </div>
                <img 
                    src={`${data.datoCmsChronique.imageDeLaChronique.url}`} 
                    alt="" 
                    // className="w-full h-48 md:h-60 object-cover object-center mt-6"
                    className="object-cover relative object-center h-60 w-full"
                />
                <div className="flex flex-col mb-12">
                    <h1 className="text-lg text-center font-semibold mx-3 my-4 md:mx-auto"> {data.datoCmsChronique.leTitreDeLaChronique} </h1>
                    <div className="flex flex-row justify-between mx-3 mt-4 ">
                        <p className="text-xs text-gray-700 md:mr-5">Auteur: <span className="font-semibold"> {data.datoCmsChronique.auteurDeLaChronique} </span> </p>
                        <p className="text-xs text-gray-700 md:ml-5">{data.datoCmsChronique.dateDePublicationDeLaChronique} </p>
                    </div>
                    <div className="divide-y divide-mirage-500 mx-2">
                        <div className="bottom-0"></div>
                        <div className="bottom-0"></div>
                    </div>
                </div>
                <div className="text-justify font-light md:font-extralight mx-8 md:mx-20 multiline-text" dangerouslySetInnerHTML={{ __html: data.datoCmsChronique.contenuDeLaChroniqueNode.childMarkdownRemark.html }}></div>
            </section>
            <div className="mt-12">
                <div className="divide-y divide-mirage-500 mx-2">
                        <div className="bottom-0"></div>
                        <div className="bottom-0"></div>
                    </div>
                <h1 className="text-2xl text-center font-bold"> Découvrir d'autres Chroniques 😍 </h1>
                <div>
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
        </div>
    )
}
