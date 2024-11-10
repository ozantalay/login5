const App = () => {
  return (
    <div className="relative h-screen overflow-hidden w-full bg-white z-0">
      {/* Arka plan yeşil div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#095F59] z-[-1] clip-diagonal"></div>

      {/* Beyaz yuvarlak div */}
      <div className=" absolute inset-0 flex items-center ml-20 mt-16 z-0 ">
        <div className="bg-[#095F59D6] border-[18px] border-[#2B7F70] rounded-full w-44 h-44 shadow-lg mt-8"></div>
      </div>
      <div className=" absolute inset-0 flex items-end justify-end ml-20 mt-64 z-0 ">
        <div className="bg-[#095F59D6] border-[32px] border-[#2B7F70] absolute bottom-0  w-52  h-32 border-b-0 rounded-t-full"></div>
      </div>

      {/* İçerik */}
      <div className="w-full h-[60px] bg-[#095F59] flex items-center justify-between z-10 relative">
        <h1 className="text-white text-2xl font-bold ml-5">SHEY</h1>
        <ul className="flex justify-end mr-5 text-white space-x-4">
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="flex flex-row h-full justify-center z-10 relative">
        <div className="mt-0 flex flex-col justify-center items-center h-full w-1/2">
          <div className="flex flex-col justify-center items-center bg-[#FFFFFFE5] p-6 z-[1] shadow-2xl">
            <h1 className="font-sans text-7xl text-[#095F59] self-start">
              LOGIN
            </h1>

            <input
              placeholder="Username"
              className="border-2 w-[400px] h-10 mt-5 rounded-md"
            />
            <input
              placeholder="Password"
              className="border-2 w-[400px] h-10 mt-5 rounded-md"
            />

            <button className="w-48 h-10 bg-[#095F59] text-white mt-5 rounded-md self-start">
              LOGIN
            </button>

            <div className="flex items-center w-full mt-5">
              <div className="flex-grow border-gray-950 border-t"></div>
              <span className="mx-4">OR</span>
              <div className="flex-grow border-sky-400 border-t"></div>
            </div>

            <div className="flex flex-row justify-center items-center gap-10 mt-5">
              <img src="image 1.png" alt="Google Login 1" />
              <img src="image 2.png" alt="Facebook Login 2" />
            </div>
            <div className="mt-5 justify-center text-[#101A1CA3]">
              <button>Not yet registered?</button> <button>Click here to sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
