import { useState } from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'

import 'react-calendar/dist/Calendar.css'
import './Calendars.css'
const Calendars = ({ setFilterDate }) => {
  const [date, setDate] = useState(new Date())
  const onChnage = (date) => {
    const orderDate = `${moment(date).get('year')}-${
      moment(date).get('month') + 1
    }-${moment(date).get('date')}`
    setFilterDate(orderDate)
    setDate(date)
  }
  return (
    <div>
      <Calendar
        onChange={onChnage}
        value={date}
        className="calendar"
        minDate={new Date()}
        locale="en"
      />
    </div>
  )
}

export default Calendars
