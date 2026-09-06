import { useState, useEffect } from "react";
import { useChapters } from "../context/ChaptersContext";
import Loader from "../components/Loader";

function Quest() {
  const { chapters, loading, error, fetchChapters, addChapter, deleteChapter } = useChapters();
  const [input, setInput] = useState("");
  // const [test, setTest] = useState([]); 
  
  useEffect(() => {
    fetchChapters();
  }, [fetchChapters])

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await addChapter({
      title: input,
    });
    setInput('');
  }

  if (loading) return <Loader />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
      <div className="flex flex-col min-h-screen pt-[25vh] items-center">
        <h1>Quest Log</h1>
        <div>
          <form className="flex gap-1" onSubmit={handleAdd}>
            <input className="outline-1" onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
            <button className="outline-1" type="submit">
              Submit
            </button>
          </form>
        </div>
        {chapters.length === 0 ? (
          <p> No items found </p>
        ) : (
          <ul className="pt-3">
            {chapters.map((item) => (
              <li key={item._id} className="flex flex-row max-w-[50vw] min-h-[5vh] justify-between gap-1 m-5 border">
                <div className="flex flex-col">
                  <span className="min-w-0 flex-1 wrap-anywhere ">{item.title}</span>
                  <small>{new Date(item.createdAt).toLocaleString()}</small>
                </div>
                <button className="outline shrink-0" onClick={() => deleteChapter(item._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
  )
}

export default Quest;