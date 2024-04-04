import { Link } from "react-router-dom";
import signupLogo from "../../assets/signup.png";
import useSignup from "../../hooks/useSignup";
import { useState } from "react";
import "animate.css";
function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="h-[90vh] w-[500px] bg-[#F4F5EB] rounded-lg animate__animated animate__slideInRight">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-[150px] h-[100px]">
          <img src={signupLogo} alt="logo" className="" />
        </div>
        <h1 className="text-black text-2xl font-semibold">Create a Yahoo ID</h1>
        <div className="text-black w-full  mb-5 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex w-[60%] flex-col justify-center text-black text-left gap-6  "
          >
            <div className="flex flex-col">
              <label>Full name</label>
              <input
                type="text"
                className="bg-white p-1"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </div>
            <div className="flex flex-col">
              <label>Yahoo Id</label>
              <input
                type="text"
                className="bg-white p-1"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="bg-white p-1"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>

            <div className="flex flex-col">
              <label>Confirm password</label>
              <input
                type="password"
                className="bg-white p-1"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>
            {/**Gender checkbox */}
            <div className="flex ">
              <div className="form-control">
                <label
                  className={`label flex justify-center gap-2 cursor-pointer ${
                    inputs.gender === "male"
                  } ? "selected: "`}
                >
                  <span>Male</span>
                  <input
                    type="checkbox"
                    className="checkbox border-slate-900"
                    checked={inputs.gender === "male"}
                    onChange={() => handleCheckBoxChange("male")}
                  />
                </label>
              </div>

              <div className="form-control">
                <label
                  className={`label flex justify-center gap-2 cursor-pointer ${
                    inputs.gender === "female"
                  } ? "selected: "`}
                >
                  <span>Female</span>
                  <input
                    type="checkbox"
                    className="checkbox border-slate-900"
                    checked={inputs.gender === "female"}
                    onChange={() => handleCheckBoxChange("female")}
                  />
                </label>
              </div>
            </div>

            <Link to="/login">
              <p className="text-blue-500 cursor-pointer text-center ">
                Already have an account? Login now!
              </p>
            </Link>

            <button
              className="mt-5 bg-[#F4F7ED] text-black rounded-lg pl-2 pr-2 p-1 border border-purple-500"
              disabled={loading}
            >
              {!loading ? "Sign up" : <span className="loading loading-spinner" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
