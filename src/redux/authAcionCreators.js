import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth = (email, password) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]")

}