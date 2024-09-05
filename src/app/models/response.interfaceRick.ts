export interface ResponseCharacters {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   string;
    location: string;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}


