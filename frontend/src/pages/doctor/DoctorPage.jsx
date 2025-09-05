import React from 'react'
import DoctorHero from './DoctorHero'
import DoctorAbout from './DoctorAbout'
import DoctorTeam from './DoctorTeam'
import DoctorContact from './DoctorContact'
import DoctorGallery from './DoctorGallery'
import DoctorTestimonials from './DoctorTestimonials'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { doctors } from '@/constant/doctors'

const DoctorPage = () => {
  const { doctorId } = useParams();
  const doctor = doctors.find(doctor=>doctor.slug === doctorId);

  console.log(doctor);
  return (
    <div className=' space-y-6 sm:space-y-12 md:space-y-16'>
      <NavBar/>
      <DoctorHero doctor={doctor}/>
      <DoctorAbout/>
      <DoctorTestimonials/>
      <DoctorTeam/>
      <DoctorGallery/>
      <DoctorContact doctor={doctor}/>
    </div>
  )
}

export default DoctorPage
