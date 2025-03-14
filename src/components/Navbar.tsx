import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  Icon: React.ComponentType<any>;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
  activeSection: string;
}

const Navbar = ({ items, activeSection }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex gap-6 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full">
        {items.map(({ id, Icon, label }) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
            className="relative group cursor-pointer"
          >
            <div
              className={`p-3 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-purple-500 text-white'
                  : 'hover:bg-white/20 text-gray-400'
              }`}
            >
              <Icon size={20} />
              <span className="fixed left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-lg text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;