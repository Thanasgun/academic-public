export const environment = {
  production: true,
  endpoint: {
    api: "${endpoint_api}",
    adfsUrl: "${endpoint_adfsUrl}",
    adfsValidUrl: "${endpoint_adfsValidUrl}",
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