'use client';

import { useState, useEffect, Suspense} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import { InpersonAppointmentCard, VideoAppointmentCard } from './components/AppointmentCard';
import CancelConfirm from './components/CancelConfirm';

// SuccessPopup Component (as defined above)
function SuccessPopup({ onClose, onBackToHome }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  useEffect(() => {
    const appointmentSuccess = searchParams.get('appointmentSuccess');
    if (appointmentSuccess === 'true') {
      setIsSuccessPopupOpen(true);
      // Clean up the URL by removing the query parameter
      router.replace('/my-profile/appointments', undefined, { shallow: true });
    }
  }, [searchParams, router]);

  const handleClose = () => {
    setIsSuccessPopupOpen(false);
    onClose();
  };

  const handleBack = () => {
    onBackToHome();
  };

  if (!isSuccessPopupOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <p className="mb-6">You successfully made the appointment!</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleBack}
            className="w-[180px] p-3 bg-white/70 rounded-lg justify-center items-center gap-2 flex shadow-lg border border-primaryBlue"
          >
            Back to Home Page
          </button>
          <button
            onClick={handleClose}
            className="w-[180px] p-3 bg-[#00A9FF] rounded-lg justify-center items-center gap-2 flex shadow-lg"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Appointments() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: uuidv4(),
      type: 'video',
      date: '6 Dec. 2024',
      time: '10:00 AM',
      petName: 'Timber',
      avatarPath: '/shiba.jpg',
    },
    {
      id: uuidv4(),
      type: 'inperson',
      date: '13 Dec. 2024',
      time: '9:40 AM',
      address: '9101 Telegraph Avenue, Oakland, CA 94612',
    },
    {
      id: uuidv4(),
      type: 'video',
      date: '16 Dec. 2024',
      time: '9:40 AM',
      petName: 'Lucas',
      avatarPath: '/Lucas.png',
    }
  ]);
  const [pastAppointments, setPastAppointments] = useState([
    {
      id: uuidv4(),
      type: 'video',
      date: '7 Nov. 2024',
      time: '4:30 PM',
      petName: 'Hailey',
      avatarPath: '/hailey.png',
    },
  ]);

  // Function to handle cancellation
  const cancelBtnHandler = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setIsPopupOpen(true);
  };

  const cancelCancelHandler = () => {
    setIsPopupOpen(false);
  };

  const removeAppointment = () => {
    console.log('Removing appointment with id:', selectedAppointmentId);
    setUpcomingAppointments(upcomingAppointments.filter((appointment) => appointment.id !== selectedAppointmentId));
    setPastAppointments(pastAppointments.filter((appointment) => appointment.id !== selectedAppointmentId));
  };

  const confimCancelHandler = () => {
    removeAppointment();
    setIsPopupOpen(false);
  };

  // Handlers for success popup buttons
  const handleCloseSuccessPopup = () => {};

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="p-4 relative">
      <div>
        <h2 className="H2">Upcoming Appointments</h2>
        <hr className='mt-2 mb-6 border-gray-300' />
        <div>
          {upcomingAppointments.length > 0 ? (upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className='flex justify-center'>
              {appointment.type === 'inperson' ? (
                <InpersonAppointmentCard
                  id={appointment.id}
                  date={appointment.date}
                  time={appointment.time}
                  address={appointment.address}
                  cancelBtnHandler={cancelBtnHandler}
                />
              ) : (
                <VideoAppointmentCard
                  id={appointment.id}
                  date={appointment.date}
                  time={appointment.time}
                  petName={appointment.petName}
                  avatarPath={appointment.avatarPath}
                  cancelBtnHandler={cancelBtnHandler}
                />
              )}
            </div>
          ))) : (<p>No upcoming appointments</p>)}
        </div>
      </div >
      <div>
        <h2 className="H2">Past Appointments</h2>
        <hr className='mt-2 mb-6 border-gray-300' />
        <div>
          {pastAppointments.length > 0 ? (pastAppointments.map((appointment) => (
            <div key={appointment.id} className='flex justify-center'>
              {appointment.type === 'inperson' ? (
                <InpersonAppointmentCard
                  id={appointment.id}
                  date={appointment.date}
                  time={appointment.time}
                  address={appointment.address}
                  cancelBtnHandler={cancelBtnHandler}
                />
              ) : (
                <VideoAppointmentCard
                  id={appointment.id}
                  date={appointment.date}
                  time={appointment.time}
                  petName={appointment.petName}
                  avatarPath={appointment.avatarPath}
                  cancelBtnHandler={cancelBtnHandler}
                />
              )}
            </div>
          ))) : (<p>No past appointments</p>)}
        </div>
      </div>
      {
        isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <CancelConfirm
              cancelCancelHandler={cancelCancelHandler}
              confimCancelHandler={confimCancelHandler}
            />
          </div>
        )
      }

      {/* Success Popup Wrapped in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessPopup
          onClose={handleCloseSuccessPopup}
          onBackToHome={handleBackToHome}
        />
      </Suspense>
    </div >
  );
}
