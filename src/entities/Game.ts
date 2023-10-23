import Genre from './Genre';
import Platform from './Platform';
import publisher from './Publisher';

export default interface Game {
  id: number;
  name: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  publishers: publisher[];
  rating_top: number;
  slug: string;
  description_raw: string;
}
