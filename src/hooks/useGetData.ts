export const useGetData = async (endpoint: string, token:string) => {

  const BASE_URL = 'http://localhost:3000/api/'

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    })
  const data = await res.json()
  
  return data
}
