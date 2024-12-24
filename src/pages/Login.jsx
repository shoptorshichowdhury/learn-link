import { Link, useLocation, useNavigate } from "react-router-dom";
import background from "../assets/addServiceBackground.svg";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Login Succesful!");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err?.code);
      toast.error(err?.code);
    }

    // console.log(email, password);
  };

  const handleLoginGoogle = async () => {
    try {
      await googleSignIn();
      toast.success("Succesfully Login!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="py-12 bg-secondary/10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg">
        {/* form */}
        <div className="card w-full h-full px-8 py-4 lg:px-16 lg:py-16 bg-white rounded-none">
          <div>
            <h3 className="text-xl md:text-3xl font-poppins my-5 font-medium">
              Login Your Account
            </h3>
            <div className="divider"></div>
          </div>
          <form onSubmit={handleLogin} className="card-body p-0">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
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
              <p className="text-xs underline pt-2">Forget Password?</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-secondary text-primary text-sm md:text-base hover:bg-transparent border border-transparent hover:border-primary">
                Login
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p>
              New in this site?{" "}
              <Link to="/registration" className="text-primary underline">
                Register
              </Link>{" "}
              now.
            </p>
          </div>
          <div className="divider">OR</div>
          <div>
            <button
              onClick={handleLoginGoogle}
              className="btn w-full text-base"
            >
              <FcGoogle className="text-xl" /> Login with Google
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

export default Login;
