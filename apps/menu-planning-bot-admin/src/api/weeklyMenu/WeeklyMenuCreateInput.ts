import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WeeklyMenuCreateInput = {
  menu?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  weekStart?: Date | null;
};
