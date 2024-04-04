import { useEffect } from "react";
import useConversation from "../../zustand/useConverstaion";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import yahoo from "../../assets/yahooOnline.png";
function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/**Header */}
          <div className="bg-gray-800 border-gray-600 px-4 py-2 mb-2  ml-2.5 flex gap-2 items-center rounded-lg ">
            <span className="label-text text-white">To:</span>
            <span className="font-semibold text-white">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

function NoChatSelected() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2 text-white">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>

        <div className="w-16 h-16  sm:w-24 sm:h-24 ">
          <img src={yahoo} alt="yahoo" />
        </div>
      </div>
    </div>
  );
}
