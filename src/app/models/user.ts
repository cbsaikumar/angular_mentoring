import { IUser } from 'src/app/models/iUser';

export class User implements IUser {
    email: string;
    password: string;
    isAuthenticated: boolean;
}