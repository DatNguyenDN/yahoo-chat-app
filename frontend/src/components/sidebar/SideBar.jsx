import { FaMagnifyingGlass } from "react-icons/fa6";
import Conversation from "../conversations/Conversation";
import { RiLogoutCircleLine } from "react-icons/ri";
function SideBar() {
  return (
    <div className="border-r border-green-300 p-5 flex flex-col">
      {/**Search input */}
      <form className="flex items-center justify-center">
        <input type="text" placeholder="Search..." className="p-2 rounded-2xl" />
        <button type="submit" className=" text-white">
          <FaMagnifyingGlass className="w-6 h-6 -ml-8" />
        </button>
      </form>
      <div className="divider px-3"></div>
      {/**Conversations */}

      <div className="py-2 flex flex-col overflow-auto">
        {/**Conversation */}
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>

      <div className="mt-auto">
        <button>
          <RiLogoutCircleLine className="w-6 h-6 text-white cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
