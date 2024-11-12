import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('이름은 필수입니다.'),
  email: Yup.string()
    .email('유효한 이메일 주소를 입력하세요')
    .required('이메일은 필수입니다.'),
  password: Yup.string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .matches(/[a-zA-Z]/, '비밀번호에는 1개 이상의 영어가 포함되어야 해요')
    .matches(/\d/, '비밀번호에는 1개 이상의 숫자가 포함되어야 해요')
    .matches(
      /[!@#$%^&*()_+]/,
      '비밀번호에는 1개 이상의 특수문자가 포함되어야 해요'
    )
    .required('비밀번호는 필수입니다.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인은 필수입니다.'),
});

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const signUp = async (data) => {
    console.log('signUp 호출');

    const { name, email, password } = data;

    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      console.error(error);
      return;
    }

    console.log('signUp data : ', signUpData);
    navigate('/');
  };

  return (
    <div className="sm:w-[450px] lg:w-[500px] text-2xl sm:text-3xl flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-5xl mb-12 sm:mb-[100px] font-bold">
        회원가입
      </h1>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(signUp)}
      >
        <input
          type="text"
          name="name"
          placeholder="이름"
          className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-red-500 text-base">{errors.name.message}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="이메일"
          className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-red-500 text-base">{errors.email.message}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-500 text-base">{errors.password.message}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="비밀번호 확인"
          className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-base">
            {errors.confirmPassword.message}
          </p>
        )}
        <input
          type="submit"
          value="회원가입"
          className="w-full h-[60px] sm:h-[70px] bg-gray-400 text-white rounded-lg cursor-pointer"
        />
      </form>
    </div>
  );
}
