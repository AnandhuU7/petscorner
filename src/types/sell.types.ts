export interface ISell {
    email: string;
    breed: string;
    type: string;
    date: Date;
    description: string;
    contactus: string;
    image: any;
    _id: string;
    rating: IRating;
}

export interface IRatingParams {
    value: number;
    id: string;
}

export interface IRating {
    five: number;
    four: number;
    three: number;
    two: number;
    one: number;
}
