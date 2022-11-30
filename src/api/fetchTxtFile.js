import axios from "axios";

export default function fetchTxtFile(url) {
  return axios
    .post("http://localhost:8000/api/wordbase", {
      body: {
        url,
      },
    })
    .then((r) => r.data);
}
