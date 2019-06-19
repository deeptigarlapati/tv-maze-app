export interface ISingleShowDetails {
  name: string;
  image: string;
  runtime: number;
  rating: string;
  language: string;
  genres: object;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  summary: string;
}
