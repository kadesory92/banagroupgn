import React from 'react'
import Header from './inc/Header'
import SectionAbout from './inc/SectionAbout'
import SectionService from './inc/SectionService'
import SectionValues from './inc/SectionValues'
import SectionPortfolio from './inc/SectionPortfolio'
import SectionResearchInnovation from './inc/SectionResearchInnovation '
import SectionNewsBlog from './inc/SectionNewsBlog '
import SectionCareers from './inc/SectionCareers'
import SectionPartnershipsCollaboration from './inc/SectionPartnershipsCollaboration'
import SectionCustomerSpace from './inc/SectionCustomerSpace'
import SectionFaqSupport from './inc/SectionFaqSupport'
import SectionTeam from './inc/SectionTeam'

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
