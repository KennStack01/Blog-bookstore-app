import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { HiOutlineShare } from 'react-icons/hi'

const RecitPoesie = () => {

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

    const allRecits = data.allContentfulRecitPoesie.edges.map(({node}) => node)
    const borderColor = ["border-pink-600", "border-blue-600", "border-yellow-600", "border-green-600", "border-red-600", "border-gray-600"]

    return (
        <div>
            <div className="flex flex-col lg:grid lg:grid-cols-2">
                { allRecits.map( (recit) => (
                        <section className={`flex flex-row bg-white h-32 w-auto md:w-90 rounded-l-lg border-r-4 ${borderColor[Math.floor(Math.random() * borderColor.length)]} shadow my-4 mx-2`} key={recit.titreDuRcitOuPosie}>
                            {/* Picture */}
                            <img
                                className="w-32 h-32 md:w-48 md:h-32 object-cover object-center rounded-l-lg"
                                src={recit.imageDuCover.file.url}
                                alt={recit.imageDuCover.title}
                                />
                            {/* Title */}
                            <div className="flex flex-col justify-between">
                                <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                    <div>
                                        <h1 className="text-xs md:text-lg font-semibold mt-1"> {recit.titreDuRcitOuPosie} </h1>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-xs font-normal text-justify m-2 my-1">
                                    {
                                        (JSON.parse(recit.descriptionDuRcit.raw).content[0].content[0].value +
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[1].value + 
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[2].value).substring(0, 100) + '...'
                                    }
                                    {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
                                </p>

                                <div className="flex flex-row justify-end my-2">
                                    <button className="px-3 text-white bg-mirage-500">
                                        Découvrir
                                    </button>
                                    <div className="text-2xl mx-2 cursor-pointer">
                                        <HiOutlineShare/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )) }
                { allRecits.map( (recit) => (
                        <section className={`flex flex-row bg-white h-32 w-auto md:w-90 rounded-l-lg border-r-4 ${borderColor[Math.floor(Math.random() * borderColor.length)]} shadow my-4 mx-2`} key={recit.titreDuRcitOuPosie}>
                            {/* Picture */}
                            <img
                                className="w-32 h-32 md:w-48 md:h-32 object-cover object-center rounded-l-lg"
                                src={recit.imageDuCover.file.url}
                                alt={recit.imageDuCover.title}
                                />
                            {/* Title */}
                            <div className="flex flex-col justify-between">
                                <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                    <div>
                                        <h1 className="text-xs md:text-lg font-semibold mt-1"> {recit.titreDuRcitOuPosie} </h1>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-xs font-normal text-justify m-2 my-1">
                                    {
                                        (JSON.parse(recit.descriptionDuRcit.raw).content[0].content[0].value +
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[1].value + 
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[2].value).substring(0, 100) + '...'
                                    }
                                    {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
                                </p>

                                <div className="flex flex-row justify-end my-2">
                                    <button className="px-3 text-white bg-mirage-500">
                                        Découvrir
                                    </button>
                                    <div className="text-2xl mx-2 cursor-pointer">
                                        <HiOutlineShare/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )) }
                { allRecits.map( (recit) => (
                        <section className={`flex flex-row bg-white h-32 w-auto md:w-90 rounded-l-lg border-r-4 ${borderColor[Math.floor(Math.random() * borderColor.length)]} shadow my-4 mx-2`} key={recit.titreDuRcitOuPosie}>
                            {/* Picture */}
                            <img
                                className="w-32 h-32 md:w-48 md:h-32 object-cover object-center rounded-l-lg"
                                src={recit.imageDuCover.file.url}
                                alt={recit.imageDuCover.title}
                                />
                            {/* Title */}
                            <div className="flex flex-col justify-between">
                                <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                    <div>
                                        <h1 className="text-xs md:text-lg font-semibold mt-1"> {recit.titreDuRcitOuPosie} </h1>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-xs font-normal text-justify m-2 my-1">
                                    {
                                        (JSON.parse(recit.descriptionDuRcit.raw).content[0].content[0].value +
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[1].value + 
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[2].value).substring(0, 100) + '...'
                                    }
                                    {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
                                </p>

                                <div className="flex flex-row justify-end my-2">
                                    <button className="px-3 text-white bg-mirage-500">
                                        Découvrir
                                    </button>
                                    <div className="text-2xl mx-2 cursor-pointer">
                                        <HiOutlineShare/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )) }
                { allRecits.map( (recit) => (
                        <section className={`flex flex-row bg-white h-32 w-auto md:w-90 rounded-l-lg border-r-4 ${borderColor[Math.floor(Math.random() * borderColor.length)]} shadow my-4 mx-2`} key={recit.titreDuRcitOuPosie}>
                            {/* Picture */}
                            <img
                                className="w-32 h-32 md:w-48 md:h-32 object-cover object-center rounded-l-lg"
                                src={recit.imageDuCover.file.url}
                                alt={recit.imageDuCover.title}
                                />
                            {/* Title */}
                            <div className="flex flex-col justify-between">
                                <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                    <div>
                                        <h1 className="text-xs md:text-lg font-semibold mt-1"> {recit.titreDuRcitOuPosie} </h1>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-xs font-normal text-justify m-2 my-1">
                                    {
                                        (JSON.parse(recit.descriptionDuRcit.raw).content[0].content[0].value +
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[1].value + 
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[2].value).substring(0, 100) + '...'
                                    }
                                    {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
                                </p>

                                <div className="flex flex-row justify-end my-2">
                                    <button className="px-3 text-white bg-mirage-500">
                                        Découvrir
                                    </button>
                                    <div className="text-2xl mx-2 cursor-pointer">
                                        <HiOutlineShare/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )) }
                { allRecits.map( (recit) => (
                        <section className={`flex flex-row bg-white h-32 w-auto md:w-90 rounded-l-lg border-r-4 ${borderColor[Math.floor(Math.random() * borderColor.length)]} shadow my-4 mx-2`} key={recit.titreDuRcitOuPosie}>
                            {/* Picture */}
                            <img
                                className="w-32 h-32 md:w-48 md:h-32 object-cover object-center rounded-l-lg"
                                src={recit.imageDuCover.file.url}
                                alt={recit.imageDuCover.title}
                                />
                            {/* Title */}
                            <div className="flex flex-col justify-between">
                                <div className="flex-grow m-auto text-mirage-500 text-center mx-2">
                                    <div>
                                        <h1 className="text-xs md:text-lg font-semibold mt-1"> {recit.titreDuRcitOuPosie} </h1>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-xs font-normal text-justify m-2 my-1">
                                    {
                                        (JSON.parse(recit.descriptionDuRcit.raw).content[0].content[0].value +
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[1].value + 
                                        JSON.parse(recit.descriptionDuRcit.raw).content[0].content[2].value).substring(0, 100) + '...'
                                    }
                                    {/* {JSON.parse(chronique.descriptionDeLaChronique.raw).content[0].content[0].value.substring(0, 130) + '...'} */}
                                </p>

                                <div className="flex flex-row justify-end my-2">
                                    <button className="px-3 text-white bg-mirage-500">
                                        Découvrir
                                    </button>
                                    <div className="text-2xl mx-2 cursor-pointer">
                                        <HiOutlineShare/>
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