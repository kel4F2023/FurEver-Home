"use client";
import {useState} from "react";

export default function SearchCard({ onSearch, onClear, onInputChange }) {
    const [formData, setFormData] = useState({
        zipCode: "",
        species: "",
        gender: "",
        color: "",
        breed: "",
    });

    const handleChange = (field, value) => {
        const updatedFormData = { ...formData, [field]: value };
        setFormData(updatedFormData);
        onInputChange(updatedFormData);
    };

    return (
        <div className="w-[380px] h-[381px] relative">

            <div className="w-[380px] h-[381px] left-0 top-0 absolute bg-[#f3f3f3] rounded-[20px]" />

            <div
                className="w-20 h-10 p-3 left-[20px] top-[320px] absolute bg-[#1bb0ff] rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer"
                onClick={() => onSearch(formData)}
            >
                <div className="text-white text-base font-normal font-['Inter'] leading-none">Search</div>
            </div>

            <div
                className="w-20 h-10 p-3 left-[120px] top-[320px] absolute bg-[#eb221e] rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer"
                onClick={onClear}
            >
            <div className="text-white text-base font-normal font-['Inter'] leading-none">Clear</div>
        </div>

            <div className="w-[340px] h-10 left-[20px] top-[20px] absolute">
                <div className="w-[340px] h-10 left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                    <input
                        type="number"
                        placeholder="Zip-code   e.g 95112"
                        onChange={(e) => handleChange("zipCode", e.target.value)}
                        className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none"
                    />
                </div>
            </div>

            {/* Species */}
            <div className="w-[340px] h-10 left-[20px] top-[80px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Species   e.g dog"
                    onChange={(e) => handleChange("species", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none"
                />
            </div>

            {/* Gender */}
            <div className="w-[340px] h-10 left-[20px] top-[140px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Gender   e.g male/female"
                    onChange={(e) => handleChange("gender", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none"
                />
            </div>

            {/* Color */}
            <div className="w-[340px] h-10 left-[20px] top-[200px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Color   e.g white"
                    onChange={(e) => handleChange("color", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none"
                />
            </div>

            {/* Breed */}
            <div className="w-[340px] h-10 left-[20px] top-[260px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Breed   e.g shiba inu"
                    onChange={(e) => handleChange("breed", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none"
                />
            </div>
        </div>
    );
}