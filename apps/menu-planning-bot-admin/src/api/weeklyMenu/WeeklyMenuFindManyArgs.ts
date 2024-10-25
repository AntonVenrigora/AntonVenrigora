import { WeeklyMenuWhereInput } from "./WeeklyMenuWhereInput";
import { WeeklyMenuOrderByInput } from "./WeeklyMenuOrderByInput";

export type WeeklyMenuFindManyArgs = {
  where?: WeeklyMenuWhereInput;
  orderBy?: Array<WeeklyMenuOrderByInput>;
  skip?: number;
  take?: number;
};
