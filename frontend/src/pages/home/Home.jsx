import MessageContainer from "../../components/messages/MessageContainer";
import SideBar from "../../components/sidebar/SideBar";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden border border-slate-500 p-3 ">
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default Home;
