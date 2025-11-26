import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button}>LOGIN NOW</button>

        <p style={styles.linkText}>
          Don’t have an account? <a style={styles.link} href="/register">Register now</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#11131A",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#1C1E25",
    width: "380px",
    padding: "35px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "28px",
  },
  input: {
    background: "#252630",
    border: "1px solid #444",
    borderRadius: "8px",
    padding: "14px",
    color: "white",
    fontSize: "15px",
  },
  button: {
    background: "#2D63FF",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },
  linkText: {
    textAlign: "center",
    marginTop: "10px",
    color: "#ccc",
  },
  link: {
    color: "#2D63FF",
    textDecoration: "none",
  },
};