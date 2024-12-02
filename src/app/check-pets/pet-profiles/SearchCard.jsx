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
        <div className="w-full max-w-[90%] h-[381px] relative">

            <div className="w-full h-[381px] left-0 top-0 absolute bg-[#f3f3f3] rounded-[20px]" />

            <div
                className="w-20 h-10 p-3 left-[15px] top-[320px] absolute bg-[#00A9FF] rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer shadow-lg"
                onClick={() => onSearch(formData)}
            >
                <div className="text-white font-normal text-sm font-['Inter'] leading-none paragraph">Search</div>
            </div>

            <div
                className="w-20 h-10 p-3 left-[115px] top-[320px] absolute bg-white rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer border border-primaryBlue shadow-lg paragraph"
                onClick={onClear}
            >
            <div className="font-normal text-sm font-['Inter'] leading-none paragraph text-primaryBlue">Clear</div>
        </div>

            <div className="w-full max-w-[90%] left-[15px] h-10 top-[20px] absolute">
                <input
                    type="number"
                    placeholder="Zip-code   e.g 95112"
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none Input Body"
                />
            </div>

            {/* Species */}
            <div
                className="w-full max-w-[90%] left-[15px] h-10 top-[80px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Species   e.g dog"
                    onChange={(e) => handleChange("species", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none Input Body"
                />
            </div>

            {/* Gender */}
            <div className="w-full max-w-[90%] left-[15px] h-10 top-[140px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Gender   e.g male/female"
                    onChange={(e) => handleChange("gender", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none Input Body"
                />
            </div>

            {/* Color */}
            <div className="w-full max-w-[90%] left-[15px] h-10 top-[200px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Color   e.g white"
                    onChange={(e) => handleChange("color", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none Input Body"
                />
            </div>

            {/* Breed */}
            <div className="w-full max-w-[90%] left-[15px] h-10 top-[260px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <input
                    type="text"
                    placeholder="Breed   e.g shiba inu"
                    onChange={(e) => handleChange("breed", e.target.value)}
                    className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-none Input Body"
                />
            </div>
        </div>
    );
}