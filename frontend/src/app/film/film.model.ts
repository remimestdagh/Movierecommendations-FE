interface FilmJson {
    id: number;
    titel: string;
    score: number;
    regisseur: string;
    acteurs: string[];
    genres: string[];
    titleImage: string;
    runtime: number;
    year: number;
    isFavourite:boolean;


}
export class Film {

    constructor(
        private _id: number,
        private _name: string,
        private _score: number,
        private _acteurs = new Array<string>(), private _titleImage: string, private _year: number, private _genres = new Array<string>(), private _regisseur: string,private _isFavourite:boolean,
    ) { }



    static fromJSON(json: FilmJson): Film {
        const rec = new Film(json.id, json.titel, json.score, json.acteurs, json.titleImage, json.year, json.genres, json.regisseur,json.isFavourite);
        return rec;
    }

    toJSON(): FilmJson {
        return <FilmJson>{
            titel: this.name,


        };
    }

    get id(): number {
        return this._id;
    }
    get name(): string { return this._name; }

    get acteurs(): string[] {
        return this._acteurs;
    }
    get score(): number {
        return this._score;
    }
    get titleImage(): string {
        return this._titleImage;
    }
    get year(): number {
        return this._year;
    }
    get genres(): string[] {
        return this._genres;
    }
    get regisseur():string{
        return this._regisseur;
    }
    get isFavourite():boolean{
        return this._isFavourite;
    }

}
