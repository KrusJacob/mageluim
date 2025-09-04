import type { IShopTypeItem } from "@/components/Shop/Shop";
import { SHOP_PRICE } from "@/constant/shop";
import { isArtifact } from "@/data/artifacts/class";
import { isSkill } from "@/data/skills/class";

export const getPrice = (item: IShopTypeItem) => {
  if (isSkill(item)) return SHOP_PRICE.skills[item.rarity];
  if (isArtifact(item)) return SHOP_PRICE.artifacts[item.rarity];
  if (item === "shardSkill") return SHOP_PRICE.shardSkill;
  if (item === "shardArtifact") return SHOP_PRICE.shardsArtifact;

  return 0;
};
