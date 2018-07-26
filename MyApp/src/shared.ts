import { JsonServiceClient } from '@servicestack/client';

declare var global: any; // populated from package.json/karma/globals

export let client = new JsonServiceClient(global.BaseUrl || '/');

