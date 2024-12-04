"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Step3 = ({ onNext, onBack, onQuit }) => {
    const searchParams = useSearchParams();
    const petName = searchParams.get("petName");

    const [formData, setFormData] = useState({
        adoptionReasons: [],
        otherReason: "",
        expectations: "",
        vacationPlan: "",
        petExperience: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                adoptionReasons: checked
                    ? [...prevData.adoptionReasons, value]
                    : prevData.adoptionReasons.filter((reason) => reason !== value),
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleNext = () => {
        if (formData.adoptionReasons.length === 0) {
            alert("Please select at least one reason for adopting the pet.");
            return;
        }
        onNext(formData); // Pass data to the parent for the next step
    };

    return (
        <div style={styles.container}>
            {/* Save & Exit Button */}
            <div style={styles.header}>
                <button onClick={onQuit} style={styles.saveExitButton}>
                    Save & Exit
                </button>
            </div>

            {/* Title Section */}
            <h1 style={styles.title}>Application for Adopting {petName}</h1>

            {/* Progress Bar */}
            <div style={styles.progressContainer}>
                {[1, 2, 3, 4].map((step, index) => (
                    <React.Fragment key={step}>
                        <div
                            style={{
                                ...styles.circle,
                                ...(step <= 3 ? styles.activeCircle : styles.inactiveCircle),
                            }}
                        >
                            {step}
                        </div>
                        {index < 3 && (
                            <div
                                style={{
                                    ...styles.line,
                                    ...(step < 3 ? styles.activeLine : styles.inactiveLine),
                                }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Subtitle */}
            <h2 style={styles.subtitle}>Pet Care Experience and Preferences</h2>

            {/* Form Section */}
            <form style={styles.form}>
                <div style={styles.field}>
                    <label style={styles.checkboxTitle}>Reason for adopting the pet (choose all that applies) *</label>
                    {["Companionship", "Rescue and Care", "Therapeutic Support", "Activity Partner", "Personal Fulfillment"].map((reason) => (
                        <label key={reason} style={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="adoptionReasons"
                                value={reason}
                                checked={formData.adoptionReasons.includes(reason)}
                                onChange={handleInputChange}
                                style={styles.checkbox}
                            />
                            {reason}
                        </label>
                    ))}
                    <label style={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="adoptionReasons"
                            value="Other"
                            checked={formData.adoptionReasons.includes("Other")}
                            onChange={handleInputChange}
                            style={styles.checkbox}
                        />
                        Other, please specify below in the blank:
                    </label>
                    <textarea
                        name="otherReason"
                        value={formData.otherReason}
                        onChange={handleInputChange}
                        placeholder="Specify other reasons"
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.field}>
                    <label>Elaborate on your expectations for the pet adopted</label>
                    <textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleInputChange}
                        placeholder="Enter your expectations"
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.field}>
                    <label>Plan for handling pet care during vacations or absences</label>
                    <textarea
                        name="vacationPlan"
                        value={formData.vacationPlan}
                        onChange={handleInputChange}
                        placeholder="Enter your plan"
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.field}>
                    <label>Experience with pet ownership (current and past pets)</label>
                    <textarea
                        name="petExperience"
                        value={formData.petExperience}
                        onChange={handleInputChange}
                        placeholder="Describe your experience"
                        style={styles.textarea}
                    />
                </div>

                {/* Navigation Buttons */}
                <div style={styles.buttonContainer}>
                    <button type="button" onClick={onBack} style={styles.backButton}>
                        Go Back
                    </button>
                    <button type="button" onClick={handleNext} style={styles.nextButton}>
                        Next Page
                    </button>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
    },
    saveExitButton: {
        color: "#68949D",
        border: "1px solid #68949D",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        padding: "8px 12px",
        cursor: "pointer",
        fontSize: "14px",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "10px",
    },
    progressContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
    },
    circle: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: "bold",
    },
    activeCircle: {
        backgroundColor: "#00A9FF",
        color: "white",
    },
    inactiveCircle: {
        backgroundColor: "#f0f0f0",
        color: "#999",
    },
    line: {
        width: "40px",
        height: "4px",
        borderRadius: "2px",
    },
    activeLine: {
        backgroundColor: "#00A9FF",
    },
    inactiveLine: {
        backgroundColor: "#f0f0f0",
    },
    subtitle: {
        fontSize: "15px",
        fontWeight: "normal",
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        marginTop: "20px",
    },
    field: {
        fontSize: "14px",
        marginBottom: "20px",
    },
    checkboxTitle: {
        fontSize: "14px",
        marginBottom: "8px",
        display: "block",
    },
    checkboxLabel: {
        display: "block",
        marginBottom: "8px",
        fontSize: "14px",
        color: "#333",
    },
    checkbox: {
        marginRight: "5px",
    },
    textarea: {
        marginTop: "6px",
        display: "block",
        width: "100%",
        minHeight: "100px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
        boxSizing: "border-box",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
    },
    nextButton: {
        color: "#ffffff",
        borderRadius: "10px",
        backgroundColor: "#00A9FF",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        padding: "10px 20px",
        cursor: "pointer",
    },
    backButton: {
        color: "#68949D",
        border: "1px solid #68949D",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        padding: "10px 20px",
        cursor: "pointer",
    },
};

export default Step3;