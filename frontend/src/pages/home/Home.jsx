import MessageContainer from "../../components/messages/MessageContainer";
import SideBar from "../../components/sidebar/SideBar";

function Home() {
  return (
    // <div className="flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden border border-slate-500 p-3 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    //   <SideBar />
    //   <MessageContainer />
    // </div>

    <div
      className="flex flex-col sm:flex-row h-[90vh]  sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden border border-slate-500 p-3 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
      
      "
    >
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default Home;
