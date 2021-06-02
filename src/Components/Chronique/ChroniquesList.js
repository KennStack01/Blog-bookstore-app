import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { HiOutlineShare } from 'react-icons/hi'
// import renderRichText from '@contentful/rich-text-react-renderer'

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
            <div className="">
                <div className="grid justify-items-center lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 ">
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-semibold mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {
                                    (JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value +
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[1].value + 
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[2].value).substring(0, 130) + '...'
                                }
                                {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
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
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-semibold mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {
                                    (JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value +
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[1].value + 
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[2].value).substring(0, 130) + '...'
                                }
                                {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
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
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-semibold mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {
                                    (JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value +
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[1].value + 
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[2].value).substring(0, 130) + '...'
                                }
                                {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
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
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-semibold mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {
                                    (JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value +
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[1].value + 
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[2].value).substring(0, 130) + '...'
                                }
                                {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
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
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-semibold mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {
                                    (JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value +
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[1].value + 
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[2].value).substring(0, 130) + '...'
                                }
                                {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
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
                    { allChroniques.map( (chronique) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.titreDeLaChronique}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-semibold mt-1"> {chronique.titreDeLaChronique} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-xs font-normal text-justify m-2 my-3">
                                {/* {console.log(JSON.parse(chronique.descriptionDeLaChronique.raw))} */}
                                {
                                    (JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value +
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[1].value + 
                                    JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[2].value).substring(0, 130) + '...'
                                }
                                {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
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
