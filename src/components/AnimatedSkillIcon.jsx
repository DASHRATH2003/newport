import { motion } from 'framer-motion';

function AnimatedSkillIcon({ icon, name, delay = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1 }}
    >
      <img src={icon} alt={name} className="w-16 h-16 mb-2" />
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.div>
  );
}

export default AnimatedSkillIcon;
