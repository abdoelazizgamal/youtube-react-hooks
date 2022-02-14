import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSaerchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSaerchTerm)
  }, [defaultSaerchTerm])
  const search = async (term) => {
    const Response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(Response.data.items)
  }
  return [videos, search]
}

export default useVideos;