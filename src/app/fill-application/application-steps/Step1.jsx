"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Step1 = ({ onNext, onQuit }) => {
    const searchParams = useSearchParams();
    const petName = searchParams.get("petName");
    const router = useRouter();

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

    const [errors, setErrors] = useState({});

    // Load form data from local storage on mount
    useEffect(() => {
        const savedFormData = localStorage.getItem("step1FormData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        };

        setFormData(updatedFormData);
        setErrors({
            ...errors,
            [name]: "",
        });

        // Save to local storage
        localStorage.setItem("step1FormData", JSON.stringify(updatedFormData));
    };

    const validateInput = () => {
        const newErrors = {};

        // Validation rules
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required.";

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.contactPhone)) {
            newErrors.contactPhone = "Phone number must contain exactly 10 digits.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.contactEmail)) {
            newErrors.contactEmail = "Enter a valid email address.";
        }

        const zipRegex = /^\d{5}$/;
        if (!zipRegex.test(formData.zipCode)) {
            newErrors.zipCode = "Zip code must contain exactly 5 digits."
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = "You must accept the terms and policies.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleNext = () => {
        if (!validateInput()) {
            return;
        }
        onNext(formData);
    };

    const handleViewTerms = () => {
        router.push("/terms");
    };

    const handleQuit = () => {
        localStorage.removeItem("step1FormData");
        onQuit();
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <button onClick={handleQuit} style={styles.saveExitButton}>
                    Save & Exit
                </button>
            </div>
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
            <form style={styles.form} noValidate>
                <div style={styles.field}>
                    <label>First Name *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        style={styles.input}
                    />
                    {errors.firstName && <p style={styles.errorText}>{errors.firstName}</p>}
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
                    />
                    {errors.lastName && <p style={styles.errorText}>{errors.lastName}</p>}
                </div>
                <div style={styles.field}>
                    <label>Your Date of Birth *</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.dateOfBirth && <p style={styles.errorText}>{errors.dateOfBirth}</p>}
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
                    {errors.address && <p style={styles.errorText}>{errors.address}</p>}
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
                    {errors.zipCode && <p style={styles.errorText}>{errors.zipCode}</p>}
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
                    {errors.contactPhone && <p style={styles.errorText}>{errors.contactPhone}</p>}
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
                    {errors.contactEmail && <p style={styles.errorText}>{errors.contactEmail}</p>}
                </div>
                <div style={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        style={styles.checkbox}
                    />
                    <label>I agree to the adoption terms and shelter policies *</label>
                    {errors.termsAccepted && <p style={styles.errorText}>{errors.termsAccepted}</p>}
                </div>
                <p style={styles.link}>
                    <a
                        onClick={handleViewTerms}
                        style={{
                            cursor: "pointer",
                            color: "#007bff",
                            textDecoration: "underline",
                        }}
                    >
                        Click to view terms and policies
                    </a>
                </p>
                <div style={styles.buttonContainer}>
                    <button type="button" onClick={handleQuit} style={styles.quitButton}>
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
        backgroundColor: "#00A9FF", // Blue for active step
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
    errorText: {
        color: "red",
        fontSize: "12px",
        marginTop: "5px",
    },
};

export default Step1;