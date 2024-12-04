"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TermsPage = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div style={styles.container}>
            <button onClick={handleGoBack} style={styles.goBackButton}>
                Go back
            </button>
            <h1 style={styles.title}>Terms and Policies</h1>
            <div style={styles.content}>
                <h2 style={styles.sectionTitle}>Introduction</h2>
                <p style={styles.paragraph}>
                    Welcome to FurEver Home ("the Platform"). These Terms and Policies govern your use of our services. By accessing or using the Platform, you agree to comply with these Terms and Policies. Please read them carefully.
                </p>
                <h3 style={styles.sectionTitle}>1. User Responsibilities</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Account Information:</strong> You are responsible for maintaining the confidentiality of your account credentials and ensuring all information provided is accurate and up-to-date.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Acceptable Use:</strong> You agree not to misuse the Platform, including but not limited to:
                        <ul>
                            <li>Engaging in unlawful activities.</li>
                            <li>Attempting to breach or circumvent security measures.</li>
                            <li>Uploading malicious software or content.</li>
                        </ul>
                    </li>
                    <li style={styles.listItem}>
                        <strong>Compliance:</strong> You must comply with all applicable local, state, national, and international laws and regulations.
                    </li>
                </ul>
                <h3 style={styles.sectionTitle}>2. Privacy Policy</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Data Collection:</strong> We collect and process personal data to provide our services, including name, contact information, and usage data.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Data Usage:</strong> Collected data is used to improve the Platform, process transactions, and communicate with users.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Data Sharing:</strong> We do not sell or rent personal data to third parties. Limited data may be shared with service providers for operational purposes.
                    </li>
                    <li style={styles.listItem}>
                        <strong>User Rights:</strong> Users may access, update, or delete their personal information in compliance with applicable laws.
                    </li>
                </ul>
                <h3 style={styles.sectionTitle}>3. Intellectual Property</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Ownership:</strong> All content, trademarks, and logos on the Platform are the property of [Your Company Name] or its licensors.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Restrictions:</strong> Users are prohibited from copying, distributing, or modifying content from the Platform without prior permission.
                    </li>
                </ul>
                <h3 style={styles.sectionTitle}>4. Payment and Refund Policy</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Transactions:</strong> All payments made through the Platform are final unless stated otherwise.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Refunds:</strong> Refund requests must be submitted within [X days] and are subject to review and approval.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Fees:</strong> Users are responsible for any transaction fees associated with their payment method.
                    </li>
                </ul>
                <h3 style={styles.sectionTitle}>5. Limitation of Liability</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>The Platform is provided "as is" without warranty of any kind. We do not guarantee the availability or accuracy of services.</li>
                    <li style={styles.listItem}>We are not liable for:</li>
                    <ul>
                        <li>Any loss or damage resulting from your use of the Platform.</li>
                        <li>Third-party services or content accessed through the Platform.</li>
                    </ul>
                </ul>
                <h3 style={styles.sectionTitle}>6. Termination</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Termination by User:</strong> You may terminate your account at any time.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your account for violations of these Terms and Policies or other applicable rules.
                    </li>
                </ul>
                <h3 style={styles.sectionTitle}>7. Changes to Terms and Policies</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>We reserve the right to update these Terms and Policies at any time. Users will be notified of significant changes via email or a notice on the Platform.</li>
                </ul>
                <h3 style={styles.sectionTitle}>8. Governing Law</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>These Terms and Policies are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.</li>
                </ul>
                <h3 style={styles.sectionTitle}>9. Contact Information</h3>
                <p style={styles.paragraph}>
                    For questions or concerns regarding these Terms and Policies, please contact us at:
                    <br />
                    827-981-0291
                    <br />
                    6271 Hill St, San Jose, CA
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "30px",
        textAlign: "left",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        overflow: "auto",
    },
    goBackButton: {
        color: "#68949D",
        border: "1px solid #68949D",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        padding: "10px 20px",
        cursor: "pointer",
    },
    title: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "20px",
        textAlign: "center",
    },
    content: {
        fontSize: "14px",
        lineHeight: "1.6",
    },
    sectionTitle: {
        fontSize: "15px",
        fontWeight: "bold",
        marginTop: "20px",
        marginBottom: "10px",
    },
    paragraph: {
        marginBottom: "20px",
    },
    list: {
        paddingLeft: "20px",
        marginBottom: "20px",
    },
    listItem: {
        marginBottom: "10px",
    },
};

export default TermsPage;