import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { IoArrowBackSharp } from 'react-icons/io5'

const Chronique = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulChronique {
                image {
                    file {
                        url
                    }
                }
                titreDeLaChronique
                auteurDeLaChronique
                date(formatString: "DD MMMM YYYY", locale: "fr")
                slug
            }
        }

    `)

    return (
        
        <div>
            <div>
                <div>
                    <Link to='..'>
                        <IoArrowBackSharp/>
                    </Link>
                </div>
                <img 
                    src={`${data.contentfulChronique.image.file.url}`} 
                    alt={`${data.contentfulChronique.titeDeLaChronique}`} 
                    className="w-full h-40 md:h-48 object-cover object-center mt-6"
                />
                <div className="flex flex-col">
                    <h1 className="text-lg text-center mx-3 my-4 md:mx-auto"> {data.contentfulChronique.titreDeLaChronique} </h1>
                    <div className="flex flex-row justify-between mx-3 mt-4 ">
                        <p className="text-xs text-gray-700 md:mr-5">Auteur: <span className="font-semibold"> {data.contentfulChronique.auteurDeLaChronique} </span> </p>
                        <p className="text-xs text-gray-700 md:ml-5">{data.contentfulChronique.date} </p>
                    </div>
                    <div className="divide-y divide-mirage-500 mx-2 md:mx-10">
                        <div className="bottom-0"></div>
                        <div className="bottom-0"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chronique
