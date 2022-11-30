import axios from "axios";

export default function fetchAnagrams(parsedWord) {
  return axios
    .get("http://localhost:8000/api/words", {
      params: {
        word: parsedWord,
      },
    })
    .then((r) => r.data);
}
