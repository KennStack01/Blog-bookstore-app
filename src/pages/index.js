import React from "react"
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'
import ChroniquesList from '../Components/Chronique/ChroniquesList'
import Seo from '../Components/Seo'

export default function Home() {
  return (
    <div>
      <Seo title="Accueil | Les Chroniques" description="Evadez-vous à travers les Meilleures Chroniques." />
      <Layout>
        <div className="mt-6 mb-4 text-mirage-500">
          <h1 className="text-2xl font-bold">Vers et Chroniques</h1>
          <p className="text-sm"> Evadez-vous à travers la Lecture </p>
        </div>
        <div className="my-4 sticky top-0 bg-white pb-3 z-10">
          <PageList/>
        </div>
        <div className="z-50">
          <ChroniquesList/>
        </div>
      </Layout>
    </div>
  )
}
