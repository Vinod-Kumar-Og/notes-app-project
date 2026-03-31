const NoteCard = (props) => {

  return (
    <>
      <div className="bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] bg-center bg-contain rounded-xl h-70 w-50 py-4 flex flex-col justify-between">
        <div className="text-black px-6 py-2 ">
          <h1 className="font-semibold text-xl">{props.note.title}</h1>
          <p className="text-sm text-gray-600">{props.note.details}</p>
        </div>
        <button onClick={()=>{
          props.deleteNote(props.index)
        }} className="text-white rounded  w-[90%] bg-red-600 mx-auto">Delete</button>
      </div>
    </>
  );
};

export default NoteCard;
