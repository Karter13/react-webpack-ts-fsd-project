import axios from 'axios';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // before creating TestAsyncThunk
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success login', async () => {
    //     const userValue = { username: 'admin', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({
    //         username: 'admin', password: '123',
    //     });
    //     const result: IResult = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toBe(userValue);
    // });
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({
    //         username: 'admin', password: '123',
    //     });
    //     const result: IResult = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('Вы ввели неверный логин или пароль');
    // });

    // after creating TestAsyncThunk
    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result: any = await thunk.callThunk({
            username: 'admin', password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result: any = await thunk.callThunk({
            username: 'admin', password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Вы ввели неверный логин или пароль');
    });
});
