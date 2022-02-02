import { Category } from "../model/Category";

//DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
};

interface ICategoriesRespository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRespository, ICreateCategoryDTO };
