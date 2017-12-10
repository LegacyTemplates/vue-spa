import { JsonServiceClient } from '@servicestack/client';

declare var global; //populated from package.json/karma/globals

export var client = new JsonServiceClient(global.BaseUrl || '/');

