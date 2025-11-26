"use client";

import Link from "next/link";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        color: "grey",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        {/* About */}
        <div style={{ flex: "1 1 250px" }}>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#FC6A03] font-extrabold text-2xl tracking-wide">
              VOLCANO
            </span>
          </Link>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#000",
              marginTop: "20px",
            }}
          >
            Bringing people together for unforgettable moments by the sea. Join
            our community and experience the joy of beach life.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link href="/" style={{ color: "#000", textDecoration: "none" }}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
            Contact Us
          </h3>
          <p className="text-black">
            Email:{" "}
            <a
              href="mailto:adeyemim70@gmail.com"
              style={{ color: "#000", textDecoration: "none" }}
            >
              adeyemim70@gmail.com
            </a>
          </p>

          <p className="text-black">
            Phone:{" "}
            <a
              href="tel:+2348164777998"
              style={{ color: "#000", textDecoration: "none" }}
            >
              +234 816 477 7998
            </a>
          </p>

          <p className="text-black">
            WhatsApp:{" "}
            <a
              href="https://wa.me/2348164777998"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000", textDecoration: "none" }}
            >
              Chat with us
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
            Follow Us
          </h3>

          <div style={{ display: "flex", gap: "15px", fontSize: "1.5rem" }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000" }}
              aria-label="Instagram"
            >
              <InstagramIcon size={28} />
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "5px 0 0",
          fontSize: "0.9rem",
          borderTop: "1px solid #999",
          marginTop: "16px",
        }}
      >
        &copy; {new Date().getFullYear()} Volcano Beach Hangout. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
