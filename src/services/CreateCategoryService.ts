import { ICategoriesRespository } from "../repositories/ICategoriesRespository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRespository) {
  }

  execute({ name, description }: IRequest): void {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoriesAlreadyExists) {
      throw new Error("Category Already exists !")
    }

    this.categoriesRepository.create({ name, description })
  };
}
export { CreateCategoryService };
