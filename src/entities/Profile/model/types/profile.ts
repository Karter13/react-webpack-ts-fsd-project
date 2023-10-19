import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: ProfileSchema;
    isLoading: boolean;
    errors?: string;
    readonly: boolean;
}
