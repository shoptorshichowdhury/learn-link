import { Link, useNavigate } from "react-router-dom";
import background from "../assets/addServiceBackground.svg";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const { setUser, createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //clean error
    setError({});

    // password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      return setError({
        passwordError:
          "Please give valid password with at least one capital, one small, one special character and 6 digits!",
      });
    }

    //Register (email & password)
    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      toast.success("Registration Succesful!");
      navigate("/");
    } catch (err) {
      toast.error(err?.code);
    }

    // console.log(name, photo, email, password);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("SignUp Succesful!");
    } catch (err) {
      console.log(err.message);
      toast.error(err?.code);
    }
  };

  return (
    <div className="py-12 bg-secondary/10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg">
        {/* form */}
        <div className="card w-full h-full px-8 py-4 lg:px-16 lg:py-16 rounded-none bg-secondary/10">
          <div>
            <h3 className="text-xl md:text-3xl font-poppins my-5 font-medium">
              Register a New Account
            </h3>
            <div className="divider"></div>
          </div>
          <form onSubmit={handleRegister} className="card-body p-0">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="url"
                placeholder="Your Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input input-bordered"
                required
              />
              {error?.passwordError && (
                <p className="text-sm font-bold text-red-500">
                  {error?.passwordError}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-secondary text-primary text-sm md:text-base hover:bg-transparent border border-transparent hover:border-primary">
                Register
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-primary underline">
                Login
              </Link>{" "}
              now.
            </p>
          </div>
          <div className="divider">OR</div>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full text-base"
            >
              <FcGoogle className="text-lg md:text-xl" /> Register with Google
            </button>
          </div>
        </div>
        {/* image */}
        <div className="w-full h-full shadow-lg hidden md:block">
          <img className="w-full h-full object-cover" src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
