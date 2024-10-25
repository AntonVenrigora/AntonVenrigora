import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WeeklyMenuListRelationFilter } from "../weeklyMenu/WeeklyMenuListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  preferences?: JsonFilter;
  username?: StringFilter;
  weeklyMenus?: WeeklyMenuListRelationFilter;
};
