"use client";

import React from "react";

const Submitted = ({ onViewApplications }) => {
    return (
        <div style={styles.container}>
            {/* Title Section */}
            <h1 style={styles.title}>Payment receipt</h1>
            <h2 style={styles.balance}>Balance Due: $0</h2>

            {/* Message Section */}
            <p style={styles.message}>Thank you for your payment!</p>
            <p style={styles.message}>Your application has been submitted for review.</p>

            {/* View Applications Button */}
            <div style={styles.buttonContainer}>
                <button type="button" onClick={onViewApplications} style={styles.viewButton}>
                    View Applications
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    balance: {
        fontSize: "16px",
        marginBottom: "90px",
    },
    message: {
        fontSize: "14px",
        marginBottom: "20px",
    },
    buttonContainer: {
        marginTop: "90px",
    },
    viewButton: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    },
};

export default Submitted;
