/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    "introduction",
    {
      type: "doc",
      id: "overview",
      label: "What is GrowthBook?",
    },
    {
      type: "category",
      label: "Self-Hosting Guide",
      collapsed: false,
      link: {
        type: "doc",
        id: "self-host/index",
      },
      items: ["self-host/environment-variables", "self-host/config-yml"],
    },
    {
      type: "category",
      label: "Platform",
      collapsed: false,
      link: {
        type: "doc",
        id: "app/index",
      },
      items: [
        { type: "doc", id: "app/data-sources", label: "Data Sources" },
        { type: "doc", id: "app/metrics", label: "Metrics" },
        { type: "doc", id: "app/features", label: "Features" },
        { type: "doc", id: "app/experiments", label: "Experiments" },
        { type: "doc", id: "app/dimensions", label: "Dimensions" },
        {
          type: "doc",
          id: "app/visual-editor",
          label: "Visual Editor",
          className: "beta",
        },
        { type: "doc", id: "app/api", label: "API" },
        { type: "doc", id: "app/webhooks", label: "Webhooks" },
      ],
    },
    {
      type: "category",
      label: "How to Guides",
      collapsed: false,
      link: {
        type: "doc",
        id: "guide/index",
      },
      items: [
        { type: "doc", id: "guide/nextjs-and-growthbook", label: "Next.js" },
        {
          type: "doc",
          id: "guide/create-react-app-and-growthbook",
          label: "Create React App",
        },
        {
          type: "doc",
          id: "guide/GA-universal-analytics",
          label: "Google Analytics (UA)",
        },
        { type: "doc", id: "guide/mixpanel", label: "Mixpanel" },
        { type: "doc", id: "guide/matomo", label: "Matomo" },
        { type: "doc", id: "guide/bigquery", label: "BigQuery" },
        { type: "doc", id: "guide/rudderstack", label: "Rudderstack" },
        {
          type: "doc",
          id: "guide/rudderstack-and-nextjs-with-growthbook",
          label: "Rudderstack + Next.js",
        },
      ],
    },
    {
      type: "category",
      label: "SDKs",
      collapsed: false,
      link: {
        type: "doc",
        id: "lib/index",
      },
      items: [
        { type: "doc", id: "lib/js", label: "Javascript" },
        { type: "doc", id: "lib/react", label: "React" },
        { type: "doc", id: "lib/vue", label: "Vue.js" },
        { type: "doc", id: "lib/php", label: "PHP)" },
        { type: "doc", id: "lib/ruby", label: "Ruby" },
        { type: "doc", id: "lib/python", label: "Python" },
        { type: "doc", id: "lib/java", label: "Java", className: "pill-new" },
        { type: "doc", id: "lib/csharp", label: "C#", className: "pill-new" },
        { type: "doc", id: "lib/go", label: "Go" },
        { type: "doc", id: "lib/kotlin", label: "Kotlin (Android)" },
        { type: "doc", id: "lib/flutter", label: "Flutter" },
        {
          type: "link",
          label: "Swift (iOS)",
          href: "https://github.com/growthbook/growthbook-swift",
        },
        { type: "doc", id: "lib/build-your-own", label: "Build Your Own" },
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "tools/chrome-extension",
          label: "Chrome Extension",
        },
        {
          type: "doc",
          id: "tools/vscode-extension",
          label: "Visual Studio Code Extension",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "integrations/slack",
          label: "Slack alerts",
          className: "pill-new",
        },
      ],
    },
    { type: "doc", id: "faq", label: "FAQ" },
    { type: "doc", id: "statistics", label: "Statistics" },

    //     href: "/self-host",
    //     name: "Self-Host",
    //     links: [
    //       {
    //         href: "/self-host/env",
    //         name: "Environment Variables",
    //       },
    //       {
    //         href: "/self-host/config",
    //         name: "Config.yml",
    //       },
    //     ],
    //   },
    //   {
    //     href: "/app",
    //     name: "Platform",
    //     links: [
    //       {
    //         href: "/app/datasources",
    //         name: "Data Sources",
    //       },
    //       {
    //         href: "/app/metrics",
    //         name: "Metrics",
    //       },
    //       {
    //         href: "/app/features",
    //         name: "Features",
    //       },
    //       {
    //         href: "/app/experiments",
    //         name: "Experiments",
    //       },
    //       {
    //         href: "/app/dimensions",
    //         name: "Dimensions",
    //       },
    //       {
    //         href: "/app/visual",
    //         name: "Visual Editor",
    //         beta: true,
    //       },
    //       {
    //         href: "/app/api",
    //         name: "API",
    //       },
    //       {
    //         href: "/app/webhooks",
    //         name: "Webhooks",
    //       },
    //     ],
    //   },
    //   {
    //     href: "/guide",
    //     name: "How to",
    //     links: [
    //       {
    //         href: "/guide/nextjs-and-growthbook",
    //         name: "Next.js",
    //       },
    //       {
    //         href: "/guide/create-react-app-and-growthbook",
    //         name: "Create React App",
    //       },
    //       {
    //         href: "/guide/GA-universal-analytics",
    //         name: "Google Analytics - UA",
    //       },
    //       {
    //         href: "/guide/mixpanel",
    //         name: "Mixpanel",
    //       },
    //       {
    //         href: "/guide/matomo",
    //         name: "Matomo",
    //       },
    //       {
    //         href: "/guide/bigquery",
    //         name: "BigQuery",
    //       },
    //       {
    //         href: "/guide/rudderstack",
    //         name: "Rudderstack",
    //       },
    //       {
    //         href: "/guide/rudderstack-and-nextjs-with-growthbook",
    //         name: "Rudderstack + Next.js",
    //       },
    //     ],
    //   },
    //   {
    //     href: "/lib",
    //     name: "SDKs",
    //     links: [
    //       {
    //         href: "/lib/js",
    //         name: "Javascript",
    //       },
    //       {
    //         href: "/lib/react",
    //         name: "React",
    //       },
    //       {
    //         href: "/lib/php",
    //         name: "PHP",
    //       },
    //       {
    //         href: "/lib/ruby",
    //         name: "Ruby",
    //       },
    //       {
    //         href: "/lib/python",
    //         name: "Python",
    //       },
    //       {
    //         href: "/lib/go",
    //         name: "Go",
    //       },
    //       {
    //         href: "/lib/kotlin",
    //         name: "Kotlin (Android)",
    //       },
    //       {
    //         href: "/lib/flutter",
    //         name: "Flutter",
    //       },
    //       {
    //         href: "/lib/build-your-own",
    //         name: "Build Your Own",
    //       },
    //     ],
    //   },
    //   {
    //     href: "/integrations",
    //     name: "Integrations",
    //     links: [
    //       {
    //         href: "/integrations/vercel",
    //         name: "Vercel",
    //       },
    //     ],
    //   },
    //   {
    //     href: "/faq",
    //     name: "FAQ",
    //   },
    //   {
    //     href: "/statistics",
    //     name: "Statistics",
    //   },
    // ];
    // ],
    // // But you can create a sidebar manually
    // /*
    // tutorialSidebar: [
    //   'intro',
    //   'hello',
    //   {
    //     type: 'category',
    //     label: 'Tutorial',
    //     items: ['tutorial-basics/create-a-document'],
    //   },
  ],
};

module.exports = sidebars;
