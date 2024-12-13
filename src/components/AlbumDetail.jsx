import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AlbumDetail({ album, deleteAlbum, editAlbum }) {
  // eslint-disable-next-line react/prop-types
  const { title, userId, id } = album;
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(title);
  const editItem = (album) => {
    if (edit) {
      editAlbum(input, album);
    }
    setEdit(!edit);
  };
  return (
    <div className="p-4 flex flex-col flex-wrap justify-around items-stretch h-full  ">
      <div className=" flex justify-between">
        <h1 className="">
          UserId : <span className="text-red-400">{userId} </span>
        </h1>
        <h1>
          Id : <span className="text-red-400">{id}</span>
        </h1>
      </div>
      <div className="">
        <h1 className="break-all">
          <span className="text-orange-400 font-bold">Title</span> :{" "}
          {edit ? (
            <input
              className="bg-gray-200 px-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          ) : (
            title
          )}
        </h1>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-yellow-400 h-10 w-16 p-2 rounded"
          onClick={() => editItem(album)}
        >
          {edit ? "Save" : "Edit"}
        </button>
        <button
          className="bg-red-700 text-white h-10 p-2  rounded"
          onClick={() => deleteAlbum(id)}
        >
          X
        </button>
      </div>
    </div>
  );
}
