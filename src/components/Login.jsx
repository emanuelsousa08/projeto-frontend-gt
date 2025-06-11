import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="flex justify-start min-h-screen px-8 gap-40">
        <div className="w-[583px] ml-10 my-24 p-7 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-7">
          <h3 className="w-[523px] justify-start text-dark-gray text-3xl font-bold font-['Inter'] leading-9 tracking-wide">
            Acesse sua conta
          </h3>
          <div className="text-start justify-start">
            <span class="py-4 text-dark-gray-2 text-base font-normal font-['Inter'] leading-7 tracking-wide">
              Novo cliente? Então registre-se{" "}
              <Link
                to="/"
                className="text-dark-gray-3 text-base font-normal font-['Inter'] underline leading-7 tracking-wide"
              >
                aqui
              </Link>
              .
            </span>
            <form className="p-4 justify-start">
              <label className="text-dark-gray font-bold font-['Inter'] leading-7 tracking-wide">
                Login*
              </label>
              <input
                type="text"
                className="w-full max-w-md px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 trasition"
                placeholder="Digite seu e-mail ou CPF..."
                required
              />
              <label className="text-dark-gray font-bold font-['Inter'] leading-7 tracking-wide">
                Senha*
              </label>
              <input
                type="text"
                className="w-full max-w-md px-4 py-2 border border-light-gray-2 rounded-md text-dark-gray placeholder:text-light-gray-2 focus:outline-pink-500 focus:outline-offset-2 trasition"
                placeholder="Digite sua senha..."
                required
              />
              <div className="flex justify-start px-4 py-4">
                <Link
                  to="/"
                  className="text-dark-gray-3 text-base font-normal font-['Inter'] underline leading-7 tracking-wide"
                >
                  Esqueci minha senha
                </Link>
              </div>
              <button className="w-full primary-button">Acessar Conta</button>
            </form>
            <div className="flex gap-4 py-2 px-2 text-dark-gray font-base font-[Inter] leading-7 tracking-wide">
              Ou faça login com <FaGoogle className="mt-2 text-red-500 cursor-pointer transition" /> <FaFacebookF className="mt-2 text-blue-600 cursor-pointer transition" />
            </div>
          </div>
        </div>
        <img
          src="/nike-revolution.png"
          alt="Tênis"
          className="max-w-[500px] h-auto object-contain"
        />
      </div>
    </>
  );
};

export default Login;
