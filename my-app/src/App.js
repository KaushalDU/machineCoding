import logo from './logo.svg';
import './App.css';
import { DatePicker } from './DatePicker';
import { useState } from 'react';


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform any additional actions on date change
  };
  return (
    <div className="App">
       <h1>Select a Date</h1>
       <DatePicker/>
     {/* <DatePicker
      selectedDate={selectedDate}
      onDateChange={handleDateChange}
      dateFormat="MM/DD/YYYY"
      minDate={new Date()}
      maxDate={new Date(new Date().getFullYear() + 1, 11, 31)}
     /> */}
    </div>
  );
}

export default App;
