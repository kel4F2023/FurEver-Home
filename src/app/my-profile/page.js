import Link from 'next/link';

export default function MyProfile() {
  return (
    <div className="p-4 flex flex-col justify-center items-center mt-5 gap-10">
      <div className="flex flex-col gap-5 justify-center items-center">
        <img src='/avatar.png' />
        <div className="H2">Becky Real</div>
      </div>
      <div className="flex flex-col gap-5 w-[80%]">
        <button className="secondary-btn flex items-center justify-center">
          <img src='/edit-icon.png' className='w-5 h-5 mr-3' />Edit My Profile
        </button>
        <Link href="/my-profile/applications">
          <button className="secondary-btn flex items-center justify-center">
            <img src='/folder-icon.png' className='w-5 h-5 mr-2' />
            My Adoption Applications
          </button>
        </Link>
        <Link href="/my-profile/appointments">
          <button className="secondary-btn flex items-center justify-center">
            <img src='/appointment-icon.png' className='w-5 h-5 mr-2' />
            View All Appointments
          </button>
        </Link>
      </div>
    </div>
  );
}
