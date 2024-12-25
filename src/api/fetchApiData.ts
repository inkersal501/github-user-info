import { userInfo } from "../types/userData";

export default async function fetchApiData(username:string): Promise<userInfo | undefined> {
    
    const data = await fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => { 
      return data;
    });
    return data;
};