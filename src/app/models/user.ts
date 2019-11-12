import { IUser } from 'src/app/models/iUser';

export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
}