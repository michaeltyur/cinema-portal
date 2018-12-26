import { Rating } from "./rating";

export interface Movie{

    title: string;
    year: number;
    rated: string;
    released: Date;
    season: number;
    episode: number;
    runtime: string;
    genre: string
    director: string;
    writer: string
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    Poster: string;
    ratings:Array<Rating>;
    metascore: string;
    imdbRating: number
    imdbVotes: number
    imdbID: string;
    seriesID: string;
    type: string;
    Response: string
}