import { Link } from "react-router-dom";

const AuthLink = () => {
  return (
    <>
    <div className="flex items-center gap-4">
      <div className="hidden lg:flex gap-4 ml-auto">
        <Link
          to={"/register"}
          className="underline text-dark-gray-2 font-normal px-3 py-2"
        >
          Cadastre-se
        </Link>
        <Link
          to={"/login"}
          className="bg-primary text-white font-bold px-3 py-2 rounded"
        >
          Entrar
        </Link>
      </div>
      </div>
    </>
  );
};

export default AuthLink;
