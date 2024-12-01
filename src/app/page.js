import MenuCard from '@/components/MenuCard';
import Link from 'next/link';
export default function Home() {

  return (
    <div className="p-4 flex flex-col items-center justify-center overflow-y-auto">
      <div className="text-center text-2xl font-bold bg-grey mt-5 mb-10">
        How can we help you today?
      </div>
      <div className="flex flex-col gap-5">
      <Link href="/visit-shelter">
        <MenuCard 
          title="Schedule a visit" 
          description="Reserve a time to meet your local pet shelter in person" 
          img="/visit-shelter-icon.png"
          bgColor='rgba(28, 177, 255, 0.26)'
        />
      </Link>
      <Link href="/check-pets">
        <MenuCard 
          title="Look for pets" 
          description="Browse and adopt your perfect companion and Meet your favorite pet virtually one-on-one!"
          img="/check-pets-icon.png"
          bgColor='#fde8e7'
        />
      </Link>
      <Link href="/care-logs">
        <MenuCard 
          title="Daily care logs" 
          description="Log your pet’s daily activity and see tailored recommendations"
          img="/care-logs-icon.png"
          bgColor='rgba(52, 199, 89, 0.35)'
        />
      </Link>
      <Link href="/my-profile">
        <MenuCard 
          title="My profile" 
          description="Check your adoption applications, appointments and more"
          img="/my-profile-icon.png"
          bgColor='rgba(255, 186, 2, 0.20)'
        />
      </Link>
      </div>
      

    </div>
   
  );
}
