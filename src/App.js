import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [loading,setLoading] = useState(true);
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => {
      setPosts(json);
      setLoading(false);
    });
  },[]);
  return (
    <div className="App">
      {loading ? <div>Loading...</div> : <div> <button>Set</button>{posts.map((post) => {
        return <ol key={post.id}>{
          <>
          <li>{post.title}</li>
          <li>{post.body}</li>
         
          </>
        }</ol>
      })}</div>}
    </div>
  );
}

export default App;
