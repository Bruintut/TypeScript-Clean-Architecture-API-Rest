import ICreateUserUseCase from "../../domain/use-cases/create-user.usecase";
import IUserRepository from "../repositories/user-repository.data";


export class CreateUserUseCase implements ICreateUserUseCase{
    constructor(private readonly userRepository: IUserRepository){}

}