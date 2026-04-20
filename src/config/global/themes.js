(() => {
  const deepFreeze = (value) => {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) {
      return value;
    }

    Object.getOwnPropertyNames(value).forEach((key) => {
      deepFreeze(value[key]);
    });

    return Object.freeze(value);
  };

  const existingConfig =
    window.VOXLIS_CONFIG && typeof window.VOXLIS_CONFIG === "object"
      ? { ...window.VOXLIS_CONFIG }
      : {};

  existingConfig.themes = {
    storageKeys: {
      theme: "voxlis-theme",
      drawerWidth: "voxlis-theme-drawer-width",
      hideFeaturedAds: "voxlis-hide-featured-ads",
      hidePromo: "voxlis-hide-promo",
      hideToastPopups: "voxlis-hide-toast-popups",
      hideNavbarWarning: "voxlis-hide-navbar-warning",
      hideBottomFade: "voxlis-hide-bottom-fade",
      customThemeColor: "voxlis-custom-accent-color",
    },
    ids: {
      default: "blue",
      custom: "custom",
    },
    events: {
      change: "site-theme-change",
    },
    drawer: {
      exitFallbackMs: 260,
      defaultWidth: 384,
      minWidth: 320,
      maxWidth: 720,
      desktopMediaQuery: "(min-width: 769px)",
    },
    customAccent: {
      defaultHex: "#22c55e",
    },
    groups: [
      { id: "accent", label: "Color Variants" },
    ],
    options: [
      {
        id: "blue",
        label: "Monochrome",
        previewGradient:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(200, 200, 200, 0.12) 56%, rgba(150, 150, 150, 0.1) 100%)",
        swatch: "#FFFFFF",
        group: "accent",
      },
      {
        id: "custom",
        label: "Custom",
        swatch: "#22C55E",
        group: "accent",
        supportsCustomColor: true,
      },
    ],
  };

  window.VOXLIS_CONFIG = deepFreeze(existingConfig);
})();
