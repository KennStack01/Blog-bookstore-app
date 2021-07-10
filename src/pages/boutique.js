import React from 'react'
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'
import Bookstore from '../Components/Bookstore/Bookstore'
import Seo from '../Components/Seo'

const boutique = () => {
    return (
        <div>
            <Seo title="Librairies" description="Acheter des Livres en un seul Clic" />
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Boutiques de Livres</h1>
                    <p className="text-sm"> Commandez des Livres </p>
                </div>
                <div className="my-4 sticky top-0 bg-white pb-3">
                    <PageList/>
                </div>
                <Bookstore/>
            </Layout>
        </div>
    )
}

export default boutique
