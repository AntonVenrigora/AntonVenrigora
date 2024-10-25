import { InputJsonValue } from "../../types";
import { WeeklyMenuUpdateManyWithoutUsersInput } from "./WeeklyMenuUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  preferences?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
  weeklyMenus?: WeeklyMenuUpdateManyWithoutUsersInput;
};
