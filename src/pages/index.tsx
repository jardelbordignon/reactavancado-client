import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { client, GET_LANDING_PAGE } from 'gql'
import { LandingPageType } from 'types/api'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

const Index: NextPage<LandingPageType> = ({ landingPage }) => {
  const {
    logo,
    header,
    sectionAboutProject,
    sectionTech,
    sectionConcepts,
    sectionModules,
    sectionAgenda,
    pricingBox,
    sectionAboutUs,
    sectionReviews,
    sectionFaq
  } = landingPage.data.attributes

  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda {...sectionAgenda} />
      <PricingBox {...pricingBox} />
      <SectionAboutUs {...sectionAboutUs} />
      <SectionReviews {...sectionReviews} />
      <SectionFaq {...sectionFaq} />
      <Footer />
      <JsonSchema />
    </>
  )
}

export default Index

// getStaticProps -> sever para buscar dados da página e disponibilizar nas props, build time
export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<LandingPageType>(
    GET_LANDING_PAGE
  )

  console.log(
    'landingPage',
    JSON.stringify(landingPage.data.attributes.sectionConcepts, null, 2)
  )

  return {
    props: { landingPage }
  }
}
