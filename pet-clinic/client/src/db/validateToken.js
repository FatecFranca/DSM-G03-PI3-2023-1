import http from "./http";

export default async (token, url) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    await http.get(url, config).then();
    return true;
  } catch {
    return false;
  }
};
