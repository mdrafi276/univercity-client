import { Button } from 'antd';
import { FieldValues, useForm, useFormContext } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PhForm from '../components/Form/PhForm';
import PhInput from '../components/Form/PhInput';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: 'A-0002',
  //     password: 'admin123',
  //   },
  // });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in', { id: toastId, duration: 2000 });

    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success('Logged in', { id: toastId, duration: 2000 });
    //   navigate(`${user.role}/dashboard`)

    // } catch (err) {
    //   toast.error("something went wrong..")
    // }

  };

  return (
    <PhForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID: </label>
        <PhInput type="text" name='userId' />

      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <PhInput type="text" name='password' />
      </div>
      <Button htmlType="submit">Login</Button>
    </PhForm>
  );
};

export default Login;
