import * as graphql from "@nestjs/graphql";
import { RecipeResolverBase } from "./base/recipe.resolver.base";
import { Recipe } from "./base/Recipe";
import { RecipeService } from "./recipe.service";

@graphql.Resolver(() => Recipe)
export class RecipeResolver extends RecipeResolverBase {
  constructor(protected readonly service: RecipeService) {
    super(service);
  }
}
