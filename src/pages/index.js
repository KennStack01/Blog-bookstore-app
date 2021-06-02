import React from "react"
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'
import ChroniquesList from '../Components/Chronique/ChroniquesList'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="mt-6 mb-4 text-mirage-500">
          <h1 className="text-2xl font-bold">Vers et Chroniques</h1>
          <p className="text-sm"> Evadez-vous à travers la Lecture </p>
        </div>
        <div className="my-4 sticky top-0 bg-white pb-3">
          <PageList/>
        </div>
        <ChroniquesList/>
      </Layout>
    </div>
  )
}
