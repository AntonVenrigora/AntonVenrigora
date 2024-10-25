import { InputJsonValue } from "../../types";
import { WeeklyMenuCreateNestedManyWithoutUsersInput } from "./WeeklyMenuCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  preferences?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
  weeklyMenus?: WeeklyMenuCreateNestedManyWithoutUsersInput;
};
