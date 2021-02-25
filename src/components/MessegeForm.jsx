import { useState } from "react";
const MessageForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {};
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message.."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageForm;
