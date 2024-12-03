"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TimberActions = () => {
    const router = useRouter();

    const handleBackToApplications = () => {
        router.push("/my-profile/applications");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Actions Required for Timber's Application</h1>
            <div style={styles.imageContainer}>
                <img src="/shiba.jpg" alt="Timber" style={styles.image} />
            </div>
            <p style={styles.status}>
                Status: <span style={styles.statusAccepted}>Accepted</span>
            </p>
            <div style={styles.instructions}>
                <ol style={styles.list}>
                    <li style={styles.listItem}>
                        Congratulations! Your application for Timber has been approved. Here's what to do next:
                    </li>
                    <li style={styles.listItem}>
                        <strong>Bring These Items:</strong>
                        <ul>
                            <li>Government-issued photo ID.</li>
                            <li>Adoption fee (confirm payment method).</li>
                            <li>Collar, leash, and a pet crate if needed.</li>
                        </ul>
                    </li>
                    <li style={styles.listItem}>
                        <strong>Visit the Shelter:</strong>
                        <ul>
                            <li>Confirm hours and location.</li>
                            <li>Complete final paperwork and pick up Timber's records.</li>
                        </ul>
                    </li>
                    <li style={styles.listItem}>
                        <strong>Prepare for Timber:</strong>
                        <ul>
                            <li>Pet-proof your home and have food, a bed, and toys ready.</li>
                        </ul>
                    </li>
                    <li style={styles.listItem}>
                        <strong>Take Timber Home:</strong>
                        <ul>
                            <li>Safely transport him and help him settle into his new environment.</li>
                        </ul>
                    </li>
                </ol>
                <p style={styles.paragraph}>Enjoy your time with Timber!</p>
            </div>
            <button onClick={handleBackToApplications} className="Primary-Button mb-4">
                Back to all applications
            </button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "30px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
    statusAccepted: {
        color: "#7ED321", // Green
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
        backgroundColor: "#4A90E2",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    },
};

export default TimberActions;
