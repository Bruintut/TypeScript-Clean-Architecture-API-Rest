import { UserInputData } from "../types/input";
import { UserOutputData } from "../types/output";

export interface IUserRepository{
   createUser(data: UserInputData): Promise<UserOutputData>; 

}