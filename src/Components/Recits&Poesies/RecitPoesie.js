import React, { useState }  from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import ShareToSocial from '../Sharing/ShareToSocial'


const RecitPoesie = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRecitEtPoesie {
                edges {
                    node {
                        imageDuRecit {
                            url
                        }
                        titreDuRecit
                        descriptionDuRecit
                        dateDePublicationDuRecit
                        slug
                    }
                }
            }
        }
    `)

    const allRecits = data.allDatoCmsRecitEtPoesie.edges.map(({node}) => node)
    const borderColor = ["border-pink-600", "border-blue-600", "border-yellow-600", "border-green-600", "border-red-600", "border-gray-600"]

    return (
        <div>
            <div className="flex flex-col lg:grid lg:grid-cols-2">
                { allRecits.map( (recit) => (
                        <section className={`flex flex-row bg-white  w-auto md:w-90 rounded-l-lg border-r-4 ${borderColor[Math.floor(Math.random() * borderColor.length)]} shadow my-4 mx-2 transform transition duration-500 hover:scale-105`} key={recit.titreDuRecit}>
                            {/* Picture */}
                            <img
                                className="w-32 md:w-48 md:h-32 object-cover object-center rounded-l-lg"
                                src={recit.imageDuRecit.url}
                                alt=""
                                />
                            {/* Title */}
                            <div className="flex flex-col justify-between">
                                <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                    <Link to={`/recits/${recit.slug}`}>
                                        <h1 className="text-xs md:text-lg font-semibold mt-1 hover:text-yellow-600 hover:underline"> {recit.titreDuRecit} </h1>
                                    </Link>
                                </div>
                                {/* Description */}
                                <p className="text-xs font-normal text-justify m-2 my-1">
                                    {`${recit.descriptionDuRecit.substring(0, 155)}...`}
                                </p>

                                <div className="flex flex-row justify-end text-sm my-2 mr-5">
                                    <Link to={`/recits/${recit.slug}`}>
                                        <button className="px-5 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded">
                                            Découvrir
                                        </button>
                                    </Link>
                                    <div className="z-100 ml-3 text-gray-600">
                                        <ShareToSocial  title={recit.titreDuRecit} description={recit.descriptionDuRecit} slug={recit.slug} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )) }
            </div>
        </div>
    )
}

export default RecitPoesie
