import React from 'react'
import DoctorHero from './DoctorHero'
import DoctorAbout from './DoctorAbout'
import DoctorTeam from './DoctorTeam'
import DoctorContact from './DoctorContact'
import DoctorGallery from './DoctorGallery'
import DoctorTestimonials from './DoctorTestimonials'
import NavBar from './NavBar'

const DoctorPage = () => {
  return (
    <div className=' space-y-6 sm:space-y-12 md:space-y-16'>
      <NavBar/>
      <DoctorHero/>
      <DoctorAbout/>
      <DoctorTestimonials/>
      <DoctorTeam/>
      <DoctorGallery/>
      <DoctorContact/>
    </div>
  )
}

export default DoctorPage
