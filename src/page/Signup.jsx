export default function Signup() {
  return (
    <div className="sm:w-[450px] lg:w-[500px] text-2xl sm:text-3xl flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl sm:text-5xl mb-12 sm:mb-[100px] font-bold">
        회원가입
      </h1>
      <form className="flex flex-col gap-4 w-full">
        <label className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]">
          <input
            type="text"
            name="name"
            placeholder="이름"
            required
            className="w-full h-full"
          />
        </label>
        <label className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]">
          <input
            type="email"
            name="email"
            placeholder="이메일"
            required
            className="w-full h-full"
          />
        </label>
        <label className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]">
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            className="w-full h-full"
          />
        </label>
        <label className="border border-solid border-gray-400 p-3 sm:p-4 rounded-lg w-full h-[60px] sm:h-[70px]">
          <input
            type="password"
            name="password"
            placeholder="비밀번호 확인"
            required
            className="w-full h-full"
          />
        </label>
        <input
          type="submit"
          value="회원가입"
          className="w-full h-[60px] sm:h-[70px] bg-gray-400 text-white rounded-lg cursor-pointer"
        />
      </form>
    </div>
  );
}
