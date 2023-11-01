import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('Should return ProfileData', () => {
        const data = {
            first: 'Михаил',
            lastname: 'Карамзин',
            age: 48,
            currency: Currency.EUR,
            country: Country.Belarus,
            city: 'Grodno',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
