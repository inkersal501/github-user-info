import React, { useState } from 'react'
 
function SearchForm({onSearch}: {onSearch: (username: string) => void}) {
  const [username, setUsername] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(username);
      };

    return (
        <div>
            <form id="userForm" onSubmit={handleSubmit} >
                <input type="text" id='username' onChange={(e)=>setUsername(e.target.value)} placeholder="Github username" value={username}/>
                <button type="submit">Fetch User</button>
            </form>
        </div>
    )
}

export default SearchForm