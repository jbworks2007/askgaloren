import React from 'react'
import Layout from '@/layout/Layout'
import Services from '@/components/Home/Services'
import Guild from '@/components/Home/Guild'
import Bustle from '@/components/Home/Bustle'
import Feature from '@/components/Home/Feature'
import LowerSection from '@/components/Home/LowerSection'
import Methodology from '@/components/Home/Methodology'
import Industry from '@/components/Home/Industry'
import HeroVideo from '@/components/Misc/HeroVideo'
import FeatureTwo from '@/components/Home/FeatureTwo'



export default function Home() {
  return (
    <Layout title='AskGalore.nl' classOpt=''>
      <HeroVideo />
      <Guild />
      <Services />
      <FeatureTwo />
      {/* <Feature /> */}
      <Bustle />
      <Methodology />
      <Industry />
      {/* <LowerSection /> */}
    </Layout>)
}
