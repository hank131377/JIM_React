import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Calendars.css'
const Calendars = () => {
  const [date, setDate] = useState(new Date())
  const onChnage = (date) => {
    console.log(date)
    setDate(date)
  }
  return (
    <div>
      <Calendar onChange={onChnage} value={date} className="calendar" />
      {date.toString()}
    </div>
  )
}

export default Calendars
