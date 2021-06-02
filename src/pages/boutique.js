import React from 'react'
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'

const boutique = () => {
    return (
        <div>
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Boutiques de Livres</h1>
                    <p className="text-sm"> Commandez des Livres </p>
                </div>
                <div className="my-4 sticky top-0 bg-white pb-3">
                    <PageList/>
                </div>
            </Layout>
        </div>
    )
}

export default boutique
