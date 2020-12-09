import http from "../utils/http";

export function fetchTableData() {
  return http.get("/api/v1/dashboard/getTables");
}
