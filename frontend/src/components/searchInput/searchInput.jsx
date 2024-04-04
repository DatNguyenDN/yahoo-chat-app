import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useConversation from "../../zustand/useConverstaion";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search input must be at least 3 character long ");
    }
    const conversation = conversations.find((item) =>
      item.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No user found!");
  };
  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-2xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className=" ">
        {search && <FaMagnifyingGlass className="w-6 h-6 -ml-8" />}
      </button>
    </form>
  );
}

export default SearchInput;
