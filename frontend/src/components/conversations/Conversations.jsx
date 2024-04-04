import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import LoadingSpinner from "../loading/LoadingSpinner";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex gap-1  sm:flex sm:flex-col overflow-auto animate__animated animate__fadeInLeft">
      {/**Conversation */}
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}
      {loading ? <LoadingSpinner /> : ""}
    </div>
  );
}

export default Conversations;
