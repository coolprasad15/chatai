import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function createAnswer() {
    setAnswer("loading...");
    const response = await axios({
      method: 'post',
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDNEMMfaQ7Lh4dpkiaOvuDcOa71eaT_12g",
      data: {
        "contents": [
          {
            "parts": [ { "text": question } ]
          }
        ]
      },
    });
    setAnswer (response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }

  return (
    <>
      <h1 className='bg-blue-300 mb-5'>CHAT AI</h1>
      <textarea
      className='border rounded w-full' value={question} onChange={(e) => setQuestion(e.target.value)} rows={6} placeholder='Ask me anything...'></textarea>
      <button onClick={createAnswer} className='mt-5 mb-5'>Create Answer</button>

      <pre>{answer}</pre>
    </>
  )
}

export default App
