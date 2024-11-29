"use client";
export default function PetCard({ name, breed, image, onDetailsClick }) {
    return (
        <div className="w-[380px] h-[140px] relative">
            <div className="w-[380px] h-[140px] left-0 top-0 absolute bg-[#f2f2f7] rounded-[20px] shadow border-black" />

            <div className="w-[100px] h-[100px] left-[15px] top-[20px] absolute rounded-full overflow-hidden bg-black">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : null}
            </div>

            <div className="w-[201.40px] h-[50px] left-[125.50px] top-[32px] absolute text-black text-4xl font-normal font-['Inter'] leading-[50.40px] H2">
                {name}
            </div>

            <div className="w-[116.85px] h-8 left-[128.50px] top-[70px] absolute text-lg font-normal font-['Inter'] leading-[25.20px] Body">
                {breed}
            </div>

            <div
                className="w-[72.20px] h-10 p-3 left-[288.80px] top-[52px] absolute bg-[#4cc9fe] rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer"
                onClick={onDetailsClick}
            >
                <div className="text-white text-base font-normal font-['Inter'] leading-none">
                    Details
                </div>
            </div>
        </div>
    );
}