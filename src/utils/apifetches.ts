import axios from "axios";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID,
    "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
  },
};

const imageOpts = {
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
  params: { q: "london", pageNumber: "1", pageSize: "10", autoCorrect: "true" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID,
    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  },
};

// Generic fetch function with error handling
export const fetch = async (url: string, opts?: any) => {
  try {
    const newOptions = { ...options, ...opts };
    const res = await axios.get(url, newOptions);
    return res.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// Fetch place details by query
export const fetchPlaces = async (query: string) => {
  try {
    const url = `https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${query}&language=en`;
    const res = await fetch(url);
    return res;
  } catch (error) {
    console.error(`Error fetching places for query "${query}":`, error);
    throw new Error("Failed to fetch places. Please check your query.");
  }
};

// Fetch nearby places based on query (latitude, longitude)
export const fetcNearby = async (query: string) => {
  try {
    const url = `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${query}&radius=50000&language=en`;
    const res = await fetch(url);
    return res;
  } catch (error) {
    console.error(
      `Error fetching nearby places for location "${query}":`,
      error
    );
    throw new Error(
      "Failed to fetch nearby places. Please check your location input."
    );
  }
};

export const searchImages = async (query: string) => {
  try {
    const res = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query,
        client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
        per_page: 10,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    throw new Error("Failed to fetch images. Please try again later.");
  }
};
