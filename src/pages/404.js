import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import SEO from '../Components/Seo'


function NotFound() {
    return (
        <div>
            <SEO title="Page Inconnue" description="Page non trouvée" />
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Page Inconnue</h1>
                    <p className="text-md font-medium"> Oops! Vous êtes au mauvais endroit🙄 <span className="text-xl" role="img">🚀</span>  </p>
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

export default NotFound
