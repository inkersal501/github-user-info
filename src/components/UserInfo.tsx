import { UserDataProps } from '../types/userData';

function UserInfo({userData}: {userData: UserDataProps}) {
  return (
    <div>
        <div className="user-container">
          <h2>{userData.name} ({userData.login})</h2>
          <img src={userData.avatar_url} alt="user avatar" style={{width:"150px", height:"150px"}}/>
          <p>Public Repositories: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p> 
          <a href={userData.html_url} target="_blank" rel="noreferrer">Github Profile</a>
        </div>
    </div>
  )
}

export default UserInfo;