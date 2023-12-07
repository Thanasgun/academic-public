export const environment = {
  production: true,
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
