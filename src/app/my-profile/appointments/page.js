'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { InpersonAppointmentCard, VideoAppointmentCard } from './components/AppointmentCard';
import CancelConfirm from './components/CancelConfirm';

export default function Appointments() {
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
      address: 'Avenue, city, state',
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
      date: '2024-11-7',
      time: '4:30 PM',
      petName: 'Hailey',
      avatarPath: '/hailey.png',
    },
  ]);

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
    </div >
  );
}
