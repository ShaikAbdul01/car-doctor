import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./Shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24 md:gap-36 lg:gap-56">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <form onSubmit={handleSingUp} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-error text-white"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>

            <p className="text-center ">
              Have an account?{" "}
              <Link to="/login" className="text-orange-500 font-bold">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="w-[460px] h-[500px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
