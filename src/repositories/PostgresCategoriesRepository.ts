import { Category } from "../model/Category";
import { ICategoriesRespository,ICreateCategoryDTO } from "./ICategoriesRespository";

class PostgresCategoriesRepository implements ICategoriesRespository {

  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({name, description}: ICreateCategoryDTO ): void {
    throw new Error("Method not implemented.");
  }
}

export {PostgresCategoriesRepository};
