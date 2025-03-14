import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Home, Briefcase, Code2, FileText, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', Icon: Home, label: 'Home' },
    { id: 'projects', Icon: Briefcase, label: 'Projects' },
    { id: 'skills', Icon: Code2, label: 'Skills' },
    { id: 'resume', Icon: FileText, label: 'Resume' },
    { id: 'contact', Icon: Mail, label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            VVN
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <Navbar items={navItems} activeSection={activeSection} />

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;