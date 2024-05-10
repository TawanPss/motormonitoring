import { baseUrl } from "./ApiComponent";
import { getCookie, getToken } from "./Cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
    '/users/register',
    async(body, thunkAPI) => {
        const endpoint = `${baseUrl}/users/register`;
        try{
            const response = await axios.post(endpoint, body);
            return await response.data;
        }catch(err){
            return thunkAPI.rejectWithValue({error: err.message});
        }
    }
)

export const login = async(body) => {
        const endpoint = `${baseUrl}/users/login`;
        const reqOpt = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
        try{
            const response = await fetch(endpoint, reqOpt);
            return await response.json();
        }catch(err){
            return err;
        }
    }


export const is_authen = async() => {
    const endpoint = `${baseUrl}/users/is_authen`;
    try{
        // const token = getCookie('token');
        const token = getToken();
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

export const getUserData = createAsyncThunk(
    '/users/get/user_data',
    async(thunkAPI) => {
        // const token = getCookie('token');
        const token = getToken();
        const endpoint = `${baseUrl}/users/get/user_data`;
        const reqOpt = {
            headers: { 'Authorization': `Bearer ${token}`},
        }
        try{
            const response = await axios.post(endpoint, null, reqOpt);
            return await response.data;
        }catch(err){
            return thunkAPI.rejectWithValue({error: err.message});
        }
    }
)

export const userAddMotor = createAsyncThunk(
    '/users/add/motor',
    async(body, thunkAPI) => {
        // const token = getCookie('token');
        const token = getToken();
        const endpoint = `${baseUrl}/users/add/motor`;
        const reqOpt = {
            headers: { 'Authorization': `Bearer ${token}`},
        }
        try{
            const response = await axios.post(endpoint, body, reqOpt);
            return await response.data;
        }catch(err){
            return thunkAPI.rejectWithValue({error: err.message});
        }
    }
)

export const userEditName = createAsyncThunk(
    '/users/edit/username',
    async(body, thunkAPI) => {
        const token = getToken();
        const endpoint = `${baseUrl}/users/edit/username`;
        const reqOpt = {
            headers: { 'Authorization': `Bearer ${token}`},
        }
        try{
            const response = await axios.post(endpoint, body, reqOpt);
            return await response.data;
        }catch(err){
            return thunkAPI.rejectWithValue({error: err.message});
        }
    }
)