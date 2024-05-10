export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

export const removeToken = () => {
    localStorage.removeItem('token');
}