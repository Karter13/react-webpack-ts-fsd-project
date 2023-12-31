import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true while loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false with default state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: false },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
