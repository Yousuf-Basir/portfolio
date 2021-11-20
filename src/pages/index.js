import React from "react"
import Footer from "../components/Footer"
import HalmetHead from "../components/Head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import LogoCloud from "../components/LogoCloud"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Home() {
  return(
    <Layout>
      <HalmetHead />
      <Navbar />
      <Hero />
      <LogoCloud />
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  )
}
