import { SortOrder } from "../../util/SortOrder";

export type WeeklyMenuOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menu?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  weekStart?: SortOrder;
};
