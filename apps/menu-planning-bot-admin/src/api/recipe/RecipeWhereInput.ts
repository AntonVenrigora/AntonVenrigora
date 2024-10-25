import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecipeWhereInput = {
  category?: "Option1";
  id?: StringFilter;
  ingredients?: JsonFilter;
  instructions?: StringNullableFilter;
  name?: StringNullableFilter;
};
