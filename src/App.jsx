import axios from 'axios';
import './App.css'
import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();

  async function generateAnswer(){
    setAnswer("loading...")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJcGOPzHGsCXdUwHcET-Ssk3MyNCoaOcI",
      method: "post",
      data: {
        contents: [
          { parts: [{ text: question }]}
        ],
      },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }
  return (
    <>
      <h1>Chat AI</h1>
      <textarea 
        value={question} 
        onChange={(e)=> setQuestion(e.target.value)} 
        rows="10" cols="30">

      </textarea>
      <button onClick={generateAnswer}>Generate answer</button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
