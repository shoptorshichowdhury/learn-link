import { useContext, useEffect, useState } from "react";
import background from "../assets/addServiceBackground.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const BookService = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const fetchService = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/services/${id}`
      );
      setService(data);
    };
    fetchService();
  }, []);

  const { _id, image, name, price, serviceProvider } = service;

  //handle submit for booking service
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceId = form.serviceId.value;
    const serviceImage = form.image.value;
    const serviceName = form.name.value;
    const provider = {
      email: form.provider_email.value,
      name: form.provider_name.value,
    };
    const user = {
      email: form.user_email.value,
      name: form.user_name.value,
    };
    const bookedDate = startDate;
    const instruction = form.instruction.value;
    const price = parseInt(form.price.value);

    const serviceData = {
      serviceId,
      serviceImage,
      serviceName,
      provider,
      user,
      bookedDate,
      instruction,
      price,
      serviceStatus: "pending",
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/bookedServices`,
        serviceData
      );
      toast.success("Course Purchase Successfull!");
      console.log(data);
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-primary/10">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-no-repeat bg-cover bg-right-bottom"
      >
        <div className="flex flex-col justify-center items-center h-[150px] md:h-[300px] space-y-3 py-3">
          <h3 className="text-2xl md:text-4xl lg:text-7xl text-center font-poppins text-secondary font-medium">
            Purchase Your Course
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
            {/* service id */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course ID</span>
              </label>
              <input
                type="text"
                defaultValue={_id}
                disabled={true}
                name="serviceId"
                className="input input-bordered text-primary font-bold"
                required
              />
            </div>
            {/* service image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Image</span>
              </label>
              <input
                type="url"
                defaultValue={image}
                disabled={true}
                name="image"
                className="input input-bordered text-pretty font-bold"
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
                defaultValue={name}
                disabled={true}
                name="name"
                className="input input-bordered text-pretty font-bold"
                required
              />
            </div>
            {/* provider email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Provider Email</span>
              </label>
              <input
                type="email"
                defaultValue={serviceProvider?.email}
                disabled={true}
                name="provider_email"
                className="input input-bordered text-pretty font-bold"
                required
              />
            </div>
            {/* provider name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Provider Name</span>
              </label>
              <input
                type="text"
                defaultValue={serviceProvider?.name}
                disabled={true}
                name="provider_name"
                className="input input-bordered text-pretty font-bold"
                required
              />
            </div>
            {/* current user email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Current User Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled={true}
                name="user_email"
                className="input input-bordered text-pretty font-bold"
                required
              />
            </div>
            {/* current user name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Current User Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="user_name"
                className="input input-bordered text-primary font-bold"
                disabled={true}
                required
              />
            </div>
            {/* date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Taking Date</span>
              </label>
              <DatePicker
                className="input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* special instruction */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Special Instruction</span>
              </label>
              <input
                type="text"
                placeholder="special instruction"
                name="instruction"
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
                defaultValue={price}
                disabled={true}
                name="price"
                className="input input-bordered text-primary font-bold"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-secondary text-primary text-sm md:text-base hover:bg-transparent border border-transparent hover:border-primary">
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
