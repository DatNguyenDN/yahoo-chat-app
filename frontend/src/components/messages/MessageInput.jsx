import { BsSend } from "react-icons/bs";

function MessageInput() {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2 block bg-gray-800 border-gray-600"
          placeholder="Send a message"
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          <BsSend />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
