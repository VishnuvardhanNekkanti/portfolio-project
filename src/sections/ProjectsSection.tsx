import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Library Management Web Application',
      description: 'Developed an intuitive e-library platform with Spring Boot, enabling users to view, add, and manage books through a clean, responsive UI. Users can browse available books, while librarians can add or delete books from the collection.',
      technologies: ['Spring Boot', 'HTML/CSS', 'Thymeleaf', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80', // Library image
      github: 'https://github.com/VishnuvardhanNekkanti/booksStore.git',
    },
    {
      title: 'Online Voting System',
      description: 'Built a secure online voting platform with Spring Boot, MySQL, and REST APIs, implementing JWT authentication, password encryption, and role-based access. Designed CRUD operations for voters/candidates, result display, and following MVC architecture.',
      technologies: ['Spring Boot', 'MySQL', 'REST API'],
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // Voting image
      github: 'https://github.com/VishnuvardhanNekkanti/onlinevotingsystem.git',
    },
    {
      title: 'Notes App',
      description: 'Developed a MERN-based Notes App with MongoDB, Express.js, React, and Node.js, featuring CRUD functionality and user authentication. Created a responsive React UI with RESTful backend APIs and integrated MongoDB for persistent note storage and scalable file structure.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', // Notes app image
      github: 'https://github.com/VishnuvardhanNekkanti/NoteIt.git',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;