import { useState, useEffect } from "react";
import { useChapters } from "./context/ChaptersContext";

function App() {
  const { chapters, loading, error, fetchChapters, addChapter, deleteChapter } = useChapters();
  const [input, setInput] = useState();
  // const [test, setTest] = useState([]); 
  
  useEffect(() => {
    fetchChapters();
  }, [fetchChapters])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setTest(previous => [...previous, input])
  //   setInput("")
  // }

  const handleAdd = async () => {
    if (!input.trim()) return;
    await addChapter({
      title: input,
    });
    setInput('');
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
      <div className="flex flex-col min-h-screen pt-[25vh] items-center">
        <h1>Quest Log</h1>
        <div>
          <form className="flex gap-1" onSubmit={handleAdd}>
            <input className="outline-1" onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
            <button className="outline-1" onClick={handleAdd}>
              Submit
            </button>
          </form>
        </div>
        {chapters.length === 0 ? (
          <p> No items found </p>
        ) : (
          <ul className="pt-3">
            {chapters.map((item) => (
              <div className="flex flex-row gap-2">
                <li key={item._id}>{item.title}</li>
                <button className="outline" onClick={() => deleteChapter(item._id)}>
                  Complete
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
  )
}

export default App;