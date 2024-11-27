import Link from 'next/link';

export default function MyProfile() {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-bold mb-6 mt-12">My Profile</h1>
      <div className="flex flex-col gap-4">
        <Link href="/my-profile/applications">
          <button className="w-full p-4 text-left bg-gray-100 rounded-lg hover:bg-gray-200">
            My Applications
          </button>
        </Link>
        <Link href="/my-profile/appointments">
          <button className="w-full p-4 text-left bg-gray-100 rounded-lg hover:bg-gray-200">
            My Appointments
          </button>
        </Link>
      </div>
    </div>
  );
}
