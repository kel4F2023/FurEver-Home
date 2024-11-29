"use client";
import PetDetails from "@/app/pet-details/pet-detail/PetDetails";
import {useParams} from "next/navigation";

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

export default function PetDetailsPage() {
    const { id } = useParams();
    const petData = pets.find((pet) => pet.id === parseInt(id, 10));

    if (!petData) {
        return <p className="text-center">Pet not found</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <PetDetails {...petData} />
        </div>
    );
}