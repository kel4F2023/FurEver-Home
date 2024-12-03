"use client";
import Link from 'next/link';

const resecheduleVideoAppointmentPath = '/visit-shelter';
const resecheduleInpersonAppointmentPath = '/check-pets/video-session';

export function InpersonAppointmentCard({ id, date, time, address, cancelBtnHandler }) {
    return (
        <div className='w-full max-w-md bg-white shadow-lg mb-6 pt-3 rounded-[15px]'>
            <div className='h-[110px] w-full flex justify-between items-center px-3'>
                <div className='appointment-card-avatar bg-[#D1D1D6] flex flex-col justify-center items-center'>
                    <h3 className='H3'>In-person</h3>
                    <h3 className='H3'>Visit</h3>
                </div>
                <div>
                    <p className="paragraph text-center font-semibold">{date}</p>
                    <p className="paragraph text-center">{time}</p>
                </div>
                <div className='h-[110px] flex flex-col justify-evenly'>
                    <Link className='block' href={resecheduleVideoAppointmentPath}>
                        <button className='reschedule-btn paragraph'>Reschedule</button>
                    </Link>
                    <button className='cancel-btn paragraph' onClick={() => {
                        cancelBtnHandler(id);
                    }}>Cancel</button>
                </div>
            </div>
            <div className='px-3 my-1'>
                <h3 className="H3">Address: {address}</h3>
            </div>
        </div>
    )
}


export function VideoAppointmentCard({ id, date, time, petName, avatarPath, cancelBtnHandler }) {
    return (
        <div className='w-full max-w-md bg-white shadow-lg mb-6 pt-3 rounded-[15px]'>
            <div className='w-full flex justify-between items-center px-3'>
                <div>
                    <img className='appointment-card-avatar' src={avatarPath} alt="pet's avatar" />
                </div>
                <div>
                    <p className="paragraph text-center">{date}</p>
                    <p className="paragraph text-center">{time}</p>
                </div>
                <div className='h-[110px] flex flex-col justify-between'>
                    <Link className='block' href={resecheduleInpersonAppointmentPath}>
                        <button className='reschedule-btn paragraph'>Reschedule</button>
                    </Link>
                    <button className='cancel-btn paragraph' onClick={() => {
                        cancelBtnHandler(id);
                    }}>Cancel</button>
                    <Link className='block' href="">
                        <button className='google-meet-btn paragraph'>Google Meet</button>
                    </Link>
                </div>
            </div>
            <div className='px-3 my-1'>
                <h3 className="H3">Pet Name: {petName}</h3>
            </div>
        </div>
    )
}
