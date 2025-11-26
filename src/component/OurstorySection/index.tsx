"use client";

import Image from "next/image";

const OurStorySection = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        backgroundColor: "#fafafb",
        color: "#005f73",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "25px",
            fontWeight: "700",
            color: "#ED7014",
          }}
        >
          Our Story: The Heart of Beach Vibes
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "1rem",
            color: "grey",
          }}
        >
          For years, our beach hangouts have been more than just gatherings —
          they are a celebration of friendship, nature, and the vibrant spirit
          of the sea. We&apos;ve created a community united by laughter, music,
          and the timeless sound of waves crashing.
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "grey",
          }}
        >
          From sunny afternoons to starlit nights, each event captures the joy
          and freedom that only the beach can offer. Join us as we continue
          writing this story — where every moment is a cherished memory and
          every visit feels like coming home.
        </p>
      </div>

      <div style={{ flex: "1 1 300px", maxWidth: "500px" }}>
        <Image
          src="/images/story/story.png"
          alt="Beach hangout vibes"
          width={500}
          height={350}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
          }}
          priority
        />
      </div>
    </section>
  );
};

export default OurStorySection;