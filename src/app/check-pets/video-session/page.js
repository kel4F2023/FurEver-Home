'use client';
import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // Correct import for App Router
import '../../globals.css';

export default function Schedule() {
  const router = useRouter();

  // Wrap the useSearchParams hook usage in a Suspense boundary
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScheduleContent router={router} />
    </Suspense>
  );
}

function ScheduleContent({ router }) {
  const searchParams = useSearchParams();
  const petName = searchParams.get('petName') || 'Your pet'; // Retrieve petName from query parameters

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [warningMessage, setWarningMessage] = useState(''); // New state for warning messages

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

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Week starts on Sunday

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

    const totalCells = 42; // 6 weeks x 7 days
    const cells = [];

    // Add empty cells before the first day
    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`empty-start-${i}`} className="w-12 h-12"></div>); // Consistent sizing
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
          className={`w-12 h-12 flex flex-col justify-center items-center rounded-lg transition ${
            dots[dayKey]
              ? 'border border-gray-400'
              : 'border-transparent'
          } ${
            isSelected
              ? 'bg-[#00A9FF] text-white'
              : isPastDate
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-200'
          } relative group`} // Added relative and group for potential tooltip
          onClick={() => {
            if (isPastDate) {
              setWarningMessage('Cannot select past dates.');
            } else {
              setSelectedDate(dayKey);
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

  // **Updated Logic for Disabling Previous Month Button**
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
    router.push('/my-profile/appointments?appointmentSuccess=true');
    setIsPopupOpen(false);
  };

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

      
      <h1 className="H1 pb-4">Schedule a Video Session</h1>
      <div className="separator mb-6"></div>

      <div className="flex flex-col md:flex-row">
    
        <div className="w-full md:w-1/2 px-1"> 

          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              disabled={isPrevMonthDisabled}
              className={`px-3 py-1 rounded ${isPrevMonthDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-gray-200'}`}
            >
              &lt;
            </button>
            <div className="text-xl font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </div>
            <button
              onClick={handleNextMonth}
              className="px-3 py-1 rounded text-blue-500 hover:bg-gray-200"
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
          {selectedDate ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Available Times for {formattedSelectedDate}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    className="w-full py-2 px-4 bg-[#00A9FF] text-white rounded-lg hover:bg-[#008FCC] transition"
                    onClick={() => handleTimeSelect(time)}
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
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Confirmation</h3>
            <p className="mb-6">
              {petName} video session with Amy Marshell is confirmed for {selectedTime}, {formattedSelectedDate}.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClosePopup}
                className="w-[180px] p-3 bg-white/70 rounded-lg justify-center items-center gap-2 flex shadow-lg border border-primaryBlue"
              >
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="w-[180px] p-3 bg-[#00A9FF] rounded-lg justify-center items-center gap-2 flex shadow-lg"
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
