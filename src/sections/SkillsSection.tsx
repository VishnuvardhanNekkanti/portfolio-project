import { motion } from 'framer-motion';
import { FileCode2, Database, Coffee, Boxes, Braces, Terminal, Github as Git } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'Java', Icon: Coffee },
    { name: 'Spring Boot', Icon: Boxes },
    { name: 'React.js', Icon: Braces },
    { name: 'JavaScript', Icon: FileCode2 },
    { name: 'Python', Icon: Terminal },
    { name: 'MySQL', Icon: Database },
    { name: 'Git', Icon: Git }
  ];

  return (
    <section id="skills" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-purple-500/10 transition-all"
            >
              <skill.Icon className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;