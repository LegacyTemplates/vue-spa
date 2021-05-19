var Vue = require('vue');
var Controls = require('@servicestack/vue');

Vue.use(Controls.default);

Vue.config.productionTip = false;

async function mockFetch(url, config) {
    //ignore fetch when running tests or return custom results based on URL.
    return {
        ok: true,
        status: 200,
        headers: new Headers(),
        json: async () => ({}),
    }
}

beforeAll(() => jest.spyOn(window, 'fetch'))
beforeEach(() => window.fetch.mockImplementation(mockFetch))