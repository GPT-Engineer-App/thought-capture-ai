import { useState } from "react";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";

const Index = () => {
  const [entries, setEntries] = useState([]);
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [important, setImportant] = useState(false);
  const [entryType, setEntryType] = useState("Text");
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const toggleImportantFilter = () => {
    setShowImportantOnly(!showImportantOnly);
  };

  const handleUpdateEntry = (id, newText) => {
    setEntries(entries.map((entry) => (entry.id === id ? { ...entry, text: newText, isEditing: false } : entry)));
  };

  const handleEditEntry = (id) => {
    setEntries(entries.map((entry) => (entry.id === id ? { ...entry, isEditing: !entry.isEditing } : entry)));
  };

  const handleAddEntry = () => {
    if (inputText.trim() !== "" && entryType) {
      setEntries([...entries, { id: Date.now(), text: inputText, category: category, important: important, type: entryType }]);
      setInputText("");
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
            <input type="text" className="flex-1 p-4 border-2 border-blue-500 rounded-md" placeholder="Enter your entry here..." value={inputText} onChange={handleInputChange} />
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
          <button className="ml-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out" onClick={handleAddEntry} title="Add entry">
            <FaPlus />
          </button>
        </div>
        <div className="flex justify-between items-center mt-6 mb-4">
          <h2 className="text-xl font-semibold">Entries</h2>
          <button className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-3 rounded" onClick={toggleImportantFilter}>
            Show Important Only
          </button>
        </div>
        <ul>
          {entries.map((entry) => (
            <li key={entry.id} className="bg-white p-4 shadow-md rounded-md flex items-center justify-between mb-6">
              <span contentEditable={entry.isEditing} onBlur={(e) => handleUpdateEntry(entry.id, e.target.textContent)}>
                {entry.text}
              </span>
              <div>
                <button className="text-green-500 hover:text-green-700 mr-2" onClick={() => handleEditEntry(entry.id)}>
                  <FaPencilAlt />
                </button>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteEntry(entry.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
