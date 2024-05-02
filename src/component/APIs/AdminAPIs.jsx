import { baseUrl } from "./ApiComponent";
import { getToken } from "./Cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMotorToCustomer = async(body) => {
    const endpoint = `${baseUrl}/admin/add_motor`;
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
  const endpoint = `${baseUrl}/admin/delete_motor`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  };
  try{
    const res = await fetch(endpoint, reqOption);
    if(res.ok){
      const data = await res.json();
      return data
    }
  }
  catch(err){
    console.log(err)
  }
}

export const getAllUsers = async() => {
    const endpoint = `${baseUrl}/admin/get_users`;
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
    const endpoint = `${baseUrl}/admin/get_motors`;
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
  const endpoint = `${baseUrl}/admin/add_new_motor`;
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

export const getUserById = createAsyncThunk(
  '/admin/get/user_info',
  async(body, thunkAPI) => {
      const endpoint = `${baseUrl}/admin/get/user_info`;
      try{
          const response = await axios.post(endpoint, body);
          return await response.data;
      }catch(err){
          return thunkAPI.rejectWithValue({error: err.message});
      }
  }
)