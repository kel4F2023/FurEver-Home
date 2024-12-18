"use client";

import React, { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Step1 from "./application-steps/Step1";
import Step2 from "./application-steps/Step2";
import Step3 from "./application-steps/Step3";
import Step4 from "./application-steps/Step4";
import Payment from "./application-steps/Payment";
import Submitted from "./application-steps/Submitted";

// TODO: 
// Few more things to be done: 
// 1. Save the form data into the state
// 2. Confirm that the style works and then implement the rest of the pages
// 3. Refactor to make the code structure concise
// 4. 动画 -> progress bar

// explanation on missing optional features - limitations


const Page = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    // Handle data from each step and move to the next step
    const handleNext = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        setCurrentStep((prevStep) => prevStep + 1);
    };

    // Go back to the previous step
    const handleBack = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    // Handle form submission at the final step
    const handleSubmit = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        setCurrentStep((prevStep) => prevStep + 1);
    };

    // Handle save and exit functionality
    const handleQuit = () => {
        alert("Your progress has been saved. You can return to complete the form later.");
        // Optionally, save form data to a backend or local storage
        router.push("/pet-details/1")
    };

    // Handle viewing applications
    const handleViewApplications = () => {
        router.push("/my-profile/applications");
    };

    // Render the current step based on the currentStep state
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 onNext={handleNext} onQuit={handleQuit} />;
            case 2:
                return <Step2 onNext={handleNext} onBack={handleBack} onQuit={handleQuit} />;
            case 3:
                return <Step3 onNext={handleNext} onBack={handleBack} onQuit={handleQuit} />;
            case 4:
                return <Step4 onSubmit={handleSubmit} onBack={handleBack} onQuit={handleQuit} />;
            case 5:
                return <Payment onSubmit={handleNext} onBack={handleBack} onQuit={handleQuit} />;
            case 6:
                return <Submitted onViewApplications={handleViewApplications} />;
            default:
                return <div>Error: Unknown step</div>;
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div style={styles.container}>
                {renderStep()}
            </div>
        </Suspense>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "95%", // Reduce the max width for better mobile responsiveness
        margin: "0 auto",
        padding: "15px", // Reduced padding to optimize for smaller screens
        boxSizing: "border-box", // Ensure padding doesn't overflow the container
    },
};

export default Page;