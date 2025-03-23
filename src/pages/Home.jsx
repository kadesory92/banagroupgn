import React from 'react'
import Header from '../components/inc/Header'
import SectionAbout from '../components/inc/SectionAbout'
import SectionService from '../components/inc/SectionService'
import SectionValues from '../components/inc/SectionValues'
import SectionPortfolio from '../components/inc/SectionPortfolio'
import SectionResearchInnovation from '../components/inc/SectionResearchInnovation '
import SectionNewsBlog from '../components/inc/SectionNewsBlog '
import SectionCareers from '../components/inc/SectionCareers'
import SectionPartnershipsCollaboration from '../components/inc/SectionPartnershipsCollaboration'
import SectionCustomerSpace from '../components/inc/SectionCustomerSpace'
import SectionFaqSupport from '../components/inc/SectionFaqSupport'
import SectionTeam from '../components/inc/SectionTeam'

export const Home = () => {
  return (
    <div>
        <Header />
        <SectionAbout />
        <SectionService />
        <SectionValues />
        <SectionPortfolio />
        <SectionResearchInnovation />
        <SectionNewsBlog />
        <SectionCareers />
        <SectionPartnershipsCollaboration />
        <SectionCustomerSpace />
        <SectionFaqSupport />
        <SectionTeam />
    </div>
  )
}
