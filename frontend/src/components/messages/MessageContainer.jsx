import { useEffect } from "react";
import useConversation from "../../zustand/useConverstaion";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
function MessageContainer() {
  const { authUser } = useAuthContext();
  console.log(authUser);

  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected authUser={authUser} />
      ) : (
        <>
          {/**Header */}
          <div className="bg-gray-800 border-gray-600 px-4 py-2 mb-2  ml-2.5 flex gap-2 items-center rounded-lg">
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

function NoChatSelected({ authUser }) {
  // const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>

        <TiMessages className="text-3xl md:text-6xl text-center  " />
      </div>
    </div>
  );
}
