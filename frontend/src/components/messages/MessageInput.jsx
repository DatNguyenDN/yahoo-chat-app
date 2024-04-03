import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

function MessageInput() {
  const { loading, sendMessage } = useSendMessage();
  const [message, setmessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setmessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2 block bg-gray-800 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          {!loading ? (
            <BsSend className="text-white" />
          ) : (
            <span className="loading loading-spinner" />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
