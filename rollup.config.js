import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";

export default {
  input: "src/js/index.js",
  output: {
    file: "dist/js/index.js",
    format: "cjs",
  },
  plugins: [
    json(),
    copy({
      targets: [
        { src: "src/*.html", dest: "dist" },
        { src: "src/images", dest: "dist" },
      ],
    }),
  ],
};
