import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authslice";

const Login = () => {
  const dispatch = useAppDispatch();

  const [login, { error }] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const onsubmit = async (data) => {

    const userInfo = {
      id: data.userId,
      password: data.password
    }
    console.log(userInfo);
    const res = await login(userInfo).unwrap()
    dispatch(setUser({ user: {}, token: res.data.accessToken }))
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="ID:"></label>
        <input type="text" id=""  {...register('userId')} />

      </div>
      <div>
        <label htmlFor="password">Password</label>1
        <input type="password" id=""{...register('password')} />
      </div>

      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
