"use client";

import { useRouter } from "next/navigation";

export default function PetDetails({
    name,
    location,
    age,
    gender,
    color,
    breed,
    petId,
    story,
    specialAttention,
    image,
}) {
    const router = useRouter();

    const handleFillApplication = () => {
        router.push(`/fill-application?petName=${encodeURIComponent(name)}`);
    };

    return (
        <div className="w-[440px] mx-auto bg-white py-8 flex flex-col items-center">
            {/* Circular Image Section */}
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden bg-neutral-200 mb-8">
                <img
                    src={image}
                    alt={`${name}'s picture`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Pet Name */}
            <div className="w-[300px] h-20 text-center text-black text-7xl font-bold font-['Inter'] leading-[86.40px] H1">
                {name}
            </div>

            {/* Image Section */}
            <div className="w-[380px] h-auto bg-neutral-100 rounded-[20px] p-6 mb-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none H3">Where Am I?</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none Body">{location}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none H3">Age</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none Body">{age}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none H3">Gender</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none Body">{gender}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none H3">Color</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none Body">{color}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none H3">Breed</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none Body">{breed}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none H3">Pet ID</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none Body">{petId}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-8 mb-8">
                <div
                    onClick={handleFillApplication} // Route to the application form
                    className="w-[180px] p-3 bg-[#00A9FF] rounded-lg justify-center items-center gap-2 flex shadow-lg cursor-pointer"
                >
                    <div className="text-white font-normal font-['Inter'] leading-normal paragraph">Fill Application</div>
                </div>
                <div className="w-[180px] p-3 bg-white/70 rounded-lg justify-center items-center gap-2 flex shadow-lg border border-primaryBlue">
                    <div className="text-primaryBlue font-normal font-['Inter'] leading-normal paragraph">Video Session</div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-[380px] h-[0px] border border-[#808080]/60 mb-8"></div>

            {/* Story Section */}
            <div className="w-[340px] h-auto text-[#344C64] text-xl font-normal font-['Inter'] leading-normal mb-8">
                <h2 className="text-black text-[32px] font-semibold font-['Inter'] leading-[38.40px] mb-4 H2">My Story</h2>
                <p className="text-[18px] font-['Inter'] H3 text-black">{story}</p>
            </div>

            {/* Divider */}
            <div className="w-[380px] h-[0px] border border-[#808080]/60 mb-8"></div>

            {/* Special Attention Section */}
            <div className="w-[344px] h-auto text-black text-xl font-normal font-['Inter'] leading-normal">
                <h2 className="text-black text-[32px] font-semibold font-['Inter'] leading-[38.40px] mb-4 H2">
                    Special Attentions
                </h2>
                <div className="flex flex-col space-y-4 mt-4">
                    {specialAttention && specialAttention.length > 0 ? (
                        specialAttention.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <img
                                    src="/footprint.png"
                                    alt={`Special Attention ${index + 1}`}
                                    className="w-8 h-8 rounded-md object-cover"
                                />
                                <p className="text-lg font-light leading-normal text-black H3">
                                    {item}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-black text-lg font-light leading-normal H3">None</p>
                    )}
                </div>
            </div>
            <div className="mt-28" />
        </div>
    );
}