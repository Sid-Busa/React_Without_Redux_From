import { closeModel } from "../components/models/ModelAction";
export const login = (credential) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_USER",
      payload: credential,
    });
    dispatch(closeModel());
  };
};
export const logout = () => {
  return {
    type: "LOGOUT_USER",
  };
};
