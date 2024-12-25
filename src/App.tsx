import { useState } from 'react';
import './App.css'
import { userInfo } from './types/userData';
import UserInfo from './components/UserInfo';
import SearchForm from './components/SearchForm';
import fetchApiData from './api/fetchApiData';
 
function App() { 

  const [userData, setUserData] = useState<userInfo | undefined>(undefined); 
  
  const fetchData = async (username: string) => {  
    const data = await fetchApiData(username);
    setUserData(data); 
  };
  
  return (
    <> 
      <h1>Github User Info Fetcher</h1>
      <div className="input-container">
          <SearchForm onSearch={fetchData}/>
      </div> 
      
      <UserInfo userData={userData} />
 
    </>
  )
}

export default App;
