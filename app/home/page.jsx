import React from 'react';
import Hero from '../components/home/hero';
import TopRated from '../components/home/topRated';
import Steps from '../components/home/steps';
import PatientStories from '../components/home/patientStories';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TopRated />
      <Steps />
      <PatientStories />
    </div>
  );
}
