import { useState } from "react";
import axios from "axios";


const useAxios = ({ url, formatter }) => {
  const [data, setData] = useState([]);

  async function addData(param = "") {
    console.log(data);
    const res = await axios.get(`${url}${param}`);
    setData(data => [...data, formatter(res.data)])
  }

  async function clearData() {
    setData([]);
  }

  return [data, addData, clearData];
}

export default useAxios;