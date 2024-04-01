function Conversation() {
  return (
    <>
      <div className="flex justify-center items-center hover:bg-cyan-500 rounded-xl cursor-pointer gap-1 px-2 text-white">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public" alt="user" />
          </div>
        </div>

        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Cena</p>
            <span>🐷</span>
          </div>
        </div>
      </div>
      <div className="divider my-2 py-0 h-1 " />
    </>
  );
}

export default Conversation;
