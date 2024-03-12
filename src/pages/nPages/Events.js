import React from 'react'
import Card from './Card'
import E1 from "./E1.jpeg";

function Events() {
  return (
    <>
      <h1>Events</h1>
      <Card 
          imageSrc={E1} 
          title="Event 1" 
          description="Description of Event 1" 
      />
      <Card 
          imageSrc={E1} 
          title="Event 1" 
          description="Description of Event 1" 
      />
      <Card 
          imageSrc={E1} 
          title="Event 1" 
          description="Description of Event 1" 
      />
      <Card 
          imageSrc={E1} 
          title="Event 1" 
          description="Description of Event 1" 
      />
    </>
  )
}

export default Events
