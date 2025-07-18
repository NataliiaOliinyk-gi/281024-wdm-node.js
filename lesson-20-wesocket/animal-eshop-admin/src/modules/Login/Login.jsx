import {useSelector, useDispatch} from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Error from "../../shared/components/Error/Error";

import LoginForm from "./LoginForm/LoginForm";

import { selectAuth } from "../../redux/auth/auth-selectors";
import { login } from "../../redux/auth/auth-thunks";

const Login = () => {
  const {loading, error} = useSelector(selectAuth);
  const dispatch = useDispatch();

  const submitForm = (payload) => dispatch(login(payload));

  return (
    <Paper
      variant="outlined"
      sx={{
        width: "300px",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Login to enter dashboard
      </Typography>
      <LoginForm submitForm={submitForm} loading={loading} />
      {error && <Error>{error}</Error>}
    </Paper>
  );
};

export default Login;
