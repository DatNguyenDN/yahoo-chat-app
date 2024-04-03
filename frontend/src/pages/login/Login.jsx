import logo from "../../assets/yahooOffline.png";
import footer from "../../assets/footer.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="h-80vh w-700px bg-[#F4F5EB] rounded-lg">
      {/**Topbar */}
      <div className="w-full p-3 h-[30px] bg-purple-500 rounded-lg flex justify-center items-center text-white gap-1">
        <h2>😃</h2>
        <h2>Yahoo! Messenger with Voice</h2>
        <div className="flex justify-center items-center gap-1">
          <button className=" h-[20px] w-[20px] bg-[#F4F5EB] text-black font-bold">⎽</button>
          <button className=" h-[20px] w-[20px] bg-[#F4F5EB] text-black font-bold">◻︎</button>
          <button className=" h-[20px] w-[20px] bg-[#F4F5EB] text-black">X</button>
        </div>
      </div>
      {/**Help Bar */}
      <div className="p-2 flex justify-start gap-2 text-black border border-b-1 border-dashed">
        <p>Messenger</p>
        <p>Help</p>
      </div>

      {/**Image */}
      <div className="flex items-center justify-center mt-16">
        <img src={logo} alt="photo" className="h-[100px] w-[120px] bg-clip-border" />
      </div>

      {/**Input */}
      <div className="text-white mt-5 mb-5 flex items-center justify-center  ">
        <form className="flex flex-col  justify-center text-left gap-2">
          <label htmlFor="" className=" text-black">
            Yahoo ID:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-white rounded-sm  text-black p-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="" className=" text-black">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="bg-white rounded-sm  text-black p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>

      {/** Login Options */}
      <Link to="/signup">
        <p className="text-blue-600 cursor-pointer mb-5 text-center">Get a new Yahoo! ID...</p>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col justify-center text-left mb-2 gap-1">
          <div className="flex items-center">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-black ml-2">
              Remember my ID & password
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="signInAuto" />
            <label htmlFor="signInAuto" className="text-black ml-2">
              Sign in automatically
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="signInInvisible" />
            <label htmlFor="signInInvisible" className="text-black ml-2">
              Sign in as invisible to everyone
            </label>
          </div>
        </form>

        <button
          className="mt-5 bg-[#F4F7ED] text-black rounded-lg pl-2 pr-2 p-1 border border-purple-500 bg-gradient-to-r   hover:from-pink-500 hover:to-yellow-500 "
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {!loading ? "Sign in" : <span className="loading loading-spinner" />}
        </button>
      </div>

      {/**Forgot password */}
      <p className="text-blue-500 mt-10 text-center">Forgot your password?</p>

      {/**Footer */}
      <div className="m-5">
        <img src={footer} alt="footer" className="w-[35px] h-[30px] bg-clip-text" />
      </div>
    </div>
  );
}

export default Login;
