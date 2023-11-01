import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Should return Error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'ERROR' },
        };

        expect(getProfileError(state as StateSchema)).toEqual('ERROR');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
