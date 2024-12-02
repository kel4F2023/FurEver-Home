'use client';
import { useState, useEffect } from 'react';
import '../globals.css';

export default function Schedule() {
  // Define some shelters in the Bay Area
  const shelters = [
    {
      id: 1,
      name: 'Bay Area Pet Haven',
      address: '1234 Market Street, San Francisco, CA 94103',
    },
    {
      id: 2,
      name: 'Golden Gate Animal Rescue',
      address: '5678 Castro Street, San Francisco, CA 94114',
    },
    {
      id: 3,
      name: 'Oakland Furry Friends Shelter',
      address: '9101 Telegraph Avenue, Oakland, CA 94612',
    },
    {
      id: 4,
      name: 'San Jose Pet Sanctuary',
      address: '1213 Santa Clara Street, San Jose, CA 95113',
    },
    {
      id: 5,
      name: 'Berkeley Animal Care Center',
      address: '1415 Shattuck Avenue, Berkeley, CA 94709',
    },
  ];

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); 
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedShelter, setSelectedShelter] = useState(''); // State for shelter selection
  const [warningMessage, setWarningMessage] = useState(''); // State for warning messages

  const dots = {
    // Example dates with dots
    // '2024-11-13': true,
    // '2024-11-20': true,
    // '2024-11-27': true,
  };

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Week starts on Sunday
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Function to navigate to the previous month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  // Function to navigate to the next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  // Function to render the calendar grid
  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    let startDay = firstDayOfMonth.getDay(); // 0 = Sunday, 6 = Saturday

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const totalCells = 42; // 6  x 7 days
    const cells = [];

    // Add empty cells before the first day
    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`empty-start-${i}`} className="w-12 h-12"></div>);
    }

    // Add date cells
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(currentYear, currentMonth, day);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const dayNumber = String(day).padStart(2, '0');
      const dayKey = `${year}-${month}-${dayNumber}`;

      // Determine if the date is before today
      const isPastDate =
        (dateObj < today) &&
        (currentMonth === today.getMonth()) &&
        (currentYear === today.getFullYear());

      const isSelected = selectedDate === dayKey;

      cells.push(
        <button
          key={dayKey}
          aria-disabled={isPastDate || !selectedShelter} // For accessibility
          className={`w-12 h-12 flex flex-col justify-center items-center rounded-lg transition ${
            dots[dayKey]
              ? 'border border-gray-400'
              : 'border-transparent'
          } ${
            isSelected
              ? 'bg-blue-500 text-white'
              : isPastDate
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => {
            if (isPastDate) {
              setWarningMessage('Cannot select past dates.');
            } else if (!selectedShelter) {
              setWarningMessage('Please select a shelter first.');
            } else {
              setSelectedDate(dayKey);
              setSelectedTime(null); // Reset selected time when date changes
              setWarningMessage(''); // Clear any existing warning messages
            }
          }}
          // Removed disabled prop to allow handling clicks on past dates
        >
          <span className={`${dots[dayKey] ? 'font-semibold' : ''}`}>
            {day}
          </span>
          {dots[dayKey] && <span className="w-2 h-2 bg-red-500 rounded-full mt-1"></span>}
        </button>
      );
    }

    // Add empty cells after the last day to fill the grid
    const remainingCells = totalCells - cells.length;
    for (let i = 0; i < remainingCells; i++) {
      cells.push(<div key={`empty-end-${i}`} className="w-12 h-12"></div>);
    }

    return (
      <div className="grid grid-cols-7 gap-3">
        {cells}
      </div>
    );
  };

  // Disabling Previous Month Button
  const isPrevMonthDisabled = currentYear === today.getFullYear() && currentMonth === today.getMonth();

  // Function to handle time slot selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Function to handle "Yes" button click (currently just closes the popup)
  const handleConfirm = () => {
    // Future functionality: Redirect to another page
    setIsPopupOpen(false);
  };

  // Auto-dismiss the warning message after 3 seconds
  useEffect(() => {
    if (warningMessage) {
      const timer = setTimeout(() => {
        setWarningMessage('');
      }, 3000); // Dismiss after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or when warningMessage changes
    }
  }, [warningMessage]);

  // Format selected date for display
  const formattedSelectedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Warning Message */}
      {warningMessage && (
        <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          {warningMessage}
        </div>
      )}
      
      <h1 className="text-3xl font-bold pb-4">In-Person Visit Appointment </h1>

      {/* Shelter Selection Dropdown */}
      <div className="mb-4">
        <label htmlFor="shelter" className="block text-lg font-medium text-gray-700 mb-2">
          Select a Shelter:
        </label>
        <select
          id="shelter"
          value={selectedShelter}
          onChange={(e) => {
            setSelectedShelter(e.target.value);
            setSelectedDate(null); // Reset selected date and time when shelter changes
            setSelectedTime(null);
            setWarningMessage(''); // Clear any existing warning messages
          }}
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Choose a Shelter --</option>
          {shelters.map((shelter) => (
            <option key={shelter.id} value={shelter.id}>
              {shelter.name} - {shelter.address}
            </option>
          ))}
        </select>
      </div>

      <div className="separator mb-6"></div>

      <div className="flex flex-col md:flex-row">
        {/* Calendar Section */}
        <div className="w-full md:w-1/2 px-1"> 
        
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              disabled={isPrevMonthDisabled} // only disable if no shelter selected
              className={`px-3 py-1 rounded ${isPrevMonthDisabled || !selectedShelter ? 'text-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-gray-200'}`}
            >
              &lt;
            </button>
            <div className="text-xl font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </div>
            <button
              onClick={handleNextMonth}
              disabled={!selectedShelter} // Disable if no shelter selected
              className={`px-3 py-1 rounded ${!selectedShelter ? 'text-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-gray-200'}`}
            >
              &gt;
            </button>
          </div>

          {/* Day Labels */}
          <div className="grid grid-cols-7 gap-3 mb-2 px-1">
            {dayNames.map((day) => (
              <p
                key={day}
                className="w-12 h-12 flex items-center justify-center text-center text-gray-700 font-medium"
              >
                {day}
              </p>
            ))}
          </div>

          {/* Calendar Days */}
          {renderCalendar()}
        </div>

        {/* Available Times Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          {selectedShelter ? ( // Ensure shelter is selected
            selectedDate ? (
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Available Times for {formattedSelectedDate}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      className={`w-full py-2 px-4 rounded-lg transition ${
                        selectedShelter
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-300 text-gray-700 cursor-not-allowed'
                      }`}
                      onClick={() => handleTimeSelect(time)}
                      disabled={!selectedShelter}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {/* Extra Invisible Row */}
                <div className="h-20"></div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Please select a date to view available times.
              </div>
            )
          ) : (
            <div className="text-center text-gray-500">
              Please select a shelter to proceed with scheduling.
            </div>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Confirmation</h3>
            <p className="mb-6">
              Your in-person visit is confirmed for {selectedTime} on {formattedSelectedDate}.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
