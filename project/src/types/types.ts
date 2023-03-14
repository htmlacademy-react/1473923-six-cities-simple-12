type GenreCityLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};

type GenreCity = {
    location: GenreCityLocation;
    name: string;
};

type GenreHost = {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
};

type GenreLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};
export type offersType = {
    bedrooms: number;
    city: GenreCity;
    description: string;
    goods: string[];
    host: GenreHost;
    id: number;
    images: string[];
    isFavorite: boolean;
    isPremium: boolean;
    location: GenreLocation;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
};

type GenerUser = {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
};

export type User = {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: GenerUser;
};
