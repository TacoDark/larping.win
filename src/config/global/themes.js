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
      theme: "larping-theme",
      drawerWidth: "larping-theme-drawer-width",
      hideFeaturedAds: "larping-hide-featured-ads",
      hidePromo: "larping-hide-promo",
      hideToastPopups: "larping-hide-toast-popups",
      hideNavbarWarning: "larping-hide-navbar-warning",
      hideBottomFade: "larping-hide-bottom-fade",
      customThemeColor: "larping-custom-accent-color",
    },
    ids: {
      default: "purple",
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
      defaultHex: "#a855f7",
    },
    groups: [
      { id: "accent", label: "Color Variants" },
    ],
    options: [
      {
        id: "purple",
        label: "Ametrine",
        previewGradient:
          "linear-gradient(90deg, rgba(168, 85, 247, 0.18) 0%, rgba(139, 92, 246, 0.12) 56%, rgba(109, 40, 217, 0.1) 100%)",
        swatch: "#A855F7",
        group: "accent",
      },
      {
        id: "custom",
        label: "Custom",
        swatch: "#A855F7",
        group: "accent",
        supportsCustomColor: true,
      },
    ],
  };

  window.VOXLIS_CONFIG = deepFreeze(existingConfig);
})();
