export const currentUser = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser);
export const TOKEN = currentUser.token;