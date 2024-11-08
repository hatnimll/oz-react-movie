export default function Login() {
  return (
    <div className="w-[100vw] h-[100vh] text-3xl flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-[100px] font-bold">로그인</h1>
      <form className="flex flex-col gap-4">
        <label className="border border-solid border-gray-400 p-4 rounded-lg w-[500px] h-[70px]">
          <input type="email" placeholder="이메일을 입력하세요" required />
        </label>
        <label className="border border-solid border-gray-400 p-4 rounded-lg w-[500px] h-[70px]">
          <input type="password" placeholder="비밀번호를 입력하세요" required />
        </label>
        <input
          type="submit"
          value="로그인"
          className="w-[500px] h-[70px] bg-gray-400 text-white rounded-lg"
        />
      </form>
    </div>
  );
}
