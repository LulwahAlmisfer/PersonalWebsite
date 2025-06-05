import React from "react";

import { RenderBodyArgs } from "gatsby";

import { themeAtomKey } from "@/hooks";

const onRenderBody = ({
  setHtmlAttributes,
  setPreBodyComponents,
}: RenderBodyArgs) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme",
      dangerouslySetInnerHTML: {
        __html: `
          void function() {
            var cachedMode;

            try {
              var preferredTheme = JSON.parse(localStorage.getItem('${themeAtomKey}'));

              if (preferredTheme && preferredTheme.mode) {
                cachedMode = preferredTheme.mode;
              }
            } catch (err) { }

            function setTheme(newTheme) {
              document.documentElement.className = newTheme;
            }

            setTheme(cachedMode || 'light');
          }()
        `,
      },
    }),
  ]);

  setHtmlAttributes({ lang: "en" });
};

export { onRenderBody };
