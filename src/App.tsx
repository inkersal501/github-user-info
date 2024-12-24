import { useState } from 'react';
import './App.css'

interface UserData {
  login: string,
  avatar_url: string,
  name: string,
  bio: string,
  html_url: string,
  public_repos: number,
  followers: number,
  following: number
};

function App() { 
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(false);
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => { 
        if(data.message === "Not Found")
          setShowError(true);
        else
          setUserData(data);
    });
  };
  return (
    <> 
      <h1>Github User Info Fetcher</h1>
      <div className="input-container">
        <form id="userForm" onSubmit={handleSubmit} >
          <input type="text" id='username' onChange={(e)=>setUsername(e.target.value)} placeholder="Github username" value={username}/>
          <button type="submit">Fetch User</button>
        </form>
      </div> 
      {userData && (
        <div className="user-container">
          <h2>{userData.name} ({userData.login})</h2>
          <img src={userData.avatar_url} alt="user avatar" style={{width:"150px", height:"150px"}}/>
          <p>Public Repositories: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p> 
          <a href={userData.html_url} target="_blank" rel="noreferrer">Github Profile</a>
        </div>
      )}

      {showError && <p className="error">User not found</p>}
    </>
  )
}

export default App;
