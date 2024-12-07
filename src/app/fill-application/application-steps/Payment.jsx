"use client";

import React, { useState } from "react";

const Payment = ({ onSubmit, onBack, onQuit }) => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        cardName: "",
        securityNumber: "",
        billingAddress: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({
            ...paymentData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        }); // Clear errors on input change
    };

    const validateInput = () => {
        const newErrors = {};

        // Card Number must not be empty and should contain only digits
        if (!paymentData.cardNumber.trim()) {
            newErrors.cardNumber = "Card number is required.";
        } else if (!/^\d+$/.test(paymentData.cardNumber)) {
            newErrors.cardNumber = "Card number must contain only digits.";
        }

        // Card Name must not be empty
        if (!paymentData.cardName.trim()) {
            newErrors.cardName = "Name on the card is required.";
        }

        // Security Number must not be empty and should be exactly 3 digits
        if (!paymentData.securityNumber.trim()) {
            newErrors.securityNumber = "Security number is required.";
        } else if (!/^\d{3}$/.test(paymentData.securityNumber)) {
            newErrors.securityNumber = "Security number must be exactly 3 digits.";
        }

        // Billing Address must not be empty
        if (!paymentData.billingAddress.trim()) {
            newErrors.billingAddress = "Billing address is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = () => {
        if (!validateInput()) {
            return;
        }

        onSubmit(paymentData); // Pass data to the parent for submission
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
            <h1 style={styles.title}>Pay for application fee</h1>
            <h2 style={styles.balance}>Balance Due: $30</h2>

            {/* Form Section */}
            <form style={styles.form} noValidate>
                <div style={styles.field}>
                    <label>Card Number *</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Enter card number"
                        style={styles.input}
                    />
                    {errors.cardNumber && <p style={styles.errorText}>{errors.cardNumber}</p>}
                </div>

                <div style={styles.field}>
                    <label>Name on the Card *</label>
                    <input
                        type="text"
                        name="cardName"
                        value={paymentData.cardName}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                        style={styles.input}
                    />
                    {errors.cardName && <p style={styles.errorText}>{errors.cardName}</p>}
                </div>

                <div style={styles.field}>
                    <label>Security Number (3 digits) *</label>
                    <input
                        type="text"
                        name="securityNumber"
                        value={paymentData.securityNumber}
                        onChange={handleInputChange}
                        placeholder="Enter security number"
                        style={styles.input}
                    />
                    {errors.securityNumber && <p style={styles.errorText}>{errors.securityNumber}</p>}
                </div>

                <div style={styles.field}>
                    <label>Billing Address *</label>
                    <input
                        type="text"
                        name="billingAddress"
                        value={paymentData.billingAddress}
                        onChange={handleInputChange}
                        placeholder="Enter billing address"
                        style={styles.input}
                    />
                    {errors.billingAddress && <p style={styles.errorText}>{errors.billingAddress}</p>}
                </div>

                {/* Navigation Buttons */}
                <div style={styles.buttonContainer}>
                    <button type="button" onClick={onBack} style={styles.backButton}>
                        Go back
                    </button>
                    <button type="button" onClick={handleSubmit} style={styles.submitButton}>
                        Submit Payment
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
    balance: {
        fontSize: "16px",
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        marginTop: "15px",
    },
    field: {
        fontSize: "14px",
        marginBottom: "15px",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginTop: "5px",
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
    backButton: {
        color: "#68949D",
        border: "1px solid #68949D",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        padding: "10px 20px",
        cursor: "pointer",
    },
    submitButton: {
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

export default Payment;
