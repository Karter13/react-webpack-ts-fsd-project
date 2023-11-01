import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    first: 'Михаил',
    lastname: 'Карамзин',
    age: 48,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Grodno',
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firs and last name', async () => {
        const result = validateProfileData({
            ...data,
            first: undefined,
            lastname: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
