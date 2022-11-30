import React, { useState } from "react";
import login from "../api/login";

export default function Login(props) {
  const [email, setUsername] = useState();
  const [password, setPassword] = useState();

  // handle authentication
  async function handleSubmit(event) {
    event.preventDefault();

    const loginResult = await login(email, password);
    props.setToken(loginResult);
  }

  return (
    <div className="text-zinc-50">
      <h2>Please log in to continue</h2>
      <form>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="text-black"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="text-black"
          />
        </label>
        <div>
          <button
            type="submit"
            className="bg-white text-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
