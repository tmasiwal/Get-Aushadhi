import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction" 
import timegridPlugin from '@fullcalendar/timegrid'

const Calender = () => {
  
  return (
    <div>
      <FullCalendar
      
      plugins={[dayGridPlugin,timegridPlugin,interactionPlugin]}
      initialView='dayGridMonth'
      headerToolbar={
        {   start: 'prev,next today',
        center: 'title',
       end: 'dayGridMonth,dayGridWeek,timeGridDay'}
      }
      height={"90vh"}
      eventColor='blue'
      />
    </div>
  )
}

export default Calender
