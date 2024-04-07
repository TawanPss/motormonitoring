import React, { useState, useRef, useEffect } from 'react';
import './profile.css';
import { getCookie } from '../../component/API/Cookie';
import { CgProfile } from "react-icons/cg";
const profilePic ="src/Page/MyaccountPage/nullprofile.png";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(profilePic);
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const fileInput = useRef();

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async() =>{
    const userApi = `api/users/get/user_data`;
    try{
      const token = getCookie('token');
      console.log(token);
      const reqOption = {
        method: "POST",
        headers:{
          'Authorization': `Bearer ${token}`
        }
      };
      const res = await fetch(userApi,reqOption);
      if(res.ok){
        const data = await res.json()
        console.log(data);
        setUser(data);
      }
    }catch(err){
      console.log(err);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameInput.current.value);
    setEmail(emailInput.current.value);
    setPhone(phoneInput.current.value);
    if (fileInput.current.files[0]) {
      setImage(URL.createObjectURL(fileInput.current.files[0]));
    }
    console.log({ name, email, phone, image });
  };

  return (
    <div className="profile-container">
      <div className='Top-container'>
          <div className="image-container">
            <img src={image} alt="Profile" className="profile-image"/>
            <input type="file" ref={fileInput} accept="image/*" id="file-input" className="profile-file-input" />
            <label htmlFor="file-input" className="upload-icon">
              <i className="fas fa-upload"><CgProfile /></i> 
            </label>
          </div>
          <div className='current-profile-box'>
            <h1 className="profile-name"><label>{user ? user.username : 'null'}</label> {name}</h1>
            <p className="profile-email"><label>{user ? user.email : 'null'}</label> {email}</p>
            <p className="profile-phone"><label>{user ? user.role : 'null'}</label> {phone}</p>
          </div>
      </div>
      <div className='lower-container'>
        <div className='blank-container'>

        </div>
        <form onSubmit={handleSubmit} className="profile-form">
          <p className='form-text-label'>Edit Name</p>
          <input ref={nameInput} type="text" placeholder="New name" className="profile-input"/>
          <p className='form-text-label'>Change Email</p>
          <input ref={emailInput} type="email" placeholder="New email" className="profile-input"/>
          <p className='form-text-label'>Change Phone Number</p>
          <input ref={phoneInput} type="tel" placeholder="New phone" pattern="[0-9]{10}" className="profile-input"/>
          <button type="submit" className="profile-submit">Submit Change</button>
        </form>
      </div>
      
      

      
    </div>
  );
}