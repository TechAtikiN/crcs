import {useUserStore} from "@/store/UserStore";

type data = {
  email: string;
  password: string;
}
export const useAuth = async (endpoint: string, data: data) => {

  const BASE_URL = 'http://localhost:3000/api/auth/'
  console.log(BASE_URL + endpoint)
  const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  const user = await res.json()
    if (!res.ok) {
      alert('Invalid credentials')
      window.location.reload()
      return
    }
  
    // save in local storage
    localStorage.setItem('user', JSON.stringify(user))
    //get user from local storage
  const loggedInUser = JSON.parse(localStorage.getItem('user')!)
  return loggedInUser
}