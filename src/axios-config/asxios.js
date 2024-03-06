const getRequestAxios = {
  method: "get",
  url: "/posts",
};

const postRequestAxios = {
  method: "post",
  url: "/posts",
};

const putRequestAxios = {
  method: "put",
  url: "/posts/1",
};

const patchRequestAxios = {
  method: "patch",
  url: "/posts/1",
};

const deleteRequestAxios = {
  method: "delete",
  url: "/posts/1",
};

export {
  getRequestAxios,
  postRequestAxios,
  putRequestAxios,
  patchRequestAxios,
  deleteRequestAxios,
};
