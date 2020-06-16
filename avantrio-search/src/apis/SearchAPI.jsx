import Axios from 'axios';
import axiosRateLimit from "axios-rate-limit";

export class SearchAPI {
//{'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Imxha3NoYW4iLCJleHAiOjE1OTIzMDAxMDUsImVtYWlsIjoiIiwib3JpZ19pYXQiOjE1OTIyOTY1MDV9.xdpxyIDdJowELWNLzjMi4JceZ-Px0ophmScnjd7IzNE"}

    static getHTTPClient() {
        let httpClient = Axios.create({
            baseURL: "http://161.35.44.217:8080/api",
            timeout: 12000,
            headers: {Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Imxha3NoYW4iLCJleHAiOjE1OTIzMDA2NDcsImVtYWlsIjoiIiwib3JpZ19pYXQiOjE1OTIyOTcwNDd9.HfjGyZs0pFFfDgdvz24kvsjVt0z-rV457eZzmIvtN6w"}

        });
        return httpClient;
    };

    static getResult(query) {
        return SearchAPI.getHTTPClient().get('/devices?search=' + query);
    }
};