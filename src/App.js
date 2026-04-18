// src/App.js
import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { SkeletonGrid } from "./components/ui/skeleton";
import "./index.css";
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Education = React.lazy(() => import("./components/Education"));
const Certifications = React.lazy(() => import("./components/Certifications"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Shreyash Mishra - Software Engineer</title>
        <meta
          name="description"
          content="Shreyash Mishra — Java Full Stack Engineer, building enterprise-grade applications using Java, Spring Boot, React, PostgreSQL, Redis, and AWS. AWS Certified Solutions Architect."
        />
        <meta
          name="keywords"
          content="Shreyash, Shreyash, shreyash.in, Shreyash Mishra, Shreyash portfolio, Shreyash portfolio, Software Engineer, Shreyash Mishra, Java Full Stack Engineer, Spring Boot Developer, Java Developer India, React Developer, AWS Certified Solutions Architect, Microservices Architecture, REST API Design, PostgreSQL, Redis Caching, Spring Security, JUnit Mockito, Novas Arc, Software Engineer Noida, Spring AI"
        />
        <meta name="author" content="Shreyash Mishra" />
        <meta
          property="og:title"
          content="Shreyash Mishra — Java Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Java Full Stack Engineer specializing in Spring Boot, React, PostgreSQL & AWS. Explore projects, skills & certifications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shreyashsri.in" />
        <meta property="og:site_name" content="Shreyash Mishra Portfolio" />
        <meta property="og:locale" content="en_US" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shreyashsri_in" />
        <meta name="twitter:creator" content="@shreyashsri_in" /> */}
        <meta
          name="twitter:title"
          content="Shreyash Mishra — Java Full Stack Engineer"
        />
        {/* <meta
          name="twitter:description"
          content="Java Full Stack Developer with 3.5+ years in Spring Boot, React, PostgreSQL & AWS. View my portfolio."
        /> */}
        {/* <link rel="canonical" href="https://shreyashsri.in" /> */}
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shreyash Mishra",
            "url": "https://shreyashsri.in",
            "sameAs": [
              "https://github.com/shre0079",
              "https://www.linkedin.com/in/smish9"
            ],
            "jobTitle": "Software Engineer | Java Full Stack Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": null
            },
            "knowsAbout": ["Java", "Spring Boot", "React", "PostgreSQL", "Redis", "AWS", "Microservices", "REST API", "Docker", "CI/CD"],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Bennett University"
            },
            "description": "Java Full Stack Engineer delivering enterprise-grade applications using Java, Spring Boot, React, and PostgreSQL. AWS Certified Engineer.",
            "email": "shreyashshree0079@gmail.com"
          }
        `}</script>
        {/* Structured Data: WebSite (for sitelinks search box) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Shreyash Mishra Portfolio",
            "url": "https://shreyashsri.in",
            "description": "Portfolio of Shreyash Mishra — Java Full Stack Engineer specializing in Spring Boot, React, DevOps and AWS."
          }
        `}</script>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }
        >
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
