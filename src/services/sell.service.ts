import axios from "axios";
import { ISell } from "../types/sell.types";

export function createSell(form:FormData) {
    return axios({
        method: "post",
        url: "http://localhost:5000/sell",
        data: form,
        headers: {
            // "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        },
    });
}

export function getSellItems(){
    return axios.get<ISell[]>("http://localhost:5000/sell");
    }