import { motion } from "motion/react";

const CategoryCard = ({ icon, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-center gap-3 bg-secondary/20 p-3 rounded-full"
    >
      <div className="p-3 bg-accent/50 rounded-full">
        <img src={icon} alt="icon" />
      </div>
      <p className="text-xl font-poppins font-bold text-primary">{title}</p>
    </motion.div>
  );
};

export default CategoryCard;
