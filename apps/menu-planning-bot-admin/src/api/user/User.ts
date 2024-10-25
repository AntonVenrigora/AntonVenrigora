import { JsonValue } from "type-fest";
import { WeeklyMenu } from "../weeklyMenu/WeeklyMenu";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  preferences: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  weeklyMenus?: Array<WeeklyMenu>;
};
