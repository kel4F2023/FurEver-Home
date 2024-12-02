"use client";
import Link from 'next/link';

const resecheduleVideoAppointmentPath = '/visit-shelter ';
const resecheduleInpersonAppointmentPath = '/check-pets/video-session';

export function InpersonAppointmentCard({ id, date, time, address, cancelBtnHandler }) {
    return (
        <div className='w-[366px] h-[122px] bg-white shadow-md mb-6 py-1'>
            <div className='h-[99px] w-full flex justify-between items-center px-2'>
                <div className='inperson-avatar'>
                    <p className='paragraph'>In-person Visit</p>
                </div>
                <div>
                    <p className="paragraph text-center">{date}</p>
                    <p className="paragraph text-center">{time}</p>
                </div>
                <div className='h-[99px] flex flex-col justify-evenly'>
                    <Link className='block' href={resecheduleInpersonAppointmentPath}>
                        <button className='reschedule-btn paragraph'>Reschedule</button>
                    </Link>
                    <button className='cancel-btn paragrapht' onClick={() => {
                        cancelBtnHandler(id);
                    }}>Cancel</button>
                </div>
            </div>
            <div className='bg-[#97ecf6]/25 px-2'>
                <p className="paragraph">{address}</p>
            </div>
        </div>
    )
}


export function VideoAppointmentCard({ id, date, time, petName, avatarPath, cancelBtnHandler }) {
    return (
        <div className='w-[366px] h-[122px] bg-white shadow-md mb-6 px-2 py-1'>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <img className='w-[99px] h-[99px] rounded-[15px]' src={avatarPath} alt="pet's avatar" />
                </div>
                <div>
                    <p className="text-black text-sm font-medium font-['Inter'] text-center">{date}</p>
                    <p className="text-black text-sm font-normal font-['Inter'] text-center">{time}</p>
                </div>
                <div className='h-[99px] flex flex-col justify-between'>
                    <Link className='block' href="">
                        <button className='google-meet-btn paragraph'>Google Meet</button>
                    </Link>
                    <Link className='block' href={resecheduleVideoAppointmentPath}>
                        <button className='reschedule-btn paragraph'>Reschedule</button>
                    </Link>
                    <button className='cancel-btn paragraph' onClick={() => {
                        cancelBtnHandler(id);
                    }}>Cancel</button>
                </div>
            </div>
            <div>
                <p className="paragraph relative left-7">{petName}</p>
            </div>
        </div>
    )
}
