import axios from "axios";
import { IRatingParams, ISell } from "../types/sell.types";

export function createSell(form: FormData) {
    return axios({
        method: "post",
        url: "http://localhost:5000/sell",
        data: form,
        headers: {
            // "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        },
    });
}

export function getSellItems() {
    return axios.get<ISell[]>("http://localhost:5000/sell");
}

export function searchSellItems(searchKey: string) {
    return axios.get<ISell[]>("http://localhost:5000/sell/" + searchKey);
}

export function updateRating(rating: IRatingParams) {
    return axios.put<ISell>("http://localhost:5000/rating", rating);
}

export function deleteSellItem(id: string) {
    return axios.delete<ISell>("http://localhost:5000/sell/" + id);
}
