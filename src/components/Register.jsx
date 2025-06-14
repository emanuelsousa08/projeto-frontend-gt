import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 lg:px-8 gap-8 lg:gap-40">
        <div className="w-full max-w-[583px] my-8 p-6 bg-white rounded-lg flex flex-col items-start gap-6 shadow-md">
          <h3 className="w-[523px] justify-start text-dark-gray text-3xl font-bold font-['Inter'] leading-9 tracking-wide">
            Crie sua conta
          </h3>
          <div className="text-start self-stretch justify-start items-start gap-6">
            <span class="py-4 text-dark-gray-2 text-base font-normal font-['Inter'] leading-7 tracking-wide">
              Já possui uma conta? entre{" "}
              <Link
                to={"/login"}
                className="text-dark-gray-3 text-base font-normal font-['Inter'] underline leading-7 tracking-wide"
              >
                aqui
              </Link>
              .
            </span>
            <div>
              <form className="w-full max-w-[583px] mx-auto px-4 py-2 bg-white rounded-lg flex flex-col items-start">
                <label className="text-dark-gray mt-6 text-nowrap font-bold font-['Inter'] leading-7 tracking-wide">
                  Email*
                </label>
                <input
                  type="text"
                  className="w-full max-w-[583px] mb-6 px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 transition"
                  placeholder="Insira seu e-mail..."
                  required
                />
                <button className="w-full mt-4 primary-button">
                  <Link to={"/formregister"}>
                    Criar Conta
                  </Link>
                </button>
              </form>
            </div>
            <div className="flex gap-4 py-2 px-2 text-dark-gray font-base font-[Inter] leading-7 tracking-wide">
              Ou faça login com{" "}
              <FaGoogle className="mt-2 text-red-500 cursor-pointer transition" />{" "}
              <FaFacebookF className="mt-2 text-blue-600 cursor-pointer transition" />
            </div>
          </div>
        </div>
        <img
          src="/headphone-phillips.png"
          alt="Headphone"
          className="hidden lg:block max-w-[500px] h-auto object-contain"
        />
      </div>
    </>
  );
};

export default Register;
