"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Step4 = ({ onSubmit, onBack, onQuit }) => {
    const searchParams = useSearchParams();
    const petName = searchParams.get("petName");

    const [formData, setFormData] = useState({
        medicalCommitment: "",
        veterinaryCare: "",
        fullName: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const { medicalCommitment, veterinaryCare, fullName } = formData;

        if (!medicalCommitment || !veterinaryCare || !fullName) {
            alert("Please complete all required fields.");
            return;
        }

        onSubmit(formData); // Pass data to the parent for submission
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
                                ...(step <= 4 ? styles.activeCircle : styles.inactiveCircle),
                            }}
                        >
                            {step}
                        </div>
                        {index < 3 && (
                            <div
                                style={{
                                    ...styles.line,
                                    ...(step < 4 ? styles.activeLine : styles.inactiveLine),
                                }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Subtitle */}
            <h2 style={styles.subtitle}>Commitment, References, and Final Agreement</h2>

            {/* Form Section */}
            <form style={styles.form}>
                <div style={styles.field}>
                    <label>Will you commit to handle potential medical or behavioral issues of the adopted pet? *</label>
                    <div style={styles.radioContainer}>
                        <label style={styles.radioLabel}>
                            <input
                                type="radio"
                                name="medicalCommitment"
                                value="yes"
                                checked={formData.medicalCommitment === "yes"}
                                onChange={handleInputChange}
                                style={styles.radio}
                            />
                            Yes
                        </label>
                    </div>
                </div>

                <div style={styles.field}>
                    <label>Are you willing to provide regular veterinary care (e.g., vaccinations, check-ups) to the adopted pet? *</label>
                    <div style={styles.radioContainer}>
                        <label style={styles.radioLabel}>
                            <input
                                type="radio"
                                name="veterinaryCare"
                                value="yes"
                                checked={formData.veterinaryCare === "yes"}
                                onChange={handleInputChange}
                                style={styles.radio}
                            />
                            Yes
                        </label>
                    </div>
                </div>

                <div style={styles.field}>
                    <label>Please note the adoption application fee will be $30. Sign your full name below to agree to all terms, fee, and policies *</label>
                    <textarea
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        style={styles.textarea}
                    />
                </div>

                {/* Navigation Buttons */}
                <div style={styles.buttonContainer}>
                    <button type="button" onClick={onBack} style={styles.backButton}>
                        Go Back
                    </button>
                    <button type="button" onClick={handleSubmit} style={styles.nextButton}>
                        Proceed to Payment
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
    radioContainer: {
        marginTop: "6px",
    },
    radioLabel: {
        display: "block",
        marginBottom: "8px",
        fontSize: "14px",
        color: "#333",
    },
    radio: {
        marginRight: "5px",
    },
    textarea: {
        marginTop: "6px",
        display: "block",
        width: "100%",
        minHeight: "50px",
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

export default Step4;