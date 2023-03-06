import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    const req = { user: { email: user.email, password: user.password } }
    try {
        await fetch("http://localhost:3000/users/sign_in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(loginSuccess({ email: user.email, password: user.password, token: data.token }));
            })
            .catch((error) => {
                dispatch(loginFailure());
            });
    } catch (error) {
        dispatch(loginFailure());
    }
};