"use client";

export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      }}
    >
      <h1>Bienvenue sur URIDE Web 🚗</h1>
      <p style={{ fontSize: 18, marginTop: 10 }}>
        La plateforme moderne pour la mobilité et les services en ligne.
      </p>
      <p style={{ marginTop: 20, color: "gray" }}>
        Déployé avec ❤️ par <strong>Djems Kwembe</strong>
      </p>
    </main>
  );
}

