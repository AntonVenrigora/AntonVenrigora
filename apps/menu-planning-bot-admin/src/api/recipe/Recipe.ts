import { JsonValue } from "type-fest";

export type Recipe = {
  category?: "Option1" | null;
  createdAt: Date;
  id: string;
  ingredients: JsonValue;
  instructions: string | null;
  name: string | null;
  updatedAt: Date;
};
