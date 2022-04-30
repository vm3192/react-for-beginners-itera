import React from 'react';
import './App.css';

const data = {"First name": "Slavik",
	"Short biography": "I'm 30 years old. I wanna to learn React :)",
	"Public Contacts": "telegram - @vm3192"
}

function App() {
  return (
    <div className="App">
			<p>{data['First name']}</p>
			<p>{data['Short biography']}</p>
			<p>{data['Public Contacts']}</p>
    </div>
  );
}

export default App;
