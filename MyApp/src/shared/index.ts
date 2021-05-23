import Vue from 'vue';
import { JsonServiceClient, GetNavItemsResponse, UserAttributes, IAuthSession } from '@servicestack/client';

declare let global: any; // populated from package.json/jest

export const client = new JsonServiceClient(global.testURL || '/');

export {
    errorResponse, errorResponseExcept,
    splitOnFirst, toPascalCase,
    queryString,
} from '@servicestack/client';

export {
    ResponseStatus, ResponseError,
    Authenticate, AuthenticateResponse,
    Register,
    Hello, HelloResponse,
} from './dtos';

import { Authenticate, AuthenticateResponse } from './dtos';

export enum Roles {
  Admin = 'Admin',
}

// Shared state between all Components
interface State {
  nav: GetNavItemsResponse;
  userSession: IAuthSession | null;
  userAttributes?: string[];
  roles?: string[];
  permissions?: string[];
}
export const store: State = {
  nav: global.NAV_ITEMS as GetNavItemsResponse || { results: [], navItemsMap: {} },
  userSession: global.AUTH as AuthenticateResponse,
  userAttributes: UserAttributes.fromSession(global.AUTH),
};

class EventBus extends Vue {
    store = store;
}
export const bus = new EventBus({ data: store });

bus.$on('signout', async () => {
    bus.$set(store, 'userSession', null);
    bus.$set(store, 'userAttributes', null);

    await client.post(new Authenticate({ provider: 'logout' }));
});
export const signout = () => bus.$emit('signout');

bus.$on('signin', (userSession: AuthenticateResponse) => {
    const userAttributes = UserAttributes.fromSession(userSession);
    bus.$set(store, 'userSession', userSession);
    bus.$set(store, 'userAttributes', userAttributes);
});

export const checkAuth = async () => {
    try {
        bus.$emit('signin', await client.post(new Authenticate()));
    } catch (e) {
        bus.$emit('signout');
    }
};
