import { Module } from "@nestjs/common";
import { WeeklyMenuModuleBase } from "./base/weeklyMenu.module.base";
import { WeeklyMenuService } from "./weeklyMenu.service";
import { WeeklyMenuController } from "./weeklyMenu.controller";
import { WeeklyMenuResolver } from "./weeklyMenu.resolver";

@Module({
  imports: [WeeklyMenuModuleBase],
  controllers: [WeeklyMenuController],
  providers: [WeeklyMenuService, WeeklyMenuResolver],
  exports: [WeeklyMenuService],
})
export class WeeklyMenuModule {}
