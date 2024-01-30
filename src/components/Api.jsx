// Api.jsx
import React from "react";

export async function handleLogin(email, password) {
    try {
      const user = { "username": null, "email": email, "passwd": password }; // User data to be sent to the server
  
      const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        // Handle successful login, e.g., set user session or navigate to another page
        console.log('Logged in:', data);
        return { 'success': true };
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
}
  
export async function handleRegister(username, email, password){
    try {
        const user = { 
            "username": username,
            "email": email,
            "passwd": password
        }; // User data to be sent to the server
    
        const response = await fetch(`/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
    
        if (response.status === 200) {
          const data = await response.json();
          // Handle successful login, e.g., set user session or navigate to another page
          console.log('Registered :', data);
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        // setErrorMessage('Register failed. Please check your email or password.');
        console.error('Error register in:', error);
      }
}
