import { useState } from 'react';
import './App.css'
import { UserDataProps } from './types/userData';
import UserInfo from './components/UserInfo';
import SearchForm from './components/searchForm';
 
function App() { 

  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const [showError, setShowError] = useState(false);
  const fetchData = (username: string) => { 
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
          <SearchForm onSearch={fetchData}/>
      </div> 
      {userData && (
        <UserInfo userData={userData} />
      )}

      {showError && <p className="error">User not found</p>}
    </>
  )
}

export default App;
