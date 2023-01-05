import axiosClient from "../config/axiosClient";
import type { RequestsUserWithInfoDto } from '@/dto/dto/RequestsUserWithInfoDto';
const REQUESTS_URL = "http://localhost:8080/requests";
const BASE_URL = "http://localhost:8080/";

axiosClient.defaults.headers["Access-Control-Allow-Origin"] = "*";

async function getRequests(userId: number, statusId: number, page: number, pageSize: number): RequestsUserWithInfoDto {
  const res = await axiosClient.get<RequestsUserWithInfoDto>(
    REQUESTS_URL +
      "/userId/" +
      userId.toString() +
      "/status/" +
      statusId.toString() +
      "/page/" +
      page.toString() +
      "/pageSize/" +
          pageSize.toString()
  );
  return res.data;
}

export {
    getRequests,
};
