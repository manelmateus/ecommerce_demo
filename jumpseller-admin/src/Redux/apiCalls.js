import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requests";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,
} from "./productRedux";

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    const req = { user: { email: user.email, password: user.password } };
    try {
        const res = await publicRequest.post("users/sign_in", req);
        dispatch(loginSuccess({ email: user.email, token: res.data.token }));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const getProducts = async(dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async(id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        await publicRequest.delete(`products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async(id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        await publicRequest.patch(`/products/${id}`, product);
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};
export const addProduct = async(product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await publicRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};