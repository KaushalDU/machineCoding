import React, { useState } from 'react'

export const DatePicker = ({selectedDate,minDate,maxDate,dateFormat,onDateChange}) => {
    const [currentDate,setCurrentDate] = useState(selectedDate)

    const handlePrevMonth =()=>{
        setCurrentDate(prevDate=>new Date(prevDate.getFullYear(),prevDate.getMonth()-1,1))
        // console.log(currentDate.getFullYear())
    }
    
    const handleNextMonth =()=>{
        setCurrentDate(nextDate=>new Date(nextDate.getFullYear(),nextDate.getMonth()+1,1))
    }


    const handleDateClick = (date)=>{
     setCurrentDate(date);
      onDateChange(date)
        console.log(date)
    }

    const daysInMonth= (year,month) =>{
        return new Date (year,month+1,0).getDate()
    }

    const getWeekday = (year,month,days) =>{
        return new Date(year,month,days).getDate()
    }

    const renderCalender = () =>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = daysInMonth(year,month);
        const firstDayOfWeek = getWeekday(year,month,1);
        const lastDaYOfWeek = getWeekday(year,month,days);
        
        const prevMonthDays = firstDayOfWeek ===0 ? 6 : firstDayOfWeek-1
        const nextMonthDays = lastDaYOfWeek === 0 ? 0 :7- lastDaYOfWeek;

        const totalDays = prevMonthDays+days+nextMonthDays;

        const calender = [];
        
        let dayCounter = 1- prevMonthDays;

        for(let i=0 ;i<Math.ceil(totalDays/7);i++){
            const week =[];
            for(let j=0;j<7;j++){
                if(dayCounter>0 && dayCounter<= days){
                    const dayDate = new Date(year,month,dayCounter);
                    const isDisable = (minDate && dayDate<minDate) || (maxDate && dayDate>maxDate)
                    const isSelected = (selectedDate && dayDate.toDateString()===selectedDate.toDateString())
                    week.push(
                        <div
                        key={dayCounter}
                        className={`day ${isSelected ?'slected':""} ${isDisable ?"disabled":""}`}
                        onClick={()=> isDisable && handleDateClick(dayDate)}
                        >
                            {dayCounter}
                        </div>
                    )
                } else {
                    week.push(<div key={dayCounter} className='empty-date'></div>)
                }
                dayCounter++
            }
            calender.push(<div key={i} className='week'>{week}</div>)
        }

       return calender



    }




  return (
    <div className='date-picker'>
        <div className='header'>
            <button onClick={handlePrevMonth}></button>
             <span>{currentDate}</span>
             <button onClick={{handleNextMonth}}></button>
        </div>
     <div className="calender">
        <div className='weekdays'>
            <div className='weekday'>Sun</div>
            <div className='weekday'>Mon</div>
            <div className='weekday'>Tue</div>
            <div className='weekday'>Wed</div>
            <div className='weekday'>Thu</div>
            <div className='weekday'>Fri</div>
            <div className='weekday'>Sat</div>
        </div>
        {renderCalender}
        </div>    
    </div>

  )
}
