"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Step2 = ({ onNext, onBack, onQuit }) => {
    const searchParams = useSearchParams();
    const petName = searchParams.get("petName");

    const [formData, setFormData] = useState({
        residenceType: "",
        residenceOwnership: "",
        householdSize: 1,
        existingPets: "",
        workSchedule: "",
        physicalActivity: "",
        proofOfIncome: null,
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleNext = () => {
        // if (!formData.residenceType || !formData.residenceOwnership) {
        //     alert("Please complete all required fields.");
        //     return;
        // }
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
                        {/* Circle for each step */}
                        <div
                            style={{
                                ...styles.circle,
                                ...(step <= 2 ? styles.activeCircle : styles.inactiveCircle), // Highlight Steps 1 and 2
                            }}
                        >
                            {step}
                        </div>

                        {/* Line between circles (except for the last circle) */}
                        {index < 3 && (
                            <div
                                style={{
                                    ...styles.line,
                                    ...(step < 2 ? styles.activeLine : styles.inactiveLine), // Highlight line between Steps 1 and 2
                                }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Subtitle */}
            <h2 style={styles.subtitle}>Household and Lifestyle Information</h2>

            {/* Form Section */}
            <form style={styles.form}>
                <div style={styles.field}>
                    <label>Select type of residence from below</label>
                    <select
                        name="residenceType"
                        value={formData.residenceType}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    >
                        <option value="">-- NO SELECTION --</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="townhouse">Townhouse</option>
                    </select>
                </div>

                <div style={styles.field}>
                    <label>Do you rent or own your current residence?</label>
                    <div style={styles.radioContainer}>
                        <label style={styles.radioLabel}>
                            <input
                                type="radio"
                                name="residenceOwnership"
                                value="rented"
                                checked={formData.residenceOwnership === "rented"}
                                onChange={handleInputChange}
                                style={styles.radio}
                            />
                            Rented
                        </label>
                        <label style={styles.radioLabel}>
                            <input
                                type="radio"
                                name="residenceOwnership"
                                value="owned"
                                checked={formData.residenceOwnership === "owned"}
                                onChange={handleInputChange}
                                style={styles.radio}
                            />
                            Owned
                        </label>
                    </div>
                </div>

                <div style={styles.field}>
                    <label>Number of people in the household</label>
                    <select
                        name="householdSize"
                        value={formData.householdSize}
                        onChange={handleInputChange}
                        style={styles.input}
                    >
                        {[...Array(10).keys()].map((n) => (
                            <option key={n + 1} value={n + 1}>
                                {n + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={styles.field}>
                    <label>Describe existing pets (if any) in the household</label>
                    <textarea
                        name="existingPets"
                        value={formData.existingPets}
                        onChange={handleInputChange}
                        placeholder="Enter details about existing pets"
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.field}>
                    <label>Describe work schedule and typical time spent at home</label>
                    <textarea
                        name="workSchedule"
                        value={formData.workSchedule}
                        onChange={handleInputChange}
                        placeholder="Enter your work schedule details"
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.field}>
                    <label>
                        Your personal physical activity level and your household’s access to
                        outdoor space (e.g., yard, park)
                    </label>
                    <textarea
                        name="physicalActivity"
                        value={formData.physicalActivity}
                        onChange={handleInputChange}
                        placeholder="Enter details about physical activity and outdoor access"
                        style={styles.textarea}
                    />
                </div>

                <div style={styles.field}>
                    <label>
                        In order to assess your capability of raising a pet, we kindly
                        request your proof of income as a reference
                    </label>
                    <input
                        type="file"
                        name="proofOfIncome"
                        accept=".pdf,.jpg,.png"
                        onChange={handleInputChange}
                        style={styles.fileInput}
                    />
                    <p style={styles.fileNote}>
                        Attach file (e.g., bank statement, pay slip). File size of your
                        documents should not exceed 10MB.
                    </p>
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
        backgroundColor: "#00A9FF", // Blue for active step line
    },
    inactiveLine: {
        backgroundColor: "#f0f0f0", // Gray for inactive step line
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
    input: {
        width: "100%",
        padding: "10px",
        marginTop: "5px",
        border: "1px solid #ddd",
        borderRadius: "4px",
    },
    checkboxContainer: {
        marginTop: "20px",
    },
    link: {
        fontSize: "14px",
        color: "#007bff",
        textDecoration: "underline",
        marginTop: "10px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
    },
    quitButton: {
        color: "#68949D",
        border: "1px solid #68949D",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        padding: "10px 20px",
        cursor: "pointer",
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
    radioContainer: {
        marginTop: "8px",
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
        minHeight: "100px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
        boxSizing: "border-box",
    },
    fileInput: {
        marginTop: "8px",
        display: "block",
    },
    fileNote: {
        marginTop: "8px",
    }
};

export default Step2;