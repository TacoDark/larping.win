(() => {
  const configSources =
    window.VOXLIS_CONFIG_SOURCES && typeof window.VOXLIS_CONFIG_SOURCES === "object"
      ? window.VOXLIS_CONFIG_SOURCES
      : {};

  if (!configSources.catalogs || typeof configSources.catalogs !== "object") {
    configSources.catalogs = {};
  }

  configSources.catalogs.roblox = {
    key: "roblox",
    routeBasePath: "roblox.html",
    homePath: "index.html",
    pageTitle: "Roblox",
    searchPlaceholder: "Search Roblox cards...",
    dataRoot: "public/data/roblox",
    statusApiUrl: "",
    suncApiUrl: "",
    pricingFallbackUrl: "",
    warningModalEnabled: true,
    cardNameOverrides: {
      arceusx: "Arceus X",
      sirhurt: "SirHurt",
      vegax: "Vega X",
      "yub-x": "YuB-X",
    },
    cardFolderOverrides: {
      "yub-x": ["YuB-x", "YuB-X"],
    },
    forceissues: {
      macos: false,
    },
    platformOrder: ["windows", "macos", "linux", "android", "ios"],
    platformLabels: {
      windows: "Windows",
      macos: "macOS",
      linux: "Linux",
      android: "Android",
      ios: "iOS",
    },
    platformIcons: {
      windows: "fab fa-windows",
      macos: "fab fa-apple",
      linux: "fab fa-linux",
      android: "fab fa-android",
      ios: "fab fa-apple",
    },
    tags: {
      decompiler: {
        icon: "fas fa-code",
        assetIcon: "icons/vectors/tag-decompiler.svg",
        label: "Decompiler",
        info: "This product includes decompiler functionality.",
      },
      kernel: {
        icon: "fas fa-microchip",
        assetIcon: "icons/vectors/tag-kernel.svg",
        toneClass: "is-kernel",
        label: "Kernel",
        info: "Due to this tool using a kernel-level driver, beware that there may be unexpected behaviour such as BSODs.",
      },
      "multi-instance": {
        icon: "fas fa-layer-group",
        assetIcon: "icons/vectors/tag-multi-instance.svg",
        label: "Multi-instance",
        info: "This product supports running multiple instances at once.",
      },
      freemium: {
        icon: "fas fa-key",
        assetIcon: "icons/vectors/tag-freemium.svg",
        label: "Freemium",
        info: "This product is free to use, but it relies on a key system.",
      },
      keysystem: {
        icon: "fas fa-key",
        assetIcon: "icons/vectors/tag-freemium.svg",
        toneClass: "is-keysystem",
        label: "Key-System",
        info: "This product is free to use, but it relies on a key system.",
      },
      insecure: {
        icon: "fas fa-triangle-exclamation",
        assetIcon: "icons/vectors/tag-insecure.svg",
        iconToneClass: "ph-insecure-ico",
        label: "Insecure",
        info: "This product is only shown in insecure mode because it is not recommended or not yet verified.",
      },
      raknet: {
        icon: "fas fa-network-wired",
        assetIcon: "icons/vectors/tag-raknet.svg",
        label: "RakNet",
        info: "This product supports RakNet lib.",
      },
      serverside: {
        icon: "fas fa-server",
        assetIcon: "icons/vectors/tag-serverside.svg",
        toneClass: "is-serverside",
        iconToneClass: "ph-serverside-ico",
        label: "Server-side",
        info: "This product supports server-side execution.",
      },
      inviteonly: {
        icon: "fas fa-envelope-open-text",
        toneClass: "is-inviteonly",
        label: "Invite Only",
        info: "This product is invite-only and requires a specific voucher or invitation to access.",
      },
      "open-source": {
        icon: "fab fa-github",
        label: "Open Source",
        info: "This product is open-source and its code is available to the public.",
      },
      ai: {
        icon: "fas fa-robot",
        label: "AI Enhanced",
        info: "This product uses artificial intelligence to enhance its features.",
      },
      "high-performance": {
        icon: "fas fa-bolt",
        label: "High Performance",
        info: "This product is optimized for speed and low resource usage.",
      },
      "custom-ui": {
        icon: "fas fa-paint-brush",
        label: "Custom UI",
        info: "This product features a unique and highly customizable user interface.",
      },
      scripthub: {
        icon: "fas fa-book",
        label: "Script Hub",
        info: "This product contains a large library of pre-made scripts.",
      },
      lite: {
        icon: "fas fa-leaf",
        label: "Lite",
        info: "A lightweight version of the tool, built for stability on lower-end devices.",
      },
    },
    filterableTags: ["multi-instance", "decompiler", "raknet", "serverside", "kernel", "keysystem", "open-source", "ai", "high-performance", "custom-ui", "scripthub", "lite"],
    showOnlyFilters: ["verified", "trending", "warning"],
    segmentFilters: [
      {
        field: "price",
        label: "Price",
        defaultValue: "all",
        options: [
          { value: "all", label: "All" },
          { value: "free", label: "Free" },
          { value: "paid", label: "Paid" },
        ],
      },
      {
        field: "type",
        label: "Type",
        defaultValue: "all",
        matcher: (card, _statusMap, value) => {
          if (value === "all") {
            return true;
          }

          if (value === "executor") {
            return card.cardType === "internal";
          }

          return card.cardType === value;
        },
        options: [
          { value: "all", label: "All" },
          { value: "external", label: "External" },
          { value: "executor", label: "Executor" },
        ],
      },
      {
        field: "updatedState",
        label: "Updated",
        defaultValue: "all",
        options: [
          { value: "all", label: "All" },
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
    typeLabels: {
      internal: "Executor",
      external: "Cheat Menu",
      serverside: "Server-side",
    },
    sortOptions: [
      { value: "random", label: "Random" },
      { value: "most-popular", label: "Most Popular" },
    ],
    defaultFilters: {
      search: "",
      sort: "most-popular",
      platforms: [],
      price: "all",
      type: "all",
      tags: [],
      verified: false,
      trending: false,
      warning: false,
      updatedState: "all",
      showInsecure: false,
    },
    labels: {
      itemPlural: "tools",
      itemSingular: "tool",
      sectionAriaLabel: "Roblox cards",
      summaryAriaLabel: "Roblox catalog summary",
      loadingMessage: "Fetching API status...",
      emptyLoadMessage: "The Roblox catalog data could not be loaded right now.",
      emptyFilteredMessage: "No Roblox cards match the current filters.",
      statsShowingPrefix: "Showing",
    },
    prompts: {
      filters: {
        title: "Try filters?",
        message: "Want to narrow the Roblox list a bit faster?",
      },
    },
    clickTracking: {
      enabled: false,
      endpointUrl: "",
      trackedActions: ["review", "more", "buy", "sunc", "tag", "website", "close"],
      trackedUiEvents: {
        navbar: [
          "logo-home",
          "desktop-home",
          "desktop-github",
          "desktop-themes",
          "desktop-filter",
          "mobile-quick-search",
          "mobile-quick-github",
          "mobile-quick-themes",
          "mobile-quick-filter",
          "mobile-top-search",
          "mobile-top-filter",
          "mobile-top-menu",
          "mobile-menu-home",
          "mobile-menu-github",
          "mobile-menu-themes",
          "mobile-menu-filter",
        ],
        themes: [
          "drawer-open",
          "drawer-close",
          "preset-select",
          "restore-defaults",
          "hide-featured-ads",
          "hide-promo",
        ],
        filters: ["drawer-open"],
        featured: ["hide-ads", "request"],
        promo: ["discord", "youtube", "trustpilot", "close"],
        footer: ["contact", "policy", "privacy"],
        toasts: [
          "filters-prompt-show",
          "filters-prompt-open",
          "filters-prompt-close",
          "themes-prompt-show",
          "themes-prompt-open",
          "themes-prompt-close",
        ],
      },
      actionLabels: {
        review: "Review",
        more: "More",
        "buy-keyempire": "Buy",
        sunc: "sUNC",
        tag: "Tag",
        website: "Website",
        close: "Close",
      },
    },
    insecureToggle: {
      enabled: true,
      buttonLabelOff: "Enable insecure mode",
      buttonLabelOn: "Insecure mode enabled",
      subtitle: "Insecure mode includes risky or not-yet-verified executors in the catalog results. These stay hidden by default for safety.",
      hintOff: "Insecure mode stays off by default for safety.",
      hintOn: "Insecure mode stays enabled until you turn this off or reset filters.",
    },
    inviteOnlyToggle: {
      enabled: true,
      buttonLabelOff: "Show invite-only results",
      buttonLabelOn: "Showing invite-only results",
      subtitle: "Include invite-only executors in the catalog results. These stay hidden by default.",
      hintOff: "Invite-only entries stay hidden by default.",
      hintOn: "Invite-only entries stay visible until you turn this off or reset filters.",
    },
  };

  window.VOXLIS_CONFIG_SOURCES = configSources;
})();
