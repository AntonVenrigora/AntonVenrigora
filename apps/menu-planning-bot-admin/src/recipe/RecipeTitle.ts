import { Recipe as TRecipe } from "../api/recipe/Recipe";

export const RECIPE_TITLE_FIELD = "name";

export const RecipeTitle = (record: TRecipe): string => {
  return record.name?.toString() || String(record.id);
};
