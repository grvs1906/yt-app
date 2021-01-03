import axios from "axios";

const KEY = "AIzaSyAAIYGAX-X244EPpv7DIDCu-KfP8o3XfpQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    type: "video",
  },
});
