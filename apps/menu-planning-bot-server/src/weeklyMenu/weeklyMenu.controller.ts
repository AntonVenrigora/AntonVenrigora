import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeeklyMenuService } from "./weeklyMenu.service";
import { WeeklyMenuControllerBase } from "./base/weeklyMenu.controller.base";

@swagger.ApiTags("weeklyMenus")
@common.Controller("weeklyMenus")
export class WeeklyMenuController extends WeeklyMenuControllerBase {
  constructor(protected readonly service: WeeklyMenuService) {
    super(service);
  }
}
