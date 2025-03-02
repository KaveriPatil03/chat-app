"use client";

import React, { useState } from "react";

const ChatForm = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 my-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 px-4 border-gray-200 border-2 py-2 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-white bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
