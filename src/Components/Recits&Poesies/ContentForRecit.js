import React from 'react'
import { Link } from "gatsby"
import { IoArrowBackSharp } from 'react-icons/io5'


export default function HeaderForRecit({ data }) {
    return (
        <section>
            <div>
                {/* Add Previous page link path: <Link to=".."></Link> */}
                <Link to='/' className="absolute z-50 bg-white hover:bg-yellow-500 hover:text-white text-3xl p-2 rounded-full ml-4 mt-4 shadow-md">
                    <IoArrowBackSharp/>
                </Link>
            </div>
            <img 
                src={`${data.datoCmsRecitEtPoesie.imageDuRecit.url}`} 
                alt="" 
                // className="w-full h-48 md:h-60 object-cover object-center mt-6"
                className="object-cover relative object-center h-60 w-full"
            />
            <div className="flex flex-col mb-12">
                <h1 className="text-lg text-center font-semibold mx-3 my-4 md:mx-auto"> {data.datoCmsRecitEtPoesie.titreDuRecit} </h1>
                <div className="flex flex-row justify-between mx-3 mt-4 ">
                    <p className="text-xs text-gray-700 md:mr-5">Auteur: <span className="font-semibold"> {data.datoCmsRecitEtPoesie.auteurDuRecit} </span> </p>
                    <p className="text-xs text-gray-700 md:ml-5">{data.datoCmsRecitEtPoesie.dateDePublicationDuRecit} </p>
                </div>
                <div className="divide-y divide-mirage-500 mx-2">
                    <div className="bottom-0"></div>
                    <div className="bottom-0"></div>
                </div>
            </div>
            <div className="text-justify font-light md:font-extralight mx-8 md:mx-20 multiline-text" dangerouslySetInnerHTML={{ __html: data.datoCmsRecitEtPoesie.contenuDuRecitNode.childMarkdownRemark.html }}></div>
        </section>
    )
}
