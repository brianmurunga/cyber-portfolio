// File: app/page.js

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="w-full py-16 text-center bg-white">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={140}
          height={140}
          className="rounded-full mx-auto mb-4 border shadow"
        />
        <h1 className="text-4xl font-bold">Your Full Name</h1>
        <p className="mt-2 text-lg italic text-gray-600">
          "Proactively defending systems through insight, analysis, and applied research."
        </p>
        <div className="mt-6 flex gap-6 justify-center text-blue-600 font-medium">
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#labs" className="hover:underline">Lab Challenges</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="w-full max-w-4xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <div>
          <h3 className="text-xl font-semibold">🎓 Academic Background</h3>
          <p>BSc. Information Security and Forensics – [KCA University ]</p>

          <h3 className="text-xl font-semibold mt-4">💼 Work Experience</h3>
          <p>ICT Intern – [Nairobi, Kenya]</p>

          <h3 className="text-xl font-semibold mt-4">📜 Certifications</h3>
          <ul className="list-disc ml-5">
            <li>Security Analyst(in progress)</li>
            <li>TryHackMe Blue Team Pathway</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Skills</h3>
          <p>Tools: Nmap, Wireshark, Metasploit, Burp Suite<br />
             Scripting: Bash, Python<br />
             OS: Kali Linux, Windows Server<br />
             Protocols: TCP/IP, DNS, HTTP/HTTPS</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">🔍 Network Reconnaissance & Vulnerability Scanning</h3>
            <p>Used Nmap and Nessus to scan networks and identify vulnerabilities in virtual labs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">📊 SIEM Log Analysis & Threat Detection</h3>
            <p>Used Splunk and Wireshark to simulate threat detection through log correlation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🧩 TryHackMe Blue Team Pathway</h3>
            <p>Documented challenges and progress on the Blue Team pathway including threat hunting tasks.</p>
          </div>
        </div>
      </section>

      {/* Lab Challenges Section */}
      <section id="labs" className="w-full max-w-4xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Lab Challenges</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">HTB: Blue</h3>
            <p><strong>Problem:</strong> Exploit EternalBlue vulnerability.<br />
               <strong>Approach:</strong> Used Nmap, Metasploit.<br />
               <strong>Lesson:</strong> Gained experience in scanning and exploitation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">THM: Intro to Pentesting</h3>
            <p><strong>Problem:</strong> Perform initial reconnaissance.<br />
               <strong>Tools:</strong> Nmap, Hydra.<br />
               <strong>Lesson:</strong> Brute force login and service enumeration basics.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>You can reach me through the following:</p>
        <ul className="mt-4 list-disc ml-6">
          <li>Email: your.email@example.com</li>
          <li>LinkedIn: linkedin.com/in/brian-murunga-a0467a263/</li>
          <li>GitHub: github.com/brianmurunga</li>
        </ul>
      </section>

    </main>
  );
}
