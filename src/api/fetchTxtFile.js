import axios from "axios";

export default function fetchTxtFile(txtFileLink) {
  return axios.get(txtFileLink).then((r) => r.data);
}
