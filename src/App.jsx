import NoteCard from "./components/NoteCard";
import { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data == null) {
      ""
    } else {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handelSUbmit = (e) => {
    if (title === "" || details === "") {
      e.preventDefault();
    } else {
      e.preventDefault();
      const copyNotes = [...notes];
      copyNotes.push({ title, details });
      setNotes(copyNotes);
      setTitle("");
      setDetails("");
    }
  };

  const deleteNote = (index) => {
    const copyNotes = [...notes];
    copyNotes.splice(index, 1);
    setNotes(copyNotes);
  };

  return (
    <div className="font-semibold bg-black min-h-screen text-white p-10 lg:flex lg:justify-between gap-2">
      <form
        onSubmit={(e) => {
          handelSUbmit(e);
        }}
        className="flex flex-col gap-4 lg:w-[40%]"
      >
        <h1 className="text-2xl">Add Notes</h1>
        <input
          className="border-2 border-white outline-none px-4 py-2 rounded-lg"
          type="text"
          placeholder="Enter heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="border-2 border-white outline-none px-4 py-2 rounded-lg h-45 "
          type="text"
          placeholder="Enter details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white text-black px5 py-2 rounded-lg">
          Add Note
        </button>
      </form>
      <div className="lg:block hidden h-[90vh] w-0.5 bg-white"></div>
      <div className="overflow-auto py-10 lg:w-1/2 lg:mx-5 lg:py-0">
        <h2 className="mb-3 text-2xl">Recent Notes</h2>
        <div className="flex flex-wrap gap-4">
          {notes == "" ? (
            <div>No notes avilable</div>
          ) : (
            notes.map((note, index) => {
              return (
                <NoteCard
                  key={index}
                  index={index}
                  deleteNote={deleteNote}
                  note={note}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
