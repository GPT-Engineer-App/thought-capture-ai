import { useState } from "react";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";

const Index = () => {
  const [ideas, setIdeas] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddIdea = () => {
    if (inputText.trim() !== "") {
      setIdeas([...ideas, { id: Date.now(), text: inputText }]);
      setInputText("");
    }
  };

  const handleDeleteIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">Idea Capture and Processing</h1>
        <div className="flex items-center bg-white p-4 shadow-md rounded-md">
          <input type="text" className="flex-1 p-3 border-2 border-blue-300 rounded-md" placeholder="Enter your idea here..." value={inputText} onChange={handleInputChange} />
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleAddIdea}>
            <FaPlus />
          </button>
        </div>
        <ul className="mt-6">
          {ideas.map((idea) => (
            <li key={idea.id} className="bg-white p-4 shadow-md rounded-md flex items-center justify-between mb-4">
              <span>{idea.text}</span>
              <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteIdea(idea.id)}>
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
