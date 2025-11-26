import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>

        {/* First Name */}
        <input
          type="text"
          placeholder="Enter your first name"
          style={styles.input}
          onChange={(e) => update("firstName", e.target.value)}
        />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Enter your last name"
          style={styles.input}
          onChange={(e) => update("lastName", e.target.value)}
        />

        {/* Date of Birth */}
        <input
          type="date"
          style={styles.input}
          onChange={(e) => update("dob", e.target.value)}
        />

        {/* Gender */}
        <div style={{ color: "white", marginTop: "5px" }}>
          <label>Gender</label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => update("gender", e.target.value)}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => update("gender", e.target.value)}
              />
              Female
            </label>
          </div>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          onChange={(e) => update("email", e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create your password"
          style={styles.input}
          onChange={(e) => update("password", e.target.value)}
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm your password"
          style={styles.input}
          onChange={(e) => update("confirmPassword", e.target.value)}
        />

        {/* Role Selector (User / Admin) */}
        <select
          style={styles.input}
          onChange={(e) => update("role", e.target.value)}
        >
          <option value="user">Select your role: User</option>
          <option value="admin">Admin</option>
        </select>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="checkbox" />
          <label style={{ color: "white" }}>
            I accept all your terms and conditions
          </label>
        </div>

        <button style={styles.button}>REGISTER NOW</button>

        <p style={styles.linkText}>
          Already have an account?{" "}
          <a style={styles.link} href="/login">
            Login now
          </a>
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
    width: "420px",
    padding: "35px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    color: "white",
    marginTop: "20px", // <-- décalage vers le bas
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
  radioGroup: {
    display: "flex",
    gap: "20px",
    marginTop: "8px",
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