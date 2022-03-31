import myAxios from "../axios/myAxios";

const MangaApi = {
  getManga: async () => {
    return await myAxios.get("manga");
  },
};

export default MangaApi;
