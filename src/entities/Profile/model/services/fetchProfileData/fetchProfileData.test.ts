import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    first: 'Михаил',
    lastname: 'Карамзин',
    age: 48,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Grodno',
    username: 'admin',
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result: any = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result: any = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
