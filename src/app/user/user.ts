import { IUser } from 'src/models/iUser';

export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
}