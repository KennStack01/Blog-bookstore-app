import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import Seo from '../Components/Seo'


function SuccessForm() {
    return (
        <div>
            <Seo title="Merci de nous écrire" description="Merci de nous écrire" />
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Bien réçu😊</h1>
                    <p className="text-md font-medium"> Nous allons vous répondre d'ici peu 😎 <span className="text-xl" role="img">🚀</span>  </p>
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

export default SuccessForm
