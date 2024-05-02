import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        user_id: 'none',
        email: 'none',
        username: 'none',
        role: 'none',
        motor_owned: [],
    },
    motorData: [],
    customer: {
        "user_id": '',
        "username": '',
        "email": '',
        "role": '',
        "motor_owned": []
    },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    },
    removeUser: (state) => {
        return initialState;
    },
    setMotorDataById: (state, action) => {
        const motor_id = action.payload.motor_id;
        const data = action.payload.data;
        state.motorData[motor_id] = data;
    },
    addMotorDataById: (state, action) => {
        const motor_id = action.payload.motor_id;
        const data = action.payload.data;
        const prevData = state.motorData[motor_id] || [];
        const updatedData = [...prevData, data]
        if (updatedData.length > 10) {
            return {
                ...state,
                motorData: {
                    ...state.motorData,
                    [motor_id]: updatedData.slice(-10),
                },
            };
        }
        return {
            ...state,
            motorData: {
                ...state.motorData,
                [motor_id]: updatedData,
            },
        };
    },
    setCustomer: (state, action) => {
        state.customer = action.payload
    },
    removeCustomer: () => {
        return initialState
    },
    setAllMotors: (state, action) => {
        state.motorData = action.payload
    },
  },
});

export const { setUser, removeUser, setMotorDataById, addMotorDataById, setCustomer, removeCustomer, setAllMotors } = userSlice.actions;
export default userSlice.reducer;

export const isProductInCart = (state, product_id) => {
  return state.items.some(item => item.product_id === product_id);
};