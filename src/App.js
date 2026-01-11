import { useState } from 'react';

function Header(){
  const [name, setName] = useState("");
  return(
    <div style={{textAlign:"center"}}>
      <h1>Welcome to Vectorial Labs!</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name'></input>
      <h1>Welcome, {name}</h1>
    </div>
  )
}

function App(){
  return(
    <div>
      <Header />
    </div>
  )
}

export default App;