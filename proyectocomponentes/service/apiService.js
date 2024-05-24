import { createApi } from 'unsplash-js';
import { createClient } from 'pexels';

const key = "lNgUeZCaZ8EFn6-fKq8NK4wJwXzvGCHSXBLoMecWhQ0";
const pexelsKey = "PnmBGy1pRoTPXwTVFwxWJK143V2rG8fRuUOZFrRdLU5Fjz9zNJF0nCZ4";

const unsplashApi = createApi({
  accessKey: key
});

const pexelsApi = createClient(pexelsKey);

export const getRandomImageCollection = async () => {
  // UNSPLASH
  /* try {
    const res = await unsplashApi.photos.getRandom({count: 10});
    return res;
  } catch {
    return "Error de servidor, no se puede recibir ninguna imagen!";
  } */

  // PEXELS
  try {
    const res = await pexelsApi.photos.curated({per_page: 15});
    return res;
  } catch (error) {
    return error;
  }
}

export const getImageCollectionByText = async (text) => {
  // UNSPLASH
  /* const res = await unsplash.search.getPhotos({
    query: text,
    page: 1,
    perPage: 10
  });
  return res; */

  // PEXELS
  try {
    const res = await pexelsApi.photos.search({per_page: 15, query: text});
    return res;
  } catch (error) {
    return(error);
  }
}