import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type WeeklyMenu = {
  createdAt: Date;
  id: string;
  menu: JsonValue;
  updatedAt: Date;
  user?: User | null;
  weekStart: Date | null;
};
