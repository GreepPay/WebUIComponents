// @ts-ignore
import { Logic as BaseLogic } from "../../logic/logic";

export let Logic: typeof BaseLogic = BaseLogic;

export const SetFrontendLogic = (logic: typeof BaseLogic) => {
  Logic = logic;
};
