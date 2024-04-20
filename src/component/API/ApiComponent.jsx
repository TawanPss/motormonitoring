export const baseApi = 'http://127.0.0.1:8000';

export const getMotorData = async(id) => {
  const motorApi = `${baseApi}/devices/get/motor_data`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        motor_id: id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
};

export const getLastData = async(id) => {
  const motorApi = `${baseApi}/devices/get/last_data`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        motor_id: id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      // console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
}

export const getMotorInfo = async(id) => {
  const motorApi = `${baseApi}/devices/motor/find`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        motor_id: id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
};

export const getRecords = async(motor_id) => {
  const motorApi = `${baseApi}/devices/records`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      motor_id: motor_id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
};

export const addMotor = async(body) => {
  const endpoint = `${baseApi}/devices/motor/add`;
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

export const logout = () => {
  document.cookie = "token=;";
  location.reload();
}