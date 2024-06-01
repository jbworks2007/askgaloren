import Axios from "axios";


const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;


export function axiosPost(url, body = {}) {
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem("token");
        const headers = { authorization: "Bearer " + token };
        var config = {
            headers,
        };
        await Axios.post(SERVER_API_URL + url, body, config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}