import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-300">
      <h1 className="mb-6 text-4xl font-bold">
        Souvenirs aus dem Meer und mehr
      </h1>
      <NavLink to="/main">
        <button className="mb-4 rounded bg-black px-4 py-2 text-white hover:bg-violet-700 transform transition-transform duration-200 hover:scale-105">
          Weiter ohne Login
        </button>
      </NavLink>
      <div className="flex w-80 flex-col">
        <input
          type="email"
          placeholder="E-Mail"
          className="mb-2 rounded border border-black bg-white p-2"
        />
        <input
          type="password"
          placeholder="Passwort"
          className="mb-4 rounded border border-black bg-white p-2"
        />
        <div className="flex justify-between">
          <button className="mb-4 rounded bg-black px-4 py-2 text-white hover:bg-violet-700 transform transition-transform duration-200 hover:scale-105">
            Let me in!!
          </button>
          <button className="mb-4 rounded bg-black px-4 py-2 text-white hover:bg-red-700 transform transition-transform duration-200 hover:scale-105">
            Registrieren
          </button>
        </div>
      </div>
    </div>
  );
}
