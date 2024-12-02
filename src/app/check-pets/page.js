"use client";
import PetCard from "@/app/check-pets/pet-profiles/PetCard";
import SearchCard from "@/app/check-pets/pet-profiles/SearchCard";
import { useState } from "react";
import Link from "next/link";

export default function CheckPets() {
    const [searchData, setSearchData] = useState({});
    const [filteredPets, setFilteredPets] = useState(null);

    const pets = [
        {
            id: 1,
            name: "Timber",
            breed: "shiba",
            image: "/shiba.jpg",
            zipCode: "95112",
            species: "dog",
            gender: "male",
            color: "yellow",
            age: "1.2 years",
            location: "San Jose, CA",
            petId: "ABC1234567",
            story: "Timber is a playful and energetic Shiba Inu who loves exploring the outdoors. He has a curious nature and enjoys long walks in the park. Timber is loyal and forms strong bonds with his family.",
            specialAttention: ["Needs daily exercise", "Requires a secure yard", "Best suited for experienced owners"],
        },
        {
            id: 2,
            name: "Mittens",
            breed: "persian",
            image: "/persiancat.jpg",
            zipCode: "95113",
            species: "cat",
            gender: "female",
            color: "white",
            age: "3 years",
            location: "Sunnyvale, CA",
            petId: "DEF8901234",
            story: "Mittens is a calm and affectionate Persian cat who enjoys lounging in sunny spots. She’s gentle and loves being pampered with grooming sessions. Mittens is perfect for someone looking for a low-energy companion.",
            specialAttention: ["Daily grooming required", "Prefers a quiet environment", "Needs regular eye care"],
        },
        {
            id: 3,
            name: "Charlie",
            breed: "golden retriever",
            image: "/goldenretriever.jpg",
            zipCode: "95114",
            species: "dog",
            gender: "male",
            color: "golden",
            age: "2 years",
            location: "Mountain View, CA",
            petId: "GHI5678901",
            story: "Charlie is a friendly and outgoing Golden Retriever who loves meeting new people and dogs. He’s highly trainable and enjoys learning new tricks. Charlie would thrive in a home with an active family.",
            specialAttention: ["Requires daily playtime", "Loves social interactions", "Needs regular grooming"],
        },
    ];

    const handleSearch = (data) => {
        console.log("Search data:", data);

        const filtered = pets.filter((pet) => {
            return Object.entries(data).every(([key, value]) => {
                if (!value) return true;
                return String(pet[key]).toLowerCase() === value.toLowerCase();
            });
        });

        setFilteredPets(filtered.length > 0 ? filtered : []);
    };

    const handleClear = () => {
        console.log("Clear button clicked!");
        setFilteredPets(null);
    };



    return (
        <div className="flex flex-col items-center min-h-screen bg-white gap-4 p-5">
            <h1 className="H1 -ml-4">Search For Pets</h1>
            <div className="w-[380px] h-[0px] border border-gray-200"></div>

            {/* Search Card */}
            <SearchCard
                onSearch={handleSearch}
                onClear={handleClear}
                onInputChange={(data) => setSearchData(data)}
            />

            {/* Pet Cards */}
            <div className="flex flex-col items-center justify-center gap-6">
                {(filteredPets === null ? pets : filteredPets).map((pet) => (
                    <Link
                        key={pet.id}
                        href={`/pet-details/${pet.id}`}
                        className="block"
                    >
                        <PetCard
                            name={pet.name}
                            breed={pet.breed}
                            image={pet.image}
                            onDetailsClick={() => {
                            }}
                        />
                    </Link>
                ))}
                {filteredPets !== null && filteredPets.length === 0 && (
                    <p>No pets found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}