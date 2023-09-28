import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass additional1 additional2';

        expect(classNames('someClass', {}, [
            'additional1', 'additional2',
        ])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass additional1 additional2 mod1 mod2';

        expect(classNames(
            'someClass',
            { mod1: true, mod2: true },
            ['additional1', 'additional2'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass additional1 additional2 mod1';

        expect(classNames(
            'someClass',
            { mod1: true, mod2: false },
            ['additional1', 'additional2'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass additional1 additional2 mod2';

        expect(classNames(
            'someClass',
            { mod1: undefined, mod2: true },
            ['additional1', 'additional2'],
        )).toBe(expected);
    });
});
