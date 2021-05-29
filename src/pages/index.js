import React from "react"
import Layout from '../Components/Layout'
import PageList from '../Components/PagesList'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="mt-6 mb-4 text-mirage-500">
          <h1 className="text-2xl font-bold">Vers et Chroniques</h1>
          <p className="text-sm"> Evadez-vous à travers la Lecture </p>
        </div>
        <div className="my-4">
          <PageList/>
        </div>
      </Layout>
    </div>
  )
}
