'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head';

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

  // Resume data
  const resume = {
    name: "Brian Murunga",
    title: "Security Analyst | Information Security | Digital Forensics",
    tagline: "Proactively defending systems through insight, analysis, and applied research",
    email: "murunga_brian@yahoo.com",
    phone: "+254 701 *** ",
    education: [
      {
        degree: "BSc. Information Security and Forensics",
        institution: "KCA University",
        period: "2021 - 2025",
        achievements: [
          "Specialized in information security and digital forensics",
          "Relevant coursework: Ethical Hacking, Cryptography, Network Defense, Mobile and Wireless Forensics"
        ]
      }
    ],
    experience: [
      {
        position: "ICT Intern",
        company: "LVNWWDA",
        period: "April 2025 - July 2025",
        responsibilities: [
          "Conducted vulnerability assessments on company infrastructure",
          "Assisted in implementing security policies and procedures",
          "Monitored network traffic for suspicious activities"
        ]
      },
      {
      position: "Cybersecurity Trainee",
      company: "H4K-IT Bootcamp",
      period: "June 2025 - Aug 2025", // Example dates - update with yours
      responsibilities: [
        "Completed intensive cybersecurity training program with focus on:",
        "- Governance, Risk and Compliance (GRC) frameworks and implementation",
        "- Data privacy regulations (GDPR, CCPA) and compliance measures",
        "- Security Operations Center (SOC) monitoring and incident response procedures",
        "- Regular Capture The Flag (CTF) challenges covering network security, web app security, and forensics",
        "Developed practical skills through hands-on labs in:",
        "- Vulnerability assessment and penetration testing",
        "- Security tool configuration (SIEM, IDS/IPS)",
        "- Threat analysis and mitigation strategies"
      ]
    }
  
    ],
    certifications: [
      "Security Analyst (In Progress - Expected 2024)",
      "TryHackMe Blue Team Pathway (In Progress)",
      "IBM (Cybersecurity Professional Certificate) (In Progress)"
    ],
    skills: {
      technical: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "Splunk"],
      programming: ["Bash", "Python", "PowerShell"],
      os: ["Kali Linux", "Windows Server", "Ubuntu"]
    }
  };

  // Projects data
  const projects = [
    {
      title: "Network Vulnerability Assessment",
      description: "Conducted comprehensive vulnerability scanning using Nmap and Nessus on a corporate network, identifying critical security flaws.",
      technologies: ["Nmap", "Nessus", "Bash"],
      outcomes: [
        "Identified 15+ critical vulnerabilities",
        "Provided remediation recommendations",
        "Reduced attack surface by 40%"
      ]
    },
    {
      title: "SIEM Implementation & Monitoring",
      description: "Configured Splunk for log aggregation and correlation, creating custom alerts for suspicious activities.",
      technologies: ["Splunk", "Wireshark", "Regex"],
      outcomes: [
        "Reduced incident detection time from hours to minutes",
        "Created 10+ custom correlation rules",
        "Improved threat visibility across the network"
      ]
    },
    {
      title: "Active Directory Security Hardening",
      description: "Implemented security controls and monitoring for Windows Active Directory environment.",
      technologies: ["Windows Server", "PowerShell", "Group Policy"],
      outcomes: [
        "Enforced least privilege access",
        "Implemented account lockout policies",
        "Set up monitoring for suspicious AD activities"
      ]
    }
  ];

  // Lab challenges data
  const labChallenges = [
    {
      title: "HTB: Blue (HackTheBox)",
      problem: "Exploit EternalBlue vulnerability on a Windows 7 machine.",
      approach: [
        "Performed initial reconnaissance with Nmap",
        "Identified vulnerable SMB service (MS17-010)",
        "Used Metasploit to exploit the vulnerability",
        "Gained SYSTEM level access"
      ],
      tools: ["Nmap", "Metasploit", "Windows Exploit Suggester"],
      screenshot: "/htb.jpeg",
      lessons: [
        "Importance of timely patching",
        "Understanding exploit mechanisms",
        "Post-exploitation enumeration techniques"
      ]
    },
    {
      title: "THM: Jr. Penetration Tester (TryHackMe)",
      problem: "Complete a series of challenges covering basic penetration testing concepts.",
      approach: [
        "Network scanning and enumeration",
        "Web application testing",
        "Password cracking",
        "Privilege escalation"
      ],
      tools: ["Nmap", "Burp Suite", "Hydra", "LinPEAS"],
      screenshot: "/tryhackme_logo.png",
      lessons: [
        "Fundamentals of penetration testing methodology",
        "Importance of thorough enumeration",
        "Various privilege escalation vectors"
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* SEO Meta Tags */}
      <Head>
        <title>{resume.name} | {resume.title}</title>
        <meta name="description" content={`Professional portfolio of ${resume.name} - ${resume.title}. ${resume.tagline}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className={`w-full py-4 px-6 fixed top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">{resume.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-500">Home</a>
              <a href="#resume" className="hover:text-blue-500">Resume</a>
              <a href="#projects" className="hover:text-blue-500">Projects</a>
              <a href="#labs" className="hover:text-blue-500">Labs</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className={`w-full py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
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
            <h1 className="text-4xl font-bold mb-2">{resume.name}</h1>
            <p className={`text-xl mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {resume.title}
            </p>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "{resume.tagline}"
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a 
                href="#resume" 
                className={`px-6 py-3 rounded-lg font-medium transition ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                View My Resume
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

        {/* Resume Section */}
        <section id="resume" className={`w-full py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Resume</h2>
            
            {/* Resume Download */}
            <div className="text-center mb-12">
              <a 
                href="/resume.pdf" 
                download={`${resume.name.replace(' ', '_')}_Resume.pdf`}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                Download Full Resume (PDF)
              </a>
            </div>
            
            {/* Education */}
            <div className="mb-12">
              <h3 className={`text-2xl font-semibold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                🎓 Education
              </h3>
              {resume.education.map((edu, index) => (
                <div key={index} className={`mb-6 pl-4 border-l-4 ${darkMode ? 'border-blue-600' : 'border-blue-400'}`}>
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.institution} | {edu.period}
                  </p>
                  <ul className="mt-3 list-disc ml-5 space-y-1">
                    {edu.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Experience */}
            <div className="mb-12">
              <h3 className={`text-2xl font-semibold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                💼 Professional Experience
              </h3>
              {resume.experience.map((exp, index) => (
                <div key={index} className={`mb-6 pl-4 border-l-4 ${darkMode ? 'border-blue-600' : 'border-blue-400'}`}>
                  <h4 className="text-xl font-medium">{exp.position}</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="mt-3 list-disc ml-5 space-y-1">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mb-12">
              <h3 className={`text-2xl font-semibold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                📜 Certifications
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                {resume.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            
            {/* Skills */}
            <div>
              <h3 className={`text-2xl font-semibold mb-6 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                🛠️ Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Security Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.technical.map((skill, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.programming.map((skill, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Operating Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.os.map((skill, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`w-full py-16 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}
                >
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Key Outcomes:</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Challenges Section */}
        <section id="labs" className={`w-full py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Lab Challenges</h2>
            
            <div className="space-y-12">
              {labChallenges.map((lab, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}
                >
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {lab.title}
                    </h3>
                    
                    {lab.screenshot && (
                      <div className="mb-6 rounded-lg overflow-hidden border">
                        <Image
                          src={lab.screenshot}
                          alt={`Screenshot of ${lab.title}`}
                          width={800}
                          height={450}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Problem Statement</h4>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{lab.problem}</p>
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Approach</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {lab.approach.map((step, i) => (
                            <li key={i} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.tools.map((tool, i) => (
                            <span 
                              key={i} 
                              className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Key Lessons</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {lab.lessons.map((lesson, i) => (
                            <li key={i} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`w-full py-16 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className={`mr-3 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>📧</span>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</p>
                      <a 
                        href={`mailto:${resume.email}`} 
                        className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        {resume.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-3 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>📱</span>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</p>
                      <a 
                        href={`tel:${resume.phone.replace(/\s+/g, '')}`} 
                        className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        {resume.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-3 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>🔗</span>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/brian-murunga-a0467a263/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        linkedin.com/in/brian-murunga
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-3 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>💻</span>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</p>
                      <a 
                        href="https://github.com/brianmurunga" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        github.com/brianmurunga
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className={`px-6 py-3 rounded-lg font-medium transition ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`w-full py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} {resume.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}