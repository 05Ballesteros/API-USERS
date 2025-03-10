import { IUserRepository, IUserService, User } from "types/UsersTypes";

export class UserService implements IUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async createUser(user: User): Promise<User> {
        return this.userRepository.create(user);
    }

    async findUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findUsersById(id: string): Promise<User | null> {
        return this.userRepository.findByID(id);
    }

    async updateUsers(id: string, user: Partial<User>): Promise<User | null> {
        return this.userRepository.update(id, user);
    }

    async deleteUsers(id: string): Promise<boolean> {
        return this.userRepository.delete(id);
    }
}