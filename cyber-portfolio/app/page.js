// File: app/page.js
'use client'; // Required for client-side interactivity (theme toggle)

import { useState, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode !== null) {
      setDarkMode(savedMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Projects data
  const projects = [
    {
      title: "Network Reconnaissance & Vulnerability Scanning",
      description: "Used Nmap and Nessus to scan networks and identify vulnerabilities in virtual labs.",
      technologies: ["Nmap", "Nessus", "Bash"],
      link: "#"
    },
    // Add more projects as needed
  ];

  // Lab challenges data
  const labChallenges = [
    {
      title: "HTB: Blue",
      problem: "Exploit EternalBlue vulnerability on a Windows machine.",
      approach: "Used Nmap for initial scanning, identified vulnerable SMB service, then exploited using Metasploit.",
      tools: ["Nmap", "Metasploit", "Windows"],
      lesson: "Gained experience in vulnerability scanning and exploitation of known vulnerabilities.",
      screenshot: "/htb-blue.png"
    },
    // Add more challenges as needed
  ];

  // Blog posts data
  const blogPosts = [
    {
      title: "Understanding EternalBlue Exploit",
      excerpt: "A deep dive into the EternalBlue vulnerability and how to defend against it.",
      date: "2023-10-15",
      slug: "eternalblue-exploit",
      tags: ["Exploit", "Windows", "Security"]
    },
    {
      title: "Blue Team Fundamentals",
      excerpt: "Essential concepts every aspiring blue teamer should know.",
      date: "2023-09-22",
      slug: "blue-team-fundamentals",
      tags: ["Blue Team", "Defense", "Security"]
    },
    // Add more blog posts as needed
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* SEO Meta Tags */}
      <Head>
        <title>Brian Murunga | Cybersecurity Professional</title>
        <meta name="description" content="Portfolio of Brian Murunga - Security Analyst and Blue Team Enthusiast" />
        <meta name="keywords" content="cybersecurity, portfolio, security analyst, blue team, CTF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brian Murunga | Cybersecurity Professional" />
        <meta property="og:description" content="Portfolio of Brian Murunga - Security Analyst and Blue Team Enthusiast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Analytics */}
      <Script 
        strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      {/* Navigation */}
      <nav className={`w-full py-4 px-6 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Brian Murunga</span>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <div className="hidden md:flex space-x-6">
            <a href="#resume" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Resume</a>
            <a href="#projects" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Projects</a>
            <a href="#labs" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Labs</a>
            <a href="#blog" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Blog</a>
            <a href="#contact" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center w-full">
        {/* Hero Section */}
        <section className={`w-full py-20 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative mx-auto w-40 h-40 mb-6">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                fill
                className="rounded-full border-4 object-cover"
                style={{ borderColor: darkMode ? '#3B82F6' : '#BFDBFE' }}
                priority
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Brian Murunga</h1>
            <p className={`text-xl mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Cybersecurity Professional | Security Analyst | Blue Team Enthusiast
            </p>
            <p className={`max-w-2xl mx-auto text-lg italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "Proactively defending systems through insight, analysis, and applied research."
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a 
                href="#resume" 
                className={`px-6 py-3 rounded-lg font-medium transition ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-lg font-medium transition ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Resume Section - Keep your existing resume section but add dark mode classes */}

        {/* Projects Section - Keep your existing projects section but add dark mode classes */}

        {/* Lab Challenges Section - Keep your existing labs section but add dark mode classes */}

        {/* Blog Section */}
        <section 
          id="blog" 
          className={`w-full max-w-4xl py-16 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Latest Writeups</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className="p-6">
                  <div className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {post.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className={`inline-flex items-center font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="/blog" 
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              View All Blog Posts
            </a>
          </div>
        </section>

        {/* Contact Section - Keep your existing contact section but add dark mode classes */}
      </main>

      {/* Footer */}
      <footer className={`w-full py-8 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/brianmurunga" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/brian-murunga-a0467a263/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Brian Murunga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}