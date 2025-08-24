import { ARTIFACTS_COMMON } from "./artifacts_common";
import { ARTIFACTS_EPIC } from "./artifacts_epic";
import { ARTIFACTS_LEGENDARY } from "./artifacts_legendary";
import { ARTIFACTS_RARE } from "./artifacts_rare";

export const ALL_ARTIFACT_LIST = [
  ...ARTIFACTS_COMMON,
  ...ARTIFACTS_RARE,
  ...ARTIFACTS_EPIC,
  ...ARTIFACTS_LEGENDARY,
];
