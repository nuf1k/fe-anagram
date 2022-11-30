import axios from "axios";

export default function login(email, password) {
  return axios
    .post(
      "http://localhost:8000/api/login",
      {},
      {
        params: {
          email,
          password,
        },
      }
    )
    .then((r) => r.data)
    .catch((err) => console.warn(err));
}
