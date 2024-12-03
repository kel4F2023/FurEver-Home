"use client";

import React from "react";
import { useRouter } from "next/navigation";

const applications = [
    {
        name: "Timber",
        status: "In Review",
        image: "/shiba.jpg",
        statusColor: "#00A9FF", // Blue
    },
    {
        name: "Lucas",
        status: "Accepted",
        image: "/lucas-original.png",
        statusColor: "#7ED321", // Green
    },
    // {
    //   name: "Dolby", 
    //     status: "Draft",
    //     image: "/dolby.png",
    //     statusColor: "#4A90E2", // Blue
    // }
];

const ApplicationsPage = () => {
    const router = useRouter();

    const handleViewActions = (name) => {
        if (name === "Timber") {
            router.push("/my-profile/applications/actions/timber");
        }
        else if (name === "Lucas") {
            router.push("/my-profile/applications/actions/lucas");
        }
    };

    return (
        <div style={styles.container}>
            {applications.map((app, index) => (
                <div key={index} style={styles.card}>
                    <div style={styles.imageContainer}>
                        <img src={app.image} alt={app.name} style={styles.image} />
                    </div>
                    <div style={styles.info}>
                        <p style={styles.name}>Name: {app.name}</p>
                        <p style={{ ...styles.status, color: app.statusColor }}>
                            Status: {app.status}
                        </p>
                        <button className="Primary-Button mb-4">View summary</button>
                        <button className="Primary-Button mb-4" onClick={() => handleViewActions(app.name)}>View actions</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
    },
    card: {
        width: "200px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        padding: "10px",
    },
    imageContainer: {
        width: "150px",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "10px",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    info: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    name: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    status: {
        fontSize: "14px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    button: {
        backgroundColor: "#4A90E2",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginBottom: "5px",
        width: "100%",
    },
};

export default ApplicationsPage;
