import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import Seo from '../Components/Seo'

const quiSommesNous = () => {
    return (
        <div>
            <Seo title="Qui sommes-nous?" description="Découvrir l'Equipe de Vers et Chroniques" />
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Qui sommes-nous? <span className="text-xl" role="img" >😉</span> </h1>
                    <p className="text-md font-medium text-justify md:mx-10 mx-3 my-5">
                        Vers et Chroniques est une réunion de passionnés de la littérature narrative et poétique qui associent 
                        leurs énergies et savoirs pour vous donner des idées de lecture du monde francophone, faire découvrir 
                        les auteurs et leurs pensées et vous offrir des livres à lire gratuitement ou à acheter. <br />
                        <span className="">
                            Peniel KATOMBE en est l’administrateur.
                        </span>

                    </p>
                </div>
                <button className="bg-mirage-500 mx-auto mt-10 p-4 rounded-md font-semibold text-white"> 
                    <Link to="/">
                        Page d'Accueil <span role="img">🏡</span> 
                    </Link>
                </button>
            </Layout>
        </div>
    )
}

export default quiSommesNous
