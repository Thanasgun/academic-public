// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    api: "http://api_endpoint_url:port/gateway-api/",
    adfsUrl: "http://adfs_endpoint_url:port",
    adfsValidUrl: "http://adfs_endpoint_url:port,https://adfs_endpoint_url:port"
  },
  auth: {
    userData: "academic-website-app-user-data",
    tokenName: "academic-website-app-token",
    refreshTokenName: "academic-website-app-refresh-token",
    tokenType: "academic-website-app-token-type",
    isRemember: "academic-website-app-token-remember",
    sysKey: "academic-website"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
