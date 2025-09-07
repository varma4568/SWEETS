import React from "react";

function WelcomePage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
  background: "#fff0f5",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}>
      <header style={{
        background: "linear-gradient(90deg, #ffd700 0%, #ff69b4 100%)",
        padding: "20px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        textAlign: "center"
      }}>
        <h2 style={{ margin: 0, color: "#b76e79", fontWeight: 700 }}>SWEETS</h2>
      </header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "#b76e79", fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome to SWEETS!</h1>
        <p style={{ color: "#d4af37", fontSize: "1.2rem" }}>Enjoy exploring our delicious selection of treats.</p>
      </main>
      <footer style={{
        background: "linear-gradient(90deg, #ffd700 0%, #ff69b4 100%)",
        padding: "12px 0",
        textAlign: "center",
        color: "#b76e79",
        fontSize: "1rem",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.05)"
      }}>
        &copy; {new Date().getFullYear()} SWEETS. All rights reserved.
      </footer>
    </div>
  );
}

export default WelcomePage;
