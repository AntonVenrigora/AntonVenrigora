import { InputJsonValue } from "../../types";

export type RecipeCreateInput = {
  category?: "Option1" | null;
  ingredients?: InputJsonValue;
  instructions?: string | null;
  name?: string | null;
};
