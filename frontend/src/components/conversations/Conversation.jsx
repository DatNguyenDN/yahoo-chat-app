import useConversation from "../../zustand/useConverstaion";
function Conversation({ conversation, emoji, lastIndex }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex justify-center items-center hover:bg-cyan-500 rounded-xl cursor-pointer gap-1 px-2 p-1 
        ${isSelected ? "bg-cyan-500" : ""}
         `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className=" ">{conversation.fullName}</p>
            <span>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider bg-white my-2 h-1 " />}
    </>
  );
}

export default Conversation;
