import PropTypes from 'prop-types'
import React, { Component } from 'react'

function CalendarApp() {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri", "Sat"]
  const monthsOfYear = ["January", "Febuary","March","April","May", "June", "Juli", "August", "September","October","November","December"]

  const currentDate = new Date()

  const [currentMonth, setCurrentMaonth] = useState(currentDate.getMoth)

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear)

  const [selectedDate, setSelectedDate] = useState(currentDate)

  const[showEventPopup, setShowEventPopup]= useState(false)

  const [EventSource, setEvents] = useState([])

  const [eventTime, setEventTime] = useState({hours: '00', minutes: '00'})

  const [eventText, setEventText] = useState('')

  const[editingEvent, setEditingEvent] = useState(null)

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day)
    const today = new Date()
    if(clickedDate >= today | isSameDay(clickedDate, today)){
      setSelectedDate(clickedDate)
      setShowEventPopup(true)
      setEventText('');
      setEventTime({hours: '00', minutes: '00'})
    }
  }

  const daysInMonth = new Date(currentYear, currentMonth +1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const prevMonth = () => {
    setCurrentMonth((prevMoth) =>(prevMoth === 0 ? 11 : prevMoth-1))
    setCurrentYear(prevYear => currentYear === 0? prevYear-1 : prevYear)
  }
  
  const nextMonth = () => {
    setCurrentMonth((prevMoth) =>(prevMoth === 11 ? 0 : prevMoth+1))
    setCurrentYear(prevYear => currentMoth === 11? prevYear+1 : prevYear)
  }

  const isSameDay = (date1, date2) => {
    return(
      date1.getFullYear()=== date2.getFullYear() && 
      date1.getMonth()=== date2.getMonth() && 
      date1.getDate()=== date2.getDate() 
    )
  }
  let updatedEvent = [...events]
  if(editingEvent){
    updatedEvents = updatedEvents.map((event)=> event.id === editingEvent.id ? newEvent : event)
  }else{
    updatedEvents.push(newEvent)
  }

  updatedEvents.sort((a, b) => new Date(a.date)- new Date(b.date))

 const handleEventSubmit = () => {
  const newEvent = {
      id: editingEvent ? editingEvent.id : Date.now(),
      date: selectedDate,
      time:`${eventTime.hours.padStart(2, '0')}`,
      minutes:`${eventTime.hours.padStart(2, '0')}`,
      text: eventText
  }
  setEvents(updatedEvents)
  setEventTime({hours: '00', minutes: '00'})
  setEventText('')
  setShowEventPopup(false)
  setEditingEvet(null)
 }

 const handleEditEvent = (event)=>{
  setSelectedDate(new date(event.date))
  setEventTime({
    hours: event.time.split(":")[0],
    minutes: event.time.split(":")[1],
  })
  setEventText(event.text)
  setEditingEvent(event)
  setShowEventPopup(true)
 }

 const handleDeleteEvent = (eventId) => {
  const updateEvents = events.filter((event) => event.id !== eventId)

  setEvents(updatedEvents)
 }

 const handleTimeChange = (e) => {
  const {name, value} = e.target
  setEventTime(() => ([...prevTime, [name] ,value.padStart(2, '0')]))
 }
    return (
      <div className = "calendar-App">
        <div className="caleandar">
          <h1 className= "heading"> calendar</h1>
          <div className="navigate-date">
            <h2 className="month">{monthsOfYear[currentMonth]}</h2>
            <h2 className="year">{currentYear}</h2>
            <div className="buttons">
              <i className="bx bx-chevron-left" onClick={prevMonth}></i>
              <i className="bx bx-chevron-right" onClick={nextMonth}></i>
            </div>
          </div>
          <div className="weekdays">
            {daysOfWeek.map((day)=><span key={day}>{day}</span>)}
          </div>
          <div className="days">
            {[...Array(firstDayOfMonth).keys()].map((_, index)=><span key={`empty-${index}`}></span>)}
            {[...Array(daysInMonth).keys()].map((day)=> (<span key={day+1} className={day +1 === currentDate.getDate.apply() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()? "current-day" : ""}
            onClick={()=>handleDayClick(day + 1)}>{day+1}</span>))}
            <span className="curent-day">31</span>
          </div>
        </div>
        <div classNmae="events">
          {showEventPopup && <div className="event-popup">
            <div className="time-input">
              <div className="event-popup-time">Time</div>
              <input type="number" name="hours" min={0} max={24} className="hours" value={eventTime.hours} onChange={handleTimeChange}/>
              <input type="number" name="minutes" min={0} max={60} className="minutes" value={eventTime.minutes} onChange={handleTimeChange}/>
            </div>
            <textarea placeholder="Enter Event Text (Maximum 60 Characters" value= {eventText} onChange={(e) => {
              if(e.target.value.length <= 60){
                setEventText(e.target.value)
              }
            }}></textarea>
            <button className="event-popup-btn">{editingEvent ? "update Event" : "Add Event"}</button>
            <button className="close-event-popup" onClick={() => setShowEventPopup(false)}></button>
          </div>}
          {events.map((event, index) => {
               <div className="event" key={index}>
            <div className="event-date-wrapper">
              <div className="event-date">
                {`${monthsOfYear[event.date.getMonth()]} ${event.date.getDate()}`}
                </div>
                <div className="event-time">{event.time}</div>
                </div>
                <div className="event-text">{event.text}</div>
                <div className="eventbuttons">
                  <i className= "bx bxs-edit-alt" onClick={()=> handleEditEvent(event)}></i>
                  <i className= "bx bxs-message-alt-x" onClick={()=> handleDeleteEvent(event.id)}></i>
              </div>
            </div>
          })}
          </div>
        </div>
    )
}

export default CalendarApp