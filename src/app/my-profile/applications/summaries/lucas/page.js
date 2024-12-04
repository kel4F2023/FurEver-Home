"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SummaryPage = () => {
    const router = useRouter();

    const handleBackToApplications = () => {
        router.push("/my-profile/applications");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Application Summary for Lucas</h1>
            <div style={styles.imageContainer}>
                <img src="/Lucas.png" alt="Lucas" style={styles.image} />
            </div>
            <p style={styles.status}>
                Status: <span style={styles.statusAccepted}>Accepted</span>
            </p>

            <h2 style={styles.sectionTitle}>Personal & Contact Information</h2>
            <div style={styles.field}>
                <label>First Name:</label>
                <p>Mingtao</p>
            </div>
            <div style={styles.field}>
                <label>Last Name:</label>
                <p>Dong</p>
            </div>
            <div style={styles.field}>
                <label>Date of Birth:</label>
                <p>08/21/2001</p>
            </div>
            <div style={styles.field}>
                <label>Address:</label>
                <p>3350 Carsick St</p>
            </div>
            <div style={styles.field}>
                <label>Postcode:</label>
                <p>93042</p>
            </div>
            <div style={styles.field}>
                <label>Contact Phone:</label>
                <p>626-972-2901</p>
            </div>
            <div style={styles.field}>
                <label>Contact Email:</label>
                <p>mingtaod@gmail.com</p>
            </div>

            <h2 style={styles.sectionTitle}>Household and Lifestyle Information</h2>
            <div style={styles.field}>
                <label>Select type of residence from below:</label>
                <p>House</p>
            </div>
            <div style={styles.field}>
                <label>Residence rent or own:</label>
                <p>Rent</p>
            </div>
            <div style={styles.field}>
                <label>Number of people in the household:</label>
                <p>3</p>
            </div>
            <div style={styles.field}>
                <label>Describe existing pets (if any) in the household:</label>
                <p>None</p>
            </div>
            <div style={styles.field}>
                <label>Describe work schedule and typical time spent at home:</label>
                <p>9 AM - 5 PM, mostly at home</p>
            </div>
            <div style={styles.field}>
                <label>Activity level and access to outdoor space (e.g., yard, park):</label>
                <p>Moderate, access to a large yard</p>
            </div>
            <div style={styles.field}>
                <label>Proof of income:</label>
                <p>File attached</p>
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
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "90%",
        boxSizing: "border-box",
    },
    header: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
    },
    backButton: {
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
    imageContainer: {
        width: "150px",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "0 auto 20px",
        marginTop: "20px"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    status: {
        fontSize: "16px",
        marginBottom: "20px",
        textAlign: "center",
    },
    statusAccepted: {
        color: "#7ED321", // Green
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: "15px",
        fontWeight: "normal",
        textAlign: "center",
        marginBottom: "20px",
    },
    field: {
        fontSize: "14px",
        marginBottom: "20px",
    },
};

export default SummaryPage;