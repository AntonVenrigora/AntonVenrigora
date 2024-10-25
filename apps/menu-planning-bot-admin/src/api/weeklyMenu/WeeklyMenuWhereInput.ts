import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type WeeklyMenuWhereInput = {
  id?: StringFilter;
  menu?: JsonFilter;
  user?: UserWhereUniqueInput;
  weekStart?: DateTimeNullableFilter;
};
