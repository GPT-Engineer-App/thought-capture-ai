import { useState } from "react";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";

const Index = () => {
  const [entries, setEntries] = useState([]);
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [important, setImportant] = useState(false);
  const [entryType, setEntryType] = useState("Text");

  const handleAddEntry = () => {
    for (let i = 0; i < 3; i++) {
      if (inputText.trim() !== "" && entryType) {
        setEntries((prevEntries) => [...prevEntries, { id: Date.now() + i, text: inputText, category: category, important: important, type: entryType }]);
        setInputText("");
      }
    }
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">Idea Capture and Processing</h1>
        <div className="flex items-center bg-white p-4 shadow-md rounded-md">
          <div className="flex flex-wrap items-center">
            <input type="text" className="flex-1 p-3 border-2 border-blue-300 rounded-md" placeholder="Enter your entry here..." value={inputText} onChange={handleInputChange} />
            <select className="ml-4 p-3 border-2 border-blue-300 rounded-md" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
            <select className="ml-4 p-3 border-2 border-blue-300 rounded-md" value={entryType} onChange={(e) => setEntryType(e.target.value)}>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
            </select>
            <label className="ml-4">
              <input type="checkbox" checked={important} onChange={(e) => setImportant(e.target.checked)} />
              Important
            </label>
          </div>
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleAddEntry}>
            <FaPlus />
          </button>
        </div>
        <ul className="mt-6">
          {entries.map((entry) => (
            <li key={entry.id} className="bg-white p-4 shadow-md rounded-md flex items-center justify-between mb-4">
              <span>{entry.text}</span>
              <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteEntry(entry.id)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
