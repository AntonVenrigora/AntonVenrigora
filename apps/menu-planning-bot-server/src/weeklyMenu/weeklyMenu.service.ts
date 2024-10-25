import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeeklyMenuServiceBase } from "./base/weeklyMenu.service.base";

@Injectable()
export class WeeklyMenuService extends WeeklyMenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
