// src/App.jsx
import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    // Log the name for debugging purposes
    console.log("Submitted name:", name);
    hello_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    }).catch((err) => {
      console.error("Error calling greet:", err);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
