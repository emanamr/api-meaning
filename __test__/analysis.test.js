import { analysis } from '../client/js/analysisText'

describe('Test: "analysis" should exist' , () => {
    test('It should be present!', async () => {
        expect(analysis).toBeDefined();
    });
});

describe('Test: "analysis" should be of the type function' , () => {
    test('It should be a function', async () => {
        expect(typeof analysis).toBe("function");
    });
});