import React, { useState } from 'react';
import './App.css';

const emojiList = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍',
  '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏',
  '😒', '😞', '😔', '😟', '😕', '🙁', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐',
  '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭',
  '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢', '🤧', '😷', '🤒', '🤕', '😈', '👿',
  '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀',
  '😿', '😾'
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const results = emojiList.filter(emoji =>
      emoji.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="app">
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="emoji-container">
        {searchResults.map((emoji, index) => (
          <span key={index} className="emoji">
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
