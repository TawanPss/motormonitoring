import React, { useState, useRef, useEffect } from 'react';
import { getCookie } from '../../component/APIs/Cookie';
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from 'react-redux';
import { userEditName, getUserData } from '../../component/APIs/UserAPIs';
import { setUser } from '../../slicers/userSlice';
const profilePic ="src/Page/MyaccountPage/nullprofile.png";
import './profile.css';
import Swal from 'sweetalert2';
import { redirect } from 'react-router-dom';

export default function Profile() {
  // const [user, setUser] = useState(null);
  const user = useSelector((state) => state.user.user)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(profilePic);
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const fileInput = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
  }, []);

  const getUser = () => {
    dispatch(getUserData()).unwrap()
    .then((data) => {
      dispatch(setUser(data))

    })
    .catch((err) => {
      Swal.fire({
        title: 'Authorization Failed!',
        text: 'Please sign-in again.',
        icon: "error",
        confirmButtonText: 'Okay'
      });
      navigate('/sign-in')
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: name
    }
    dispatch(userEditName(body)).unwrap()
    .then((data) => {
      Swal.fire({
        title: `${data.msg}`,
        text: "Your name is updated.",
        icon: "success",
        confirmButtonText: "OK"
      }).then((result) => {
        if(result.isConfirmed){
          window.location.reload()
        }
      })
    })
    .catch((err) => {
      Swal.fire({
        title: `${err}`,
        text: "Please try again later.",
        icon: "error",
        confirmButtonText: "Okay"
      });
    })
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setName(nameInput.current.value);
  //   setEmail(emailInput.current.value);
  //   setPhone(phoneInput.current.value);
  //   if (fileInput.current.files[0]) {
  //     setImage(URL.createObjectURL(fileInput.current.files[0]));
  //   }
  //   console.log({ name, email, phone, image });
  // };

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
              <p className='profile-email'>Username: </p>
              <h1 className="profile-name"><label>{user ? user.username : 'null'}</label> </h1>
              <p className='profile-email'>Email: </p>
              <p className="profile-email"><label>{user ? user.email : 'null'}</label> </p>
            <p className='profile-email'>Role: </p>
            <p className="profile-phone"><label>{user ? user.role : 'null'}</label> </p>
          </div>
      </div>
      <div className='lower-container'>
        <div className='blank-container'>

        </div>
        <form onSubmit={handleSubmit} className="profile-form">
          <p className='form-text-label'>Edit Name</p>
          <input ref={nameInput} type="text" placeholder="New name" className="profile-input" onChange={(e) => setName(e.target.value)}/>
          {/* <p className='form-text-label'>Change Email</p> */}
          {/* <input ref={emailInput} type="email" placeholder="New email" className="profile-input"/>
          <p className='form-text-label'>Change Phone Number</p>
          <input ref={phoneInput} type="tel" placeholder="New phone" pattern="[0-9]{10}" className="profile-input"/> */}
          <button type="submit" className="profile-submit">Submit Change</button>
        </form>
      </div>
      
      

      
    </div>
  );
}