"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const navItems = ["Home", "Courses", "Branches", "Results", "Faculty", "Contact"];

const stats = [
  { value: "15+", label: "Years" },
  { value: "12", label: "Branches" },
  { value: "94%", label: "First Division" },
];

const reasons = [
  {
    title: "Local Expert Teachers",
    text: "Teachers from trusted Assam institutions with strong SEBA and CBSE classroom experience.",
  },
  {
    title: "Weekly Tests",
    text: "Regular test practice, quick feedback, and parent updates to keep progress visible.",
  },
  {
    title: "Small Batches",
    text: "Focused classrooms with space for individual doubts and personal attention.",
  },
  {
    title: "Parent Updates",
    text: "Attendance alerts, progress reports, and direct communication with counselors.",
  },
];

const courses = [
  { grade: "Class 6", title: "Foundation", fee: "Rs. 1,200 / month" },
  { grade: "Class 7", title: "Foundation Plus", fee: "Rs. 1,300 / month" },
  { grade: "Class 8", title: "Pre-HSLC", fee: "Rs. 1,500 / month" },
  { grade: "Class 9-10", title: "HSLC Focus", fee: "From Rs. 1,800 / month" },
];

const branches = ["Guwahati", "Jorhat", "Dibrugarh", "Silchar"];

const faculty = [
  { initials: "PB", name: "Pranjal Bezbaruah", subject: "Mathematics" },
  { initials: "AD", name: "Ankita Das", subject: "English" },
  { initials: "RK", name: "Rituraj Kalita", subject: "Science" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <header>
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Shiksha Sora home">
            <Image
              className="brand-logo"
              src="/logo.jpeg"
              alt="Shiksha Sora logo"
              width={52}
              height={52}
              priority
            />
            <span>Shiksha Sora</span>
          </a>

          <nav className={menuOpen ? "nav-links show" : "nav-links"}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>

          <a className="btn btn-primary nav-cta" href="#admission">
            Admission Open
          </a>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            Menu
          </button>
        </div>
      </header>

      <main id="home">
        <section className="container hero">
          <div className="hero-copy">
            <span className="badge">Class 6 to 10 | SEBA & CBSE</span>
            <h1>
              Assam&apos;s trusted coaching support for stronger school results
            </h1>
            <p>
              Small batches, weekly tests, parent updates, and focused guidance for students
              from Class 6 to Class 10.
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#admission">
                Book Free Demo Class
              </a>
              <a className="btn btn-outline" href="#branches">
                Find Nearest Branch
              </a>
            </div>

            <div className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Student achievement highlight">
            <div className="hero-score">
              <span>3,800+</span>
              <h2>HSLC Distinctions</h2>
              <p>Built through disciplined practice since 2010.</p>
            </div>
          </div>
        </section>

        <section className="section" id="courses">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Courses</span>
              <h2>Programs for every school stage</h2>
              <p>Foundation learning for juniors and exam-focused support for Classes 9 and 10.</p>
            </div>

            <div className="course-grid">
              {courses.map((course) => (
                <article className="card course-card" key={course.grade}>
                  <span className="badge">{course.grade}</span>
                  <h3>{course.title}</h3>
                  <p>Maths, Science, English, and Social Science with regular doubt clearing.</p>
                  <strong>{course.fee}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Why Choose Us</span>
              <h2>Made for students and parents in Assam</h2>
              <p>Clear routines, practical teaching, and communication that keeps families involved.</p>
            </div>

            <div className="feature-grid">
              {reasons.map((reason) => (
                <article className="card feature-card" key={reason.title}>
                  <div className="feature-icon">{reason.title.slice(0, 1)}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="branches">
          <div className="container split-section">
            <div>
              <span className="eyebrow">Branches</span>
              <h2>Learning centers across Assam</h2>
              <p>
                Choose a nearby center for demo classes, admission support, and batch timing
                details.
              </p>
              <div className="branch-list">
                {branches.map((branch) => (
                  <div className="branch-item" key={branch}>
                    <span>{branch}</span>
                    <a href="#contact">Contact center</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="map-card">
              <strong>12 Branches</strong>
              <span>Open 8 AM to 8 PM</span>
              <p>Guwahati, Jorhat, Dibrugarh, Silchar, Nagaon, Tezpur, and more.</p>
            </div>
          </div>
        </section>

        <section className="section result-section" id="results">
          <div className="container result-panel">
            <div>
              <span className="eyebrow">Results</span>
              <h2>Consistent academic improvement</h2>
              <p>
                Students build confidence through repeated practice, structured revisions, and
                teacher-led feedback.
              </p>
            </div>
            <div className="result-metrics">
              <div>
                <strong>312</strong>
                <span>Distinctions in latest batch</span>
              </div>
              <div>
                <strong>16,500+</strong>
                <span>Students taught</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faculty">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Faculty</span>
              <h2>Teachers who know the syllabus deeply</h2>
              <p>Experienced subject teachers guide students with practical, exam-ready methods.</p>
            </div>

            <div className="faculty-grid">
              {faculty.map((teacher) => (
                <article className="teacher-card" key={teacher.name}>
                  <div className="avatar">{teacher.initials}</div>
                  <h3>{teacher.name}</h3>
                  <p>{teacher.subject}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="admission">
          <div className="container admission-panel">
            <div>
              <span className="eyebrow">Admission</span>
              <h2>Book a free demo class</h2>
              <p>
                Share your details with our admission team and choose the nearest branch for a
                trial class.
              </p>
            </div>

            <form className="admission-form" onSubmit={handleDemoSubmit}>
              <input type="text" placeholder="Student name" aria-label="Student name" />
              <input type="tel" placeholder="Parent mobile" aria-label="Parent mobile" />
              <select aria-label="Select class" defaultValue="">
                <option value="" disabled>
                  Select class
                </option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
              </select>
              <select aria-label="Preferred branch" defaultValue="">
                <option value="" disabled>
                  Preferred branch
                </option>
                <option>Guwahati</option>
                <option>Jorhat</option>
                <option>Dibrugarh</option>
                <option>Silchar</option>
              </select>
              <button className="btn btn-primary" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Shiksha Sora</div>
            <p>Coaching support for Classes 6 to 10 across Assam.</p>
          </div>
          <div>
            <h3>Call</h3>
            <p>0361-2345678</p>
            <p>+91 98745 00001</p>
          </div>
          <div>
            <h3>Timing</h3>
            <p>Mon-Sat: 8 AM - 8 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </footer>
    </>
  );
}
