import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConverstaion";
import { useMediaQuery } from "react-responsive";
function Conversation({ conversation, emoji, lastIndex }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const fullName = conversation.fullName;
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row justify-center items-center hover:bg-cyan-500 rounded-xl cursor-pointer gap-1 px-2 p-1 text-white
        ${isSelected ? "bg-cyan-500" : ""}
         `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            {isMobile ? (
              <p className="text-sm">{fullName.split(" ")[0]}</p>
            ) : (
              <p className="text-sm">{fullName}</p>
            )}

            <span className="max-sm:hidden ">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider bg-white my-2 h-1 " />}
    </>
  );
}

export default Conversation;
