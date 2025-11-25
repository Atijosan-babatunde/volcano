"use client";

import { Button } from "../Ui/button";

const HeroSection = () => {
    return (
        <section
            style={{
                 position: "relative",
                backgroundImage: "url('/images/hero/heroone.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "80vh",      
                width: "100%",
                color: "white",
                padding: "120px 20px",
                textAlign: "center",
                overflow: "hidden",
            }}
        >
            {/* DARK OVERLAY */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // <-- change opacity here
                    zIndex: 1,
                }}
            />

            {/* CONTENT */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "800px",
                    margin: "0 auto",
                }}
            >
                <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "800" }}>
                    Catch the Wave of Fun!
                </h1>

                <p style={{ fontSize: "1.25rem", marginBottom: "35px", lineHeight: "1.6" }}>
                    Join us for unforgettable beach hangouts, making memories under the sun and by the sea.
                    Discover a community built on good vibes and shared adventures.
                </p>

                <Button asChild>
                    <a href="/gallery">Explore Gallery</a>
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
