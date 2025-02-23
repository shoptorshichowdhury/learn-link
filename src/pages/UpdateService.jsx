import { useParams } from "react-router-dom";
import background from "../assets/addServiceBackground.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import PageTitle from "../components/shared/PageTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateService = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [service, setService] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchService = async () => {
      const { data } = await axiosSecure.get(`/services/${id}`);
      setService(data);
    };
    fetchService();
  }, [id]);

  const { image, name, price, area, description, serviceProvider } = service;

  //handle update service data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const area = form.area.value;
    const description = form.description.value;

    const serviceData = {
      image,
      name,
      price,
      area,
      description,
    };

    try {
      axios.put(
        `${import.meta.env.VITE_API_URL}/update-service/${id}`,
        serviceData
      );
      toast.success("Course Data update Successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-primary/10">
      <PageTitle title={`Learn Link | Update Service`} />
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-no-repeat bg-cover bg-right-bottom"
      >
        <div className="flex flex-col justify-center items-center h-[150px] md:h-[300px] space-y-3 py-3">
          <h3 className="text-2xl md:text-4xl lg:text-7xl text-center font-poppins text-secondary font-medium">
            Update Your Course
          </h3>
          <p className="text-white font-light text-xs md:text-base w-3/5 mx-auto text-center">
            Share your knowledge with the world! Add your course to our platform
            and help learners achieve their goals while expanding your reach as
            an educator.
          </p>
        </div>
      </div>

      {/* form section */}
      <div className="w-11/12 mx-auto py-12 lg:py-20">
        <div className="card w-full h-full border border-primary/40 px-8 py-4 lg:py-8 shadow-xl">
          <div>
            <h3 className="text-3xl font-poppins my-5 font-medium">
              Course Details:
            </h3>
            <div className="divider"></div>
          </div>
          <form onSubmit={handleSubmit} className="card-body p-0">
            {/* service image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Image</span>
              </label>
              <input
                type="url"
                defaultValue={image}
                placeholder="course image URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            {/* service name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name</span>
              </label>
              <input
                type="text"
                placeholder="course name"
                defaultValue={name}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* service price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Price</span>
              </label>
              <input
                type="number"
                placeholder="course price"
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            {/* service area */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course/Service Area</span>
              </label>
              <input
                type="text"
                placeholder="service area"
                defaultValue={area}
                name="area"
                className="input input-bordered"
                required
              />
            </div>
            {/* service description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="description"
                defaultValue={description}
                name="description"
                required
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-secondary text-primary text-sm md:text-base hover:bg-transparent border border-transparent hover:border-primary">
                Update Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
