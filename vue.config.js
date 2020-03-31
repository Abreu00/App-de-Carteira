module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "FreakProof Wallet",
    themeColor: "#EEEEEE",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      name: "FreakProof Wallet",
      short_ame: "FreakProof"
    },
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "dev/sw.js"
      // ...other Workbox options...
    }
  }
};
