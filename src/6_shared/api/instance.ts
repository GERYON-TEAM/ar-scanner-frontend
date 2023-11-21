import axios from "axios";
import { ctx } from '../lib/reatom/ctx';

export const instance = axios.create({
	baseURL: "",
	responseType: "json",
});
