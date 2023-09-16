// frontend/src/views/Generator.js

import React, { useState } from 'react';
import axios from 'axios';

const Generator = () => {
  const [impromptuTopics, setImpromptuTopics] = useState([]);

  const generateImpromptuTopics = async () => {
    const response = await axios.get('/api/impromptu');
    setImpromptuTopics(response.data);
  };

  return (
    <div>
      <h1>Generator</h1>
      <button onClick={generateImpromptuTopics}>Generate Impromptu Topics</button>
      <ul>
        {impromptuTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Generator;
