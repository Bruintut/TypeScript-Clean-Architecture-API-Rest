import { UserEntity } from "../../domain/entities/user.entity";
import { IDeleteUserUseCase } from "../../domain/use-cases/delete-user.usecase";
import { IFindUserByIdUseCase } from "../../domain/use-cases/find-user-by-id.usecase";
import { IUserRepository } from "../repositories/user-repository.data";
import { UserOutputData } from "../types/output";

export class DeleteUserUseCase implements IDeleteUserUseCase{
    constructor(private readonly userRepository: IUserRepository, private readonly findUserById: IFindUserByIdUseCase){}
    async execute(userId: string): Promise<UserOutputData> {
        await this.findUserById.execute(userId);
        return await this.userRepository.deleteUser(userId);
        
    }
}