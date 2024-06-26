import SearchInput from "../searchInput/searchInput";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
import Conversations from "../conversations/Conversations";
import LoadingSpinner from "../loading/LoadingSpinner";
function SideBar() {
  const { logout, loading } = useLogout();

  return (
    <div className="max-sm:h-[195px] sm:border-r border-slate-700 p-3 flex flex-col ">
      {/* <div className="border-r border-slate-700 p-5 flex flex-col"> */}
      {/**Search input */}
      <SearchInput />
      <div className="my-1.5 sm:divider sm:px-3"></div>
      {/**Conversations */}
      <Conversations />
      <div className="mt-auto ">
        <button onClick={logout} className="">
          {!loading ? (
            <RiLogoutCircleLine className="w-6 h-6  cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out text-white max-sm:top-1 max-sm:right-1 max-sm:fixed hover:text-cyan-500 " />
          ) : (
            <LoadingSpinner />
          )}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
