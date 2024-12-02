"use client";
export default function PetCard({ name, breed, image, onDetailsClick }) {
    return (
        <div className="relative w-full min-w-[300px] h-[140px] bg-[#f2f2f7] rounded-[20px] shadow flex items-center px-4">
            {/* Circular Image Section */}
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-black flex-shrink-0">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                ) : null}
            </div>

            {/* Content Section */}
            <div className="flex-grow ml-3">
                {/* Pet Name */}
                <div className="text-black text-4xl font-normal font-['Inter'] leading-[50.40px] H2">
                    {name}
                </div>

                {/* Pet Breed */}
                <div className="text-lg font-normal font-['Inter'] leading-[25.20px] Body mt-2">
                    {breed}
                </div>
            </div>

            {/* Details Button */}
            <div
                className="w-[62px] h-[40px] bg-[#00A9FF] rounded-lg flex justify-center items-center cursor-pointer flex-shrink-0"
                onClick={onDetailsClick}
            >
                <div className="text-white text-base font-normal font-['Inter'] leading-none paragraph">
                    Details
                </div>
            </div>
        </div>
    );
}