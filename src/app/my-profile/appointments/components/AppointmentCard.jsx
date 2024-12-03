"use client";
import Link from 'next/link';

const resecheduleVideoAppointmentPath = '/visit-shelter';
const resecheduleInpersonAppointmentPath = '/check-pets/video-session';

export function InpersonAppointmentCard({ id, date, time, address, cancelBtnHandler }) {
    return (
        <div className='w-full max-w-md bg-white shadow-lg mb-6 pt-3 rounded-[15px]'>
            <div className='h-[99px] w-full flex justify-between items-center px-3'>
                <div className='appointment-card-avatar flex flex-col justify-center items-center'>
                    <h3 className='H3'>In-person</h3>
                    <h3 className='H3'>Visit</h3>
                </div>
                <div>
                    <p className="paragraph text-center">{date}</p>
                    <p className="paragraph text-center">{time}</p>
                </div>
                <div className='h-[99px] flex flex-col justify-evenly'>
                    <Link className='block' href={resecheduleVideoAppointmentPath}>
                        <button className='reschedule-btn paragraph'>Reschedule</button>
                    </Link>
                    <button className='cancel-btn paragrapht' onClick={() => {
                        cancelBtnHandler(id);
                    }}>Cancel</button>
                </div>
            </div>
            <div className='bg-[#97ecf6]/25 px-3 rounded-[15px]'>
                <h3 className="H3">Address: {address}</h3>
            </div>
        </div>
    )
}


export function VideoAppointmentCard({ id, date, time, petName, avatarPath, cancelBtnHandler }) {
    return (
        <div className='w-full max-w-md bg-white shadow-lg mb-6 pt-3 px-3 rounded-[15px]'>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <img className='appointment-card-avatar' src={avatarPath} alt="pet's avatar" />
                </div>
                <div>
                    <p className="paragraph text-center">{date}</p>
                    <p className="paragraph text-center">{time}</p>
                </div>
                <div className='h-[99px] flex flex-col justify-between'>
                    <Link className='block' href="">
                        <button className='google-meet-btn paragraph'>Google Meet</button>
                    </Link>
                    <Link className='block' href={resecheduleInpersonAppointmentPath}>
                        <button className='reschedule-btn paragraph'>Reschedule</button>
                    </Link>
                    <button className='cancel-btn paragraph' onClick={() => {
                        cancelBtnHandler(id);
                    }}>Cancel</button>
                </div>
            </div>
            <div>
                <h3 className="H3 relative left-7">Pet Name: {petName}</h3>
            </div>
        </div>
    )
}
