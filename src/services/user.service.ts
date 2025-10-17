import { UserModel } from "../models/user.model";

export class UserService {
    static findUserByEmail(email: string) {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'user@example.com',
                    phone: '+3814567890',
                    password: 'password123',
                    destination: 'Zagreb',
                    data: []
                }
            ]));
        }

        const users: UserModel[] = JSON.parse(localStorage.getItem('users')!);
        const exactUser = users.find(u => u.email === email);

        if (!exactUser) {
            throw new Error("NO_ACTIVE_USER");
        }
        return exactUser;
    }

    static login(email: string, password: string) {
        const user = this.findUserByEmail(email);
        if(user.password !== password){
            throw new Error("BAD_CREDENTIALS");
        }

        localStorage.setItem('active', user.email);
    }

    static getActiveUser(){
        const active = localStorage.getItem('active');
        if(!active)
            throw new Error("NO_ACTIVE_USER");
        return this.findUserByEmail(active);
    }

    static logout(){
        localStorage.removeItem('active');
    }
}