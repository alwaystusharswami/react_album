import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddAlbum({ addData }) {
  const [input, setInput] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: input,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => addData(json));
    setInput("");
  };
  return (
    <>
      <div className="bg-gray-300 p-2 border-4  w-screen ">
        <form onSubmit={submitForm} className="flex justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add album..."
            className="bg-gray-200 focus:outline-none w-1/2 p-2 placeholder:text-black rounded-s-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-e-md"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
