import axios from "axios";


async function axiosGetRequest(url, id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

export default axiosGetRequest;
