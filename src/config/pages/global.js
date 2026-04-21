(() => {
  const isLocalPreview = ["localhost", "127.0.0.1"].includes(String(window.location.hostname || "").toLowerCase());

  const configSources =
    window.VOXLIS_CONFIG_SOURCES && typeof window.VOXLIS_CONFIG_SOURCES === "object"
      ? window.VOXLIS_CONFIG_SOURCES
      : {};

  configSources.global = {
    repository: {
      owner: "TacoDark",
      name: "larping.win",
      branch: "main",
      commitEndpoint: "",
    },
    statusLabels: {
      updated: "Updated",
      notUpdated: "Non updated",
    },
    sortOptions: [
      { value: "random", label: "Random" }
    ],
    badges: {
      verified: {
        id: "filterVerified",
        field: "verified",
        label: "Verified",
        icon: "fas fa-circle-check",
        iconToneClass: "ph-good-ico",
        toneClass: "is-verified",
        toastIcon: "fa-circle-check",
        info: "This product has a documented and verified more info page.",
      },
      trending: {
        id: "filterTrending",
        field: "trending",
        label: "Trending",
        icon: "fas fa-arrow-trend-up",
        toneClass: "is-trending",
        toastIcon: "fa-arrow-trend-up",
        info: "This product is currently marked as trending on the catalog.",
      },
      warning: {
        id: "filterWarning",
        field: "warning",
        label: "Warning",
        icon: "fas fa-triangle-exclamation",
        iconToneClass: "ph-warn-ico",
        toneClass: "is-warning",
        toastIcon: "fa-triangle-exclamation",
        info:
          "larping.win recommends reading more about this product before continuing with any purchases, so you know what you are getting.",
      },
      warningred: {
        field: "warningred",
        label: "High-Risk Warning",
        icon: "fas fa-triangle-exclamation",
        iconToneClass: "ph-warn-red-ico",
        toastIcon: "fa-triangle-exclamation",
        info: "This product has a high-risk warning on larping.win.",
      },
    },
    promo: {
      titlePrefix: "Join our ",
      titleAccent: "Discord",
      titleSuffix: " Community!",
      description: "Giveaways, automatic notification for software updates, and more!",
      actions: [
        {
          href: "https://discord.gg/ZNMPYWTAMx",
          label: "Discord",
          trackingKey: "discord",
          buttonClassName: "promo-action-button-discord",
          iconClass: "fab fa-discord",
        }
      ],
    },
    featured: {
      enabled: false
    },
  };

  window.VOXLIS_CONFIG_SOURCES = configSources;
})();
