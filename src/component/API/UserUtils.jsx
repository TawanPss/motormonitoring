import { baseApi } from "./ApiComponent";
import { getCookie } from "./Cookie";

export const login = async(body) => {
    const endpoint = `${baseApi}/users/login`;
    const reqOption = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      };
      try{
        const res = await fetch(endpoint, reqOption);
        if(res.ok){
          const data = await res.json();
          console.log(data)
          return data
        }
      }
      catch(err){
        console.log(err)
      }
}

export const register_n = async(body) => {
    const endpoint = `${baseApi}/users/register`;
    const reqOption = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      };
      try{
        const res = await fetch(endpoint, reqOption);
        if(res.ok){
          const data = await res.json();
          console.log(data)
          return data
        }
      }
      catch(err){
        console.log(err)
      }
}

export const is_authen = async() => {
    const endpoint = `${baseApi}/users/is_authen`;
    try{
        const token = getCookie('token');
        console.log(token);
        const reqOption = {
            method: "POST",
            headers:{
            'Authorization': `Bearer ${token}`
            }
        };
        const res = await fetch(endpoint, reqOption);
        if(res.ok){
            const data = await res.json();
            console.log(data)
            return data
        }
    }
    catch(err){
        console.log(err)
    }
}

export async function getUserData(){
    const endpoint = `${baseApi}/users/get/user_data`;
    try{
        const token = getCookie('token');
        console.log(token);
        const reqOption = {
            method: "POST",
            headers:{
                'Authorization': `Bearer ${token}`
            }
        };
        const res = await fetch(endpoint, reqOption);
        if(res.ok){
            const data = await res.json();
            console.log(data)
            return data
        }
    }
    catch(err){
        console.log(err)
        return err
    }
}