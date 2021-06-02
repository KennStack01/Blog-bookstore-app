import React from 'react'
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'
import RecitPoesie from '../Components/Recits&Poesies/RecitPoesie'

const recits = () => {
    return (
        <div>
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Récits et Poésies</h1>
                    <p className="text-sm"> Parcourir les écrits des Poètes </p>
                </div>
                <div className="my-4 sticky top-0 bg-white pb-3">
                    <PageList/>
                </div>
                <RecitPoesie/>
            </Layout>
        </div>
    )
}

export default recits
