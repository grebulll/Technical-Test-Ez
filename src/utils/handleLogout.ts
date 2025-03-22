import { logout } from "../features/auth/authSlice";
import { AppDispatch } from "../store/store";
import { NavigateFunction } from "react-router-dom";

const handleLogout = (dispatch: AppDispatch, navigate: NavigateFunction) => {
  dispatch(logout());
  navigate("/login");
};

export default handleLogout;
