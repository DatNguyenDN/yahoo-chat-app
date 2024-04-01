import singup from "../../public/signup.png";

function Signup() {
  return (
    <div className="h-[80vh] w-[500px] bg-[#F4F5EB] rounded-lg">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-[150px] h-[100px]">
          <img src={singup} alt="logo" className="" />
        </div>
        <h1 className="text-black text-2xl font-semibold">Create a Yahoo ID</h1>
        <div className="text-black w-full  mb-5 flex items-center justify-center">
          <form
            action=""
            className="flex w-[60%] flex-col justify-center text-black text-left gap-5 "
          >
            <label htmlFor="">Full name</label>
            <input type="text" className="bg-white" />

            <label htmlFor="">Email yahoo</label>
            <input type="email" className="bg-white" />

            <label htmlFor="">Password</label>
            <input type="password" className="bg-white" />

            <label htmlFor="">Gender</label>
            <select name="gender" id="" className="bg-white ">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </form>
        </div>

        <button className="mt-5 bg-[#F4F7ED] text-black rounded-lg pl-2 pr-2 p-1 border border-purple-500">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Signup;
