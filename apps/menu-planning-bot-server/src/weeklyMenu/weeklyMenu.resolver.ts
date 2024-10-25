import * as graphql from "@nestjs/graphql";
import { WeeklyMenuResolverBase } from "./base/weeklyMenu.resolver.base";
import { WeeklyMenu } from "./base/WeeklyMenu";
import { WeeklyMenuService } from "./weeklyMenu.service";

@graphql.Resolver(() => WeeklyMenu)
export class WeeklyMenuResolver extends WeeklyMenuResolverBase {
  constructor(protected readonly service: WeeklyMenuService) {
    super(service);
  }
}
