import { baseApi } from "./ApiComponent";

export const addMotorToCustomer = async(body) => {
    const endpoint = `${baseApi}/admin/add_motor`;
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
  
export const deleteMotorFromCustomer = async(body) => {
  const endpoint = `${baseApi}/admin/delete_motor`;
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

export const getAllUsers = async() => {
    const endpoint = `${baseApi}/admin/get_users`;
    const reqOption = {
        method: 'GET',
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

export const getAllMotors = async() => {
    const endpoint = `${baseApi}/admin/get_motors`;
    const reqOption = {
        method: 'GET',
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

export const addNewMotor = async(body) => {
  const endpoint = `${baseApi}/admin/add_new_motor`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }
  try{
    const res = await fetch(endpoint, reqOption);
    if(res.ok){
        const data = await res.json();
        console.log(data)
        return data
    }
  }catch(err){
    console.log(err);
  }
}