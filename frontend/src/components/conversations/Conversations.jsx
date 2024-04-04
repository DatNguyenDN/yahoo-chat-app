import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex  sm:flex sm:flex-col overflow-auto">
      {/**Conversation */}
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner" /> : ""}
    </div>
  );
}

export default Conversations;
