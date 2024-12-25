const CategoryCard = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3 bg-secondary/20 p-3 rounded-full">
      <div className="p-3 bg-accent/50 rounded-full">
        <img src={icon} alt="icon" />
      </div>
      <p className="text-xl font-poppins font-bold text-primary">{title}</p>
    </div>
  );
};

export default CategoryCard;
