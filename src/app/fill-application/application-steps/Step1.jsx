"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Step1 = ({ onNext, onQuit }) => {
    const searchParams = useSearchParams();
    const petName = searchParams.get("petName");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        zipCode: "",
        contactPhone: "",
        contactEmail: "",
        termsAccepted: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleNext = () => {
        const {
            firstName,
            lastName,
            dateOfBirth,
            address,
            zipCode,
            contactPhone,
            contactEmail,
            termsAccepted,
        } = formData;

        if (
            !firstName ||
            !lastName ||
            !dateOfBirth ||
            !address ||
            !zipCode ||
            !contactPhone ||
            !contactEmail ||
            !termsAccepted
        ) {
            alert("Please fill in all required fields and accept the terms to proceed.");
            return;
        }

        // Pass data to the parent for the next step
        onNext(formData);
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
                                ...(step <= 1 ? styles.activeCircle : styles.inactiveCircle), // Highlight Steps 1 and 2
                            }}
                        >
                            {step}
                        </div>

                        {/* Line between circles (except for the last circle) */}
                        {index < 3 && (
                            <div
                                style={{
                                    ...styles.line,
                                    ...(step < 1 ? styles.activeLine : styles.inactiveLine), // Highlight line between Steps 1 and 2
                                }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Subtitle */}
            <h2 style={styles.subtitle}>Personal & Contact Information</h2>

            {/* Form Section */}
            <form style={styles.form}>
                <div style={styles.field}>
                    <label>First Name *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.field}>
                    <label>Last Name *</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.field}>
                    <label>Your Date of Birth *</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.field}>
                    <label>Address *</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Zip Code *</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Enter your zip code"
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Contact Phone *</label>
                    <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="Enter your contact phone"
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Contact Email *</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="Enter your contact email"
                        style={styles.input}
                    />
                </div>

                {/* Terms and Agreement */}
                <div style={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        style={styles.checkbox}
                        required
                    />
                    <label>I agree to the adoption terms and shelter policies *</label>
                </div>

                <p style={styles.link}>
                    <a href="/terms" target="_blank" rel="noopener noreferrer">
                        Click to view terms and policies
                    </a>
                </p>

                {/* Navigation Buttons */}
                <div style={styles.buttonContainer}>
                    <button type="button" onClick={onQuit} style={styles.quitButton}>
                        Quit
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
        backgroundColor: "#e0e0e0",
        padding: "8px 12px",
        borderRadius: "5px",
        border: "none",
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
        backgroundColor: "#007bff", // Blue for active step
        color: "white",
    },
    inactiveCircle: {
        backgroundColor: "#f0f0f0", // Gray for inactive steps
        color: "#999",
    },
    line: {
        width: "40px",
        height: "4px",
        borderRadius: "2px",
    },
    activeLine: {
        backgroundColor: "#007bff", // Blue for active step line
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
        fontSize: "14px",
        marginTop: "20px",
    },
    checkbox: {
        marginRight: "10px",
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
        backgroundColor: "#e0e0e0",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    },
    nextButton: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    },
};

export default Step1;