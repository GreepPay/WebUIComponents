// @ts-ignore
import { Logic as BaseLogic } from "@greep/logic"

export let Logic: typeof BaseLogic = BaseLogic

export const SetFrontendLogic = (logic: typeof BaseLogic) => {
  Logic = logic
}
