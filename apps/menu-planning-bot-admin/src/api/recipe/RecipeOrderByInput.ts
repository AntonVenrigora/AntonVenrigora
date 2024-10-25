import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  instructions?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
