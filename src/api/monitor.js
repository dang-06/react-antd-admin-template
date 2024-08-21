import request from "@/utils/request";

export function tracker(data) {
  return request({
    url: "/v1/user/monitor",
    method: "post",
    data,
  });
}
