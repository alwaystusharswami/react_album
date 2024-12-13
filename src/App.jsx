import AddAlbum from "./components/AddAlbum";
import AlbumDetail from "./components/AlbumDetail";
import { useState, useEffect } from "react";

export default function App() {
  const [albums, setAlbums] = useState([]);

  // delete album
  const deleteAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    const newArr = albums.filter((album) => album.id !== id);
    setAlbums(newArr);
  };
  const editAlbum = async (text, album) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${album.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: album.id,
        title: text,
        body: album.body,
        userId: album.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const a = albums.map((al) => (al.id === album.id ? json : al));
        setAlbums(a);
      });
  };

  // add album
  const addData = (obj) => {
    setAlbums([obj, ...albums]);
  };

  // fetch all data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);
  return (
    <>
      <AddAlbum addData={addData} />
      <div className="flex flex-wrap justify-around">
        {albums.map((album) => (
          <li
            key={album.id}
            className="m-2 w-72 list-none border-4 bg-gray-300 rounded"
          >
            <AlbumDetail
              album={album}
              deleteAlbum={deleteAlbum}
              editAlbum={editAlbum}
            />
          </li>
        ))}
      </div>
    </>
  );
}
