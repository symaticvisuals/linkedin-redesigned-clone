import axios from "axios";
import Cookies from "js-cookie";
import getApi from "./apis";

const instance = axios.create({
	withCredentials: true,
	baseURL: getApi(""),
});

export default instance;
