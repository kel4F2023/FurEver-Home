"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LucasActions = () => {
    const router = useRouter();

    const handleBackToApplications = () => {
        router.push("/my-profile/applications");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Actions Required for Lucas's Application</h1>
            <div style={styles.imageContainer}>
                <img src="/Lucas.png" alt="Lucas" style={styles.image} />
            </div>
            <p style={styles.status}>
                Status: <span style={styles.statusInReview}>In Review</span>
            </p>
            <div style={styles.instructions}>
                <ol style={styles.list}>
                    <li style={styles.listItem}>Your application for Lucas is currently under review. Here's what to do next:</li>
                    <li style={styles.listItem}><strong>Check for Updates</strong></li>
                    <li style={styles.listItem}>
                        <strong>Learn about Lucas's care and start getting essentials like food and a bed.</strong>
                    </li>
                    <li style={styles.listItem}>
                        <strong>Contact the shelter if you have questions.</strong>
                    </li>
                </ol>
                <p style={styles.paragraph}>Stay patient, and good luck!</p>
            </div>
            <button onClick={handleBackToApplications} className="secondary-btn mb-4">
                Back to all applications
            </button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        margin: "0",
        padding: "30px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box", // Ensures padding and border are included in dimensions
        overflow: "auto", // Ensures content inside the container is scrollable if it overflows
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    imageContainer: {
        width: "150px",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "0 auto 20px",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    status: {
        fontSize: "16px",
        marginBottom: "20px",
    },
    statusInReview: {
        color: "#4A90E2", // Blue
        color: "var(--primary-color)",
        fontWeight: "bold",
    },
    instructions: {
        textAlign: "left",
        fontSize: "14px",
        marginBottom: "30px",
        padding: "0 20px",
    },
    list: {
        // paddingLeft: "20px",
    },
    listItem: {
        marginBottom: "15px",
    },
    paragraph: {
        marginTop: "15px",
    },
    backButton: {
        className: "secondary-btn mb-4",
        backgroundColor: "#4A90E2",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    },
};

export default LucasActions;