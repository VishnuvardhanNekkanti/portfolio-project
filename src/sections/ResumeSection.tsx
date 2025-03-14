import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Download,
  Award,
  BookOpen,
  School
} from 'lucide-react';

const ResumeSection = () => {
  const education = [
    {
      degree: 'B.Tech',
      institution: 'KL University, Hyderabad',
      period: '2022 - 2026',
      Icon: GraduationCap
    },
    {
      degree: 'Intermediate (8.9 CGPA)',
      institution: 'Sri Chaitanya Jr College, Hyderabad',
      period: '2020 - 2022',
      Icon: BookOpen
    },
    {
      degree: '10th Class',
      institution: 'Matrusri DAV Public School, Hyderabad',
      period: '2020',
      Icon: School
    },
  ];

  const profiles = [
    { platform: 'LeetCode', username: '@vishnuvardhan', Icon: Code2 },
    { platform: 'CodeChef', username: '@vishnu123', Icon: Code2 },
    { platform: 'CodeForces', username: '@vvn_code', Icon: Code2 },
  ];

  return (
    <section id="resume" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Resume</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <motion.a
              href="/path-to-your-resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
              <span className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75" />
            </motion.a>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 font-['Poppins'] flex items-center gap-2">
              <Award className="text-purple-500" />
              Education
            </h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-purple-500"></div>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8 relative"
                >
                  <div className="absolute -left-[31px] top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#0a192f] flex items-center justify-center">
                    <edu.Icon className="w-3 h-3 text-white" />
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-purple-500 text-sm">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 font-['Poppins'] flex items-center gap-2">
              <Code2 className="text-purple-500" />
              Coding Profiles
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-xl text-center group hover:bg-purple-500/10 transition-colors"
                >
                  <profile.Icon className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <h4 className="font-semibold text-purple-500">{profile.platform}</h4>
                  <p className="text-gray-400">{profile.username}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;