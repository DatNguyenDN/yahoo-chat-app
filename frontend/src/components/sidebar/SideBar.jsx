import SearchInput from "../searchInput/searchInput";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
import Conversations from "../conversations/Conversations";
function SideBar() {
  const { logout, loading } = useLogout();

  return (
    <div className=" border-r border-slate-700 p-5 flex flex-col">
      {/* <div className="border-r border-slate-700 p-5 flex flex-col"> */}
      {/**Search input */}
      <SearchInput />
      <div className="divider px-3"></div>
      {/**Conversations */}
      <Conversations />
      <div className="mt-auto">
        <button onClick={logout}>
          {!loading ? (
            <RiLogoutCircleLine className="w-6 h-6  cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out" />
          ) : (
            <span className="loading loading-spinner"></span>
          )}{" "}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
