export const reactMainAppInfoMap = {
  react16: {
    name: "react16",
    linkSelector: "a[href='#/react16']",
    mountedMessage: "react16 afterMount 生命周期",
    entryLifecycles: ["react16 beforeLoad 生命周期", "react16 beforeMount 生命周期", "react16 afterMount 生命周期"],
    leaveLifecycles: ["react16 beforeUnmount 生命周期", "react16 afterUnmount 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(1) > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(1)")`,
    homeQueryParam: "%2Fhome",
    dialogNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(2)")`,
    dialogNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(1) > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(2)")`,
    dialogQueryParam: "%7Bprefix-dialog%7D",
    dialogMountedMessage: "react16 dialog mounted",
    routeNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(1) > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > div:nth-child(3) > div > div > button")`,
    routeMountedMessage: "react16 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(1) > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(4)")`,
    nestNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(1) > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(5)")`,
    fontNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(6)")`,
    fontMountedMessage: `react16 font mounted`,
    preloadTitleJsSelector: 'window.frames.react16.document.querySelector("#root > div > div:nth-child(3) > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='react16']").contentDocument.querySelector("#root > div > div:nth-child(3) > h2")`,
    titleJsSelector:
      'document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > div:nth-child(3) > h2")',
    titleText: "react16示例",
  },
  react17: {
    name: "react17",
    linkSelector: "a[href='#/react17']",
    mountedMessage: "react17 activated 生命周期",
    entryLifecycles: ["react17 beforeLoad 生命周期", "react17 activated 生命周期"],
    leaveLifecycles: ["react17 deactivated 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(2) > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(1)")`,
    homeQueryParam: "%2Fhome",
    dialogNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(2) > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(2)")`,
    dialogQueryParam: "%2Fdialog",
    dialogMountedMessage: "react17 dialog mounted",
    stateNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(5)")`,
    stateMountedMessage: "react17 state mounted",
    stateNumberJsSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > div > p.number-content > span")`,
    stateJumpVue3JsSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > div > p.number-content > button.ant-btn.app-jump")`,
    routeNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(2) > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > div > div > button")`,
    routeMountedMessage: "react17 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(2) > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(4)")`,
    preloadTitleJsSelector: 'window.frames.react17.document.querySelector("#root > div > header > div > div > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='react17']").contentDocument.querySelector("#root > div > header > div > div > h2")`,
    titleJsSelector:
      'document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > h2")',
    titleText: "react17示例",
  },
  vue2: {
    name: "vue2",
    linkSelector: "a[href='#/vue2']",
    mountedMessage: "vue2 afterMount 生命周期",
    entryLifecycles: ["vue2 beforeLoad 生命周期", "vue2 beforeMount 生命周期", "vue2 afterMount 生命周期"],
    leaveLifecycles: ["vue2 beforeUnmount 生命周期", "vue2 afterUnmount 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(3) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(1)")`,
    homeQueryParam: "%2F%23%2Fhome",
    dialogNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(3) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogQueryParam: "%2F%23%2Fdialog",
    dialogMountedMessage: "vue2 dialog mounted",
    routeNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(3) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.content > button")`,
    routeMountedMessage: "vue2 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(3) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(4)")`,
    preloadTitleJsSelector: 'window.frames.vue2.document.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='vue2']").contentDocument.querySelector("#app > div:nth-child(2) > div.hello > h2")`,
    titleJsSelector:
      'document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    titleText: "Vue2示例",
  },
  vue3: {
    name: "vue3",
    linkSelector: "a[href='#/vue3']",
    mountedMessage: "vue3 activated 生命周期",
    entryLifecycles: ["vue3 beforeLoad 生命周期", "vue3 activated 生命周期"],
    leaveLifecycles: ["vue3 deactivated 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(4) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(1)")`,
    homeQueryParam: "%2Fhome",
    dialogNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(4) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogQueryParam: "%2Fdialog",
    dialogMountedMessage: "vue3 dialog mounted",
    stateNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(5)")`,
    stateNumberJsSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > p.number-content > span")`,
    stateJumpReact17JsSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > p.number-content > button:nth-child(4)")`,
    stateMountedMessage: "vue3 state mounted",
    routeNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(4) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > button")`,
    routeMountedMessage: "vue3 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#root > div > div.content > div > div:nth-child(4) > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(4)")`,
    preloadTitleJsSelector: 'window.frames.vue3.document.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='vue3']").contentDocument.querySelector("#app > div:nth-child(2) > div.hello > h2")`,
    titleJsSelector:
      'document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    titleText: "Vue3示例",
  },
  vite: {
    name: "vite",
    linkSelector: "a[href='#/vite']",
    mountedMessage: "vite afterMount 生命周期",
    dialogNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogMountedMessage: "vite dialog mounted",
    entryLifecycles: ["vite beforeLoad 生命周期", "vite beforeMount 生命周期", "vite afterMount 生命周期"],
    leaveLifecycles: ["vite beforeUnmount 生命周期", "vite afterUnmount 生命周期"],
    preloadTitleJsSelector: 'window.frames.vite.document.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    routeNavSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > button")`,
    routeMountedMessage: "vite location mounted",
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='vite']").contentDocument.querySelector("#app > div:nth-child(2) > div.hello > h2")`,
    titleJsSelector:
      'document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    titleText: "Vue3 + vite示例",
  },
  angular12: {
    name: "angular12",
    linkSelector: "a[href='#/angular12']",
    mountedMessage: "angular12 afterMount 生命周期",
    entryLifecycles: [
      "angular12 beforeLoad 生命周期",
      "angular12 beforeMount 生命周期",
      "angular12 afterMount 生命周期",
    ],
    leaveLifecycles: ["angular12 beforeUnmount 生命周期", "angular12 afterUnmount 生命周期"],
    preloadTitleJsSelector: `window.frames.angular12.document.querySelector("body > app-root > div.content > div.card.highlight-card.card-small > span")`,
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='angular12']").contentDocument.querySelector("body > app-root > div.content > div.card.highlight-card.card-small > span")`,
    titleJsSelector:
      'document.querySelector("#root > div > div.content > div > wujie-app").shadowRoot.querySelector("body > app-root > div.content > div.card.highlight-card.card-small > span")',
    titleText: "angular12 app is running!",
  },
};
export const reactMainAppInfoList = Object.entries(reactMainAppInfoMap).map((item) => item[1]);
export const reactMainAppNameList = Object.entries(reactMainAppInfoMap).map((item) => item[0]);

export const vueMainAppInfoMap = {
  react16: {
    name: "react16",
    linkSelector: "a[href='/react16']",
    mountedMessage: "react16 afterMount 生命周期",
    entryLifecycles: ["react16 beforeLoad 生命周期", "react16 beforeMount 生命周期", "react16 afterMount 生命周期"],
    leaveLifecycles: ["react16 beforeUnmount 生命周期", "react16 afterUnmount 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(1) > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(1)")`,
    homeQueryParam: "%2Fhome",
    dialogNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(2)")`,
    dialogNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(1) > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(2)")`,
    dialogQueryParam: "%7Bprefix-dialog%7D",
    dialogMountedMessage: "react16 dialog mounted",
    routeNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(1) > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > div:nth-child(3) > div > div > button")`,
    routeMountedMessage: "react16 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(1) > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(4)")`,
    nestNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(1) > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(5)")`,
    fontNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > nav > a:nth-child(6)")`,
    fontMountedMessage: `react16 font mounted`,
    preloadTitleJsSelector: 'window.frames.react16.document.querySelector("#root > div > div:nth-child(3) > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='react16']").contentDocument.querySelector("#root > div > div:nth-child(3) > h2")`,
    titleJsSelector:
      'document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > div:nth-child(3) > h2")',
    titleText: "react16示例",
  },
  react17: {
    name: "react17",
    linkSelector: "a[href='/react17']",
    mountedMessage: "react17 activated 生命周期",
    entryLifecycles: ["react17 beforeLoad 生命周期", "react17 activated 生命周期"],
    leaveLifecycles: ["react17 deactivated 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(2) > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(1)")`,
    homeQueryParam: "%2Fhome",
    dialogNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(2) > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(2)")`,
    dialogQueryParam: "%2Fdialog",
    dialogMountedMessage: "react17 dialog mounted",
    stateNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(5)")`,
    stateMountedMessage: "react17 state mounted",
    stateNumberJsSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > div > p.number-content > span")`,
    stateJumpVue3JsSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > div > p.number-content > button.ant-btn.app-jump")`,
    routeNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(2) > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > div > div > button")`,
    routeMountedMessage: "react17 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(2) > wujie-app").shadowRoot.querySelector("#root > div > header > div > nav > a:nth-child(4)")`,
    preloadTitleJsSelector: 'window.frames.react17.document.querySelector("#root > div > header > div > div > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='react17']").contentDocument.querySelector("#root > div > header > div > div > h2")`,
    titleJsSelector:
      'document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#root > div > header > div > div > h2")',
    titleText: "react17示例",
  },
  vue2: {
    name: "vue2",
    linkSelector: "a[href='/vue2']",
    mountedMessage: "vue2 afterMount 生命周期",
    entryLifecycles: ["vue2 beforeLoad 生命周期", "vue2 beforeMount 生命周期", "vue2 afterMount 生命周期"],
    leaveLifecycles: ["vue2 beforeUnmount 生命周期", "vue2 afterUnmount 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(3) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(1)")`,
    homeQueryParam: "%2F%23%2Fhome",
    dialogNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(3) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogQueryParam: "%2F%23%2Fdialog",
    dialogMountedMessage: "vue2 dialog mounted",
    routeNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(3) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.content > button")`,
    routeMountedMessage: "vue2 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(3) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(4)")`,
    preloadTitleJsSelector: 'window.frames.vue2.document.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='vue2']").contentDocument.querySelector("#app > div:nth-child(2) > div.hello > h2")`,
    titleJsSelector:
      'document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    titleText: "Vue2示例",
  },
  vue3: {
    name: "vue3",
    linkSelector: "a[href='/vue3']",
    mountedMessage: "vue3 activated 生命周期",
    entryLifecycles: ["vue3 beforeLoad 生命周期", "vue3 activated 生命周期"],
    leaveLifecycles: ["vue3 deactivated 生命周期"],
    homeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(4) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(1)")`,
    homeQueryParam: "%2Fhome",
    dialogNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(4) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogQueryParam: "%2Fdialog",
    dialogMountedMessage: "vue3 dialog mounted",
    stateNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(5)")`,
    stateNumberJsSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > p.number-content > span")`,
    stateJumpReact17JsSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > p.number-content > button:nth-child(4)")`,
    stateMountedMessage: "vue3 state mounted",
    routeNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(4) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > button")`,
    routeMountedMessage: "vue3 location mounted",
    communicationNavSelectorInAll: `document.querySelector("#app > div.content > div > div:nth-child(4) > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(4)")`,
    preloadTitleJsSelector: 'window.frames.vue3.document.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='vue3']").contentDocument.querySelector("#app > div:nth-child(2) > div.hello > h2")`,
    titleJsSelector:
      'document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    titleText: "Vue3示例",
  },
  vite: {
    name: "vite",
    linkSelector: "a[href='/vite']",
    mountedMessage: "vite afterMount 生命周期",
    dialogNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(2)")`,
    dialogMountedMessage: "vite dialog mounted",
    entryLifecycles: ["vite beforeLoad 生命周期", "vite beforeMount 生命周期", "vite afterMount 生命周期"],
    leaveLifecycles: ["vite beforeUnmount 生命周期", "vite afterUnmount 生命周期"],
    routeNavSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#nav > a:nth-child(3)")`,
    routeJumpButtonSelector: `document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div.content > button")`,
    routeMountedMessage: "vite location mounted",
    preloadTitleJsSelector: 'window.frames.vite.document.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='vite']").contentDocument.querySelector("#app > div:nth-child(2) > div.hello > h2")`,
    titleJsSelector:
      'document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("#app > div:nth-child(2) > div.hello > h2")',
    titleText: "Vue3 + vite示例",
  },
  angular12: {
    name: "angular12",
    linkSelector: "a[href='/angular12']",
    mountedMessage: "angular12 afterMount 生命周期",
    entryLifecycles: [
      "angular12 beforeLoad 生命周期",
      "angular12 beforeMount 生命周期",
      "angular12 afterMount 生命周期",
    ],
    leaveLifecycles: ["angular12 beforeUnmount 生命周期", "angular12 afterUnmount 生命周期"],
    preloadTitleJsSelector:
      'window.frames.angular12.document.querySelector("body > app-root > div.content > div.card.highlight-card.card-small > span")',
    degradeTitleJsSelector: `window.document.querySelector("iframe[data-wujie-id='angular12']").contentDocument.querySelector("body > app-root > div.content > div.card.highlight-card.card-small > span")`,
    titleJsSelector:
      'document.querySelector("#app > div.content > div > wujie-app").shadowRoot.querySelector("body > app-root > div.content > div.card.highlight-card.card-small > span")',
    titleText: "angular12 app is running!",
  },
};
export const vueMainAppInfoList = Object.entries(vueMainAppInfoMap).map((item) => item[1]);
export const vueMainAppNameList = Object.entries(vueMainAppInfoMap).map((item) => item[0]);
