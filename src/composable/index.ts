// @ts-ignore 
import { Logic as BaseLogic } from "@greep/logic";

export let Logic: typeof BaseLogic = BaseLogic;

export const SetFrontendLogic = (logic: typeof BaseLogic) => {
  Logic = logic;
};

export const scrollToSpecificItem = (containerId: string, itemId: string) => {
  const containerBox = document.getElementById(containerId);

  if (containerBox) {
    const serviceElement = document.getElementById(itemId);

    if (serviceElement) {
      const containerRect = containerBox.getBoundingClientRect();
      const targetRect = serviceElement.getBoundingClientRect();
      const offset = targetRect.left - containerRect.left;
      containerBox.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  }
};
