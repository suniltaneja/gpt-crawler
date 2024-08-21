import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.hrsa.gov",
  match: "https://www.hrsa.gov/**",
  selector: ".region-content",
  maxPagesToCrawl: 50,
  outputFileName: "hrsagov.json",
  maxTokens: 2000000,
};
