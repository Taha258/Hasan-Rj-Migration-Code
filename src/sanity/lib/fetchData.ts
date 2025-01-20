import { client } from './client';

export const FetchCarsData = async () => {
    try {
      const query = `*[_type == "product" && "electronics" in tags]{
            _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url
        }`;
      
      return await client.fetch(query);
    } catch (error) {
      console.error('Error fetching from Sanity:', error);
      throw error;
    }
  };
  