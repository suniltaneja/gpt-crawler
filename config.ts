import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.xxx.com",
  match: "https://www.xxx.com/**",
  selector: ".region-content",
  maxPagesToCrawl: 50,
  outputFileName: "xxx.json",
  maxTokens: 2000000,
};
