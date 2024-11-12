import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      console.error('로그인 오류:', error);
    } else {
      console.log('로그인 성공:', data);
      navigate('/');
    }
  };
  const handlerKakaoLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
      });
      if (error) {
        setError(error.message);
        console.error('카카오 로그인 오류:', error);
      } else {
        console.log('카카오 로그인 성공:', data);
        navigate('/');
      }
    } catch (error) {
      console.error('카카오 로그인 오류:', error);
    }
  };

  return (
    <div className="sm:w-[450px] lg:w-[500px] text-2xl sm:text-3xl flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-5xl mb-12 sm:mb-[100px] font-bold">
        로그인
      </h1>
      {error && (
        <div className="text-red-500 mb-4">
          <p>{error}</p>
        </div>
      )}
      <form className="flex flex-col gap-4 w-full" onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          required
          className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="이메일로 로그인"
          className="w-full h-[60px] sm:h-[70px] bg-gray-400 text-white rounded-lg cursor-pointer"
        />
        <button
          onClick={handlerKakaoLogin}
          className="w-full h-[60px] sm:h-[70px] bg-yellow-300 text-black rounded-lg cursor-pointer"
        >
          카카오로 로그인
        </button>
      </form>
    </div>
  );
}
