import { Currency } from '../../../Currency';
import { Country } from '../../../Country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
}
