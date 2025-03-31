import PropTypes from 'prop-types'
import React, { Component } from 'react'

function CalendarApp() {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri", "Sat"]
  const monthsOfYear = ["January", "Febuary","March","April","May", "June", "Juli", "August", "September","October","November","December"]

  const currentDate = new Date()

  const [currentMonth, setCurrentMaonth] = useState(currentDate.getMoth)

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear)

  const daysInMonth = new Date(currentYear, currentMonth +1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const prevMonth = () => {
    setCurrentMonth((prevMoth) =>(prevMoth === 0 ? 11 : prevMoth-1))
    setCurrentYear(prevYear => currentMoth === 0? prevYear-1 : prevYear)
  }
  
  const nextMonth = () => {
    setCurrentMonth((prevMoth) =>(prevMoth === 11 ? 0 : prevMoth+1))
    setCurrentYear(prevYear => currentMoth === 11? prevYear+1 : prevYear)
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
            {[...Array(daysInMonth).keys()].map((day)=> (<span key={day+1} className={day +1 === currentDate.getDate.apply() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()? "current-day" : ""}>{day+1}</span>))}
            <span className="curent-day">31</span>
          </div>
        </div>
        <div classNmae="events">
          <div className="event-popup">
            <div className="time-input">
              <div className="event-popup-time">Time</div>
              <input type="number" name="hours" min={0} max={24} className="hours"/>
              <input type="number" name="minutes" min={0} max={60} className="hours"/>
            </div>
            <textarea placeholder="Enter Event Text (Maximum 60 Characters"></textarea>
            <button className="event-popup-btn">Add Event</button>
            <button className="close-event-popup"></button>
          </div>
          <div classNmae="event">
            <div className="event-date-wrapper">
              <div className="event-date">
                March 31, 2025
                </div>
                <div className="event-time">10:00</div>
                </div>
                <div className="event-text">Meeting with John</div>
                <div className="eventbuttons">
                  <i className= "bx bxs-edit-alt"></i>
                  <i className= "bx bxs-message-alt-x"></i>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CalendarApp