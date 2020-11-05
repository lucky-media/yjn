import Layout from "../components/layout/Layout"
import AboutSection from "../components/partials/AboutSection"

export default function Home() {
  return (
    <Layout>
      <div className="bg-yellow-500">
        <div className="container py-24 lg:py-32">
          <div className="row">
            <div className="lg:col-8">
              <h1 className="font-black text-2xl lg:text-5xl text-blue-500 leading-tight">
                Young Journalists’ Network
                </h1>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
    </Layout>
  )
}