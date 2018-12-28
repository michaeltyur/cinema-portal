export class Movie{
    
    id: string;
    title: string;
    year: number;
    runtime: string;
    genre: string
    director: string;
    poster: string;

    constructor(){
        this.id='';
        this.title='';
        this.runtime='';
        this.genre==''; 
        this.director='';
        this.poster='../../assets/No_Image_Available.jpg'; 
    }
}