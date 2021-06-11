import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { HiOutlineShare } from 'react-icons/hi'


import Modal from 'react-modal'
import SharingModal from '../Sharing/SharingModal'


// Sharing functionalities (Modal)

Modal.setAppElement('#___gatsby')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '20em',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}


const ChroniquesList = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }


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
                    id
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
                        <section className="flex flex-col bg-white rounded-lg shadow w-72 my-4 pb-3 mx-10" key={chronique.id}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={chronique.image.file.url}
                                alt={chronique.image.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-normal mt-1"> {chronique.titreDeLaChronique} </h1>
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

                            <div className="flex flex-row justify-end mt-2 mr-5">
                                <button className="px-5 py-1 text-white bg-mirage-500 rounded">
                                    Lire
                                </button>
                                <div onClick={openModal} className="text-3xl mx-3 cursor-pointer">
                                    <HiOutlineShare/>
                                </div>
                                <div className="!z-50 justify-center items-center">
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        shouldCloseOnOverlayClick={true}
                                        style={customStyles}>
                                        <SharingModal/>
                                        <div>
                                            <button 
                                                onClick={() => setIsOpen(false)}
                                                className="mt-7 mb-1 p-2"
                                            >
                                                Fermer
                                            </button>
                                        </div>
                                    </Modal>
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
