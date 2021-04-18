export interface Related {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntity {
    backdrop_path: string;
    genre_ids?: (number)[] | null;
    original_language: string;
    original_title: string;
    poster_path: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    overview: string;
    release_date: string;
    title: string;
    id: number;
    adult: boolean;
    popularity: number;
  }
  