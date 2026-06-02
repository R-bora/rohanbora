"use client"; // Required for DOM manipulation and Hooks in Next.js

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // State for Typewriter
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Refs for DOM nodes
  const sliderRef = useRef(null);
  const observerRef = useRef([]);

  // Typewriter Effect Logic
  useEffect(() => {
    const textLine1 = "Hi, I'm Rohan.";
    const textLine2 = "A Creative Designer & Developer.";
    const speed = 75;
    let i = 0, j = 0;

    const typeLine2 = () => {
      if (j < textLine2.length) {
        setLine2((prev) => prev + textLine2.charAt(j));
        j++;
        setTimeout(typeLine2, speed);
      } else {
        setShowCursor(false);
      }
    };

    const typeLine1 = () => {
      if (i < textLine1.length) {
        setLine1((prev) => prev + textLine1.charAt(i));
        i++;
        setTimeout(typeLine1, speed);
      } else if (j === 0) {
        setTimeout(typeLine2, 300);
      }
    };

    typeLine1();
  }, []);

  // Intersection Observer Logic for Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Function to gather refs for the observer
  const addToRefs = (el) => {
    if (el && !observerRef.current.includes(el)) {
      observerRef.current.push(el);
    }
  };

  // Carousel Scrolling Logic
  const scrollAmount = 400;
  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="left">
            <Link href="#">
              {/* Ensure logo.jpeg is in your public/ folder */}
              <img
                src="/logo.jpeg"
                alt="Rohan's Logo"
                className="nav-logo"
              />
            </Link>
          </div>
          <div className="right">
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Me</Link></li>
              <li><Link href="#projects">My Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <div className="hero-container fade-in-up" ref={addToRefs}>
            <div className="hero-text">
              <p className="subheading">Welcome to my space</p>
              <h2>
                <span>{line1}</span>
                <br />
                <span>{line2}</span>
                {showCursor && <span className="cursor">|</span>}
              </h2>
              <p className="description">
                I design and build beautiful, functional digital experiences. I
                specialize in turning complex ideas into clean, user-friendly
                code. Explore my portfolio to see what I've been working on
                recently!
              </p>
              <Link href="#" className="hero-btn">
                Download CV
              </Link>
            </div>
            <div className="hero-image-area">
              <div className="hero-image-placeholder"></div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-images-wrapper fade-in-right" ref={addToRefs}>
              <div className="about-image-grid">
                <div className="img-slot"></div>
                <div className="img-slot"></div>
                <div className="img-slot"></div>
                <div className="img-slot"></div>
              </div>
            </div>
            <div className="about-text fade-in-left" ref={addToRefs}>
              <p className="subheading">Get to know me</p>
              <h2>About Me</h2>
              <p className="description">
                I am a passionate creative developer with a strong focus on
                building user-centric digital experiences. I love blending
                creativity with technical problem-solving to build websites that
                don't just look great, but perform flawlessly.
              </p>
              <p className="description">
                I am dedicated to continuous learning and always striving to
                push the boundaries of what is possible on the web.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section">
          <div className="projects-header fade-in-up" ref={addToRefs}>
            <p className="subheading">Take a look at</p>
            <h2>My Latest Work</h2>
          </div>

          <div className="carousel-container pop-in" ref={addToRefs}>
            <button
              className="scroll-arrow left-arrow"
              onClick={handleScrollLeft}
            >
              &#10094;
            </button>
            <div className="projects-wrapper" ref={sliderRef}>
              {/* Project Card 1 */}
              <div className="project-card">
                <div className="project-img"></div>
                <div className="project-info">
                  <h3>E-Commerce App</h3>
                  <p>
                    A full-stack shopping application featuring real-time updates
                    and secure checkout flows.
                  </p>
                  <Link href="#" className="project-link">
                    View Project &rarr;
                  </Link>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="project-card">
                <div className="project-img"></div>
                <div className="project-info">
                  <h3>Weather Dashboard</h3>
                  <p>
                    Dynamic forecasting tool using real-time API data and
                    animated weather backgrounds.
                  </p>
                  <Link href="#" className="project-link">
                    View Project &rarr;
                  </Link>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="project-card">
                <div className="project-img"></div>
                <div className="project-info">
                  <h3>Task Manager</h3>
                  <p>
                    A productivity app designed for daily goal tracking with
                    drag-and-drop features.
                  </p>
                  <Link href="#" className="project-link">
                    View Project &rarr;
                  </Link>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="project-card">
                <div className="project-img"></div>
                <div className="project-info">
                  <h3>Agency Web</h3>
                  <p>
                    A modern creative agency template featuring GSAP animations
                    and clean typography.
                  </p>
                  <Link href="#" className="project-link">
                    View Project &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="scroll-arrow right-arrow"
              onClick={handleScrollRight}
            >
              &#10095;
            </button>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="contact-header fade-in-up" ref={addToRefs}>
            <p className="subheading">Let's connect</p>
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-container fade-in-up" ref={addToRefs}>
            <form className="contact-form">
              <div className="input-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Write your message here..." required></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}