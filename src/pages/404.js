import React from 'react'
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'


function NotFound() {
    return (
        <div>
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <h1 className="text-2xl font-bold">Page Invalide</h1>
                    <p className="text-sm">  </p>
                </div>
                <div className="my-4 sticky top-0 bg-white pb-3">
                    <PageList/>
                </div>
                <div>
                    <p className="text-2xl font-semibold">Page Inconnue! 🙄</p>
                </div>
            </Layout>
        </div>
    )
}

export default NotFound
