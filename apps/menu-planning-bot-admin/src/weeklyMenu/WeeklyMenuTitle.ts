import { WeeklyMenu as TWeeklyMenu } from "../api/weeklyMenu/WeeklyMenu";

export const WEEKLYMENU_TITLE_FIELD = "id";

export const WeeklyMenuTitle = (record: TWeeklyMenu): string => {
  return record.id?.toString() || String(record.id);
};
