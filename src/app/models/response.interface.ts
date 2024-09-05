export interface ResponsePokemon {
    count:    number;
    next:     string|null;
    previous: string|null;
    results:  Result[];
}

export interface Result {
    status: string;
    name: string;
    url:  string;
}