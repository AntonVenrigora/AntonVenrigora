/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WeeklyMenuService } from "../weeklyMenu.service";
import { WeeklyMenuCreateInput } from "./WeeklyMenuCreateInput";
import { WeeklyMenu } from "./WeeklyMenu";
import { WeeklyMenuFindManyArgs } from "./WeeklyMenuFindManyArgs";
import { WeeklyMenuWhereUniqueInput } from "./WeeklyMenuWhereUniqueInput";
import { WeeklyMenuUpdateInput } from "./WeeklyMenuUpdateInput";

export class WeeklyMenuControllerBase {
  constructor(protected readonly service: WeeklyMenuService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WeeklyMenu })
  async createWeeklyMenu(
    @common.Body() data: WeeklyMenuCreateInput
  ): Promise<WeeklyMenu> {
    return await this.service.createWeeklyMenu({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        menu: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        weekStart: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WeeklyMenu] })
  @ApiNestedQuery(WeeklyMenuFindManyArgs)
  async weeklyMenus(@common.Req() request: Request): Promise<WeeklyMenu[]> {
    const args = plainToClass(WeeklyMenuFindManyArgs, request.query);
    return this.service.weeklyMenus({
      ...args,
      select: {
        createdAt: true,
        id: true,
        menu: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        weekStart: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WeeklyMenu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async weeklyMenu(
    @common.Param() params: WeeklyMenuWhereUniqueInput
  ): Promise<WeeklyMenu | null> {
    const result = await this.service.weeklyMenu({
      where: params,
      select: {
        createdAt: true,
        id: true,
        menu: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        weekStart: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WeeklyMenu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWeeklyMenu(
    @common.Param() params: WeeklyMenuWhereUniqueInput,
    @common.Body() data: WeeklyMenuUpdateInput
  ): Promise<WeeklyMenu | null> {
    try {
      return await this.service.updateWeeklyMenu({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          menu: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          weekStart: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WeeklyMenu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWeeklyMenu(
    @common.Param() params: WeeklyMenuWhereUniqueInput
  ): Promise<WeeklyMenu | null> {
    try {
      return await this.service.deleteWeeklyMenu({
        where: params,
        select: {
          createdAt: true,
          id: true,
          menu: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          weekStart: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}