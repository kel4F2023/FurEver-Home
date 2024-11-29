"use client";

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
            <div className="w-[300px] h-20 text-center text-black text-7xl font-bold font-['Inter'] leading-[86.40px] mb-8">
                {name}
            </div>

            {/* Image Section */}
            <div className="w-[380px] h-auto bg-neutral-100 rounded-[20px] p-6 mb-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none">Where Am I?</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none">{location}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none">Age</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none">{age}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none">Gender</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none">{gender}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none">Color</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none">{color}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none">Breed</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none">{breed}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-black text-m font-bold font-['Inter'] leading-none">Pet ID</span>
                    <span className="text-black text-m font-light font-['Inter'] leading-none">{petId}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-8 mb-8">
                <div className="w-[180px] p-3 bg-[#1bb0ff] rounded-lg justify-center items-center gap-2 flex">
                    <div className="text-white text-xl font-normal font-['Inter'] leading-normal">Fill Application</div>
                </div>
                <div className="w-[180px] p-3 bg-[#34c759]/70 rounded-lg justify-center items-center gap-2 flex">
                    <div className="text-white text-xl font-medium font-['Inter'] leading-normal">Video Session</div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-[380px] h-[0px] border-2 border-[#808080]/60 mb-8"></div>

            {/* Story Section */}
            <div className="w-[340px] h-auto text-[#666666] text-xl font-normal font-['Inter'] leading-normal mb-8">
                <h2 className="text-black text-[32px] font-semibold font-['Inter'] leading-[38.40px] mb-4">MY STORY</h2>
                <p className="text-gray-600 text-[18px] font-['Inter'] p-3">{story}</p>
            </div>

            {/* Divider */}
            <div className="w-[380px] h-[0px] border-2 border-[#808080]/60 mb-8"></div>

            {/* Special Attention Section */}
            <div className="w-[344px] h-auto text-black text-xl font-normal font-['Inter'] leading-normal">
                <h2 className="text-black text-[32px] font-semibold font-['Inter'] leading-[38.40px] mb-4">
                    Special Attentions
                </h2>
                <ul className="list-disc ml-6 space-y-2 p-3">
                    {specialAttention && specialAttention.length > 0 ? (
                        specialAttention.map((item, index) => (
                            <li key={index} className="text-black text-lg font-light leading-normal">
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="text-black text-lg font-light leading-normal">None</li>
                    )}
                </ul>
            </div>
            <div className="mt-28"/>
        </div>
    );
}