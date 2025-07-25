import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Cabecalho } from "../../Components/Cabecalho";
import { Footer } from "../../Components/Footer";
function Login() {
	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [error, setError] = useState<string>();
	const navigate = useNavigate();

	const logar = async () => {
		try {
			await axios.post("https://dummyjson.com/auth/login", {
				username: username,
				password: password,
			});
			navigate("/home");
		} catch (error) {
			setError("Credenciais inválidas");
		}
	};

	return (
		<>
      <section className="flex flex-col w-full justify-between items-center h-screen">
			<Cabecalho />
        <div className="shadow-lg bg-gray-100 flex justify-center items-center w-96 h-80 rounded-md flex-col ">

          <h2 className="text-xl text-pink-900 font-extrabold">Login</h2>

          <div className="py-3 flex flex-col">
            <label className="text-lg text-black font-semibold" htmlFor="">
              Username:{" "}
            </label>
            <input
              className="text-lg border-4 border-gray-500"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className=" text-lg text-black font-semibold" htmlFor="">
              Password:{" "}
            </label>
            <input
              className="text-lg border-4 border-gray-500"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p>{error}</p>

          <button
            className="bg-green-100 font-semibold rounded-md border-3 border-green-300 p-2"
            onClick={logar}
          >
            Logar
          </button>
        </div>
			<Footer/>
      </section>
		</>
	);
}

export default Login;
