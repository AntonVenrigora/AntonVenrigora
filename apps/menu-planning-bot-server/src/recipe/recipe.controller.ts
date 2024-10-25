import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecipeService } from "./recipe.service";
import { RecipeControllerBase } from "./base/recipe.controller.base";

@swagger.ApiTags("recipes")
@common.Controller("recipes")
export class RecipeController extends RecipeControllerBase {
  constructor(protected readonly service: RecipeService) {
    super(service);
  }
}
