import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";

export default {
  input: "src/js/index.js",
  output: {
    file: "dist/js/index.js",
    format: "cjs",
  },

  input: "src/js/gameList.js",
  output: {
    file: "dist/js/gameList.js",
    format: "cjs",
  },
  plugins: [
    json(),
    copy({
      targets: [
        { src: "src/*.html", dest: "dist" },
        { src: "src/images", dest: "dist" },
        { src: ["src/js/*", "!src/js/data.json"], dest: "dist/js" },
      ],
    }),
  ],
};
