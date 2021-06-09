import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const Bookstore = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBookToSell {
                edges {
                    node {
                        imageDuLivre {
                            file {
                                url
                            }
                            description
                        }
                        titreDuLivre
                        auteurDuManuel
                        anneDePublication
                        prixDuManuel
                        lienNumeroWhatsApp
                    }
                }
            }
        }

    `)

    const allBooks = data.allContentfulBookToSell.edges.map(({node}) => node)

    return (
        <div className="grid justify-items-center lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
            { allBooks.map( (book) => (
                        <section className="flex flex-col bg-white rounded-lg shadow w-60 my-4 pb-3 mx-5" key={book.titreDuLivre}>
                            {/* Picture */}
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={book.imageDuLivre.file.url}
                                alt={book.imageDuLivre.description}
                                />
                            {/* Title */}
                            <div className="flex-grow m-auto text-mirage-500 text-center mx-1">
                                <div>
                                    <h1 className="text-md md:text-lg font-normal mt-1"> {book.titreDuLivre} </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="flex flex-row m-2 mt-3">
                                <p> Auteur: </p>
                                <p className="text-md font-normal text-justify mx-3">
                                    {` ${book.auteurDuManuel}` }
                                </p>
                            </div>
                            <div className="flex flex-row mx-2 mb-2">
                                <p> Année: </p>
                                <p className="text-md font-normal text-justify mx-3">
                                    {`${new Date(book.anneDePublication).getFullYear()}` }
                                </p>
                            </div>

                            <div className="flex flex-row justify-between mt-2">
                                <div className="flex flex-row font-normal text-xl rounded-lg mx-2 px-3 pt-1 text-white bg-mirage-500">
                                    <p>$</p>
                                    <div>
                                        { book.prixDuManuel }
                                    </div>
                                </div>
                                <button className="px-3 text-xl text-white font-normal rounded-l-lg bg-yellow-600">
                                    <a href={`https://wa.me/${book.lienNumeroWhatsApp}?text=*Mboté+👋*,+Je+veux+acheter+le+livre+intitulé+*${book.titreDuLivre}*,+Comment+m'en+Procurer+dans+24h?`} target="__blank"> Acheter </a>
                                </button>
                            </div>
                        </section>
                    )) }
            
        </div>
    )
}

export default Bookstore
