const InstructorCard = ({ image, name, course }) => {
  return (
    <div className="h-[500px] overflow-hidden">
      <div className="card glass h-full overflow-hidden">
        <figure>
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt="instructor image"
          />
        </figure>
        <div className="card-body bg-gradient-to-r from-secondary/30 to-accent/20">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-primary">{name}</h2>
          <p className="text-lg">Course: {course}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
