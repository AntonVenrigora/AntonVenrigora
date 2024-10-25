import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WeeklyMenuUpdateInput = {
  menu?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  weekStart?: Date | null;
};
