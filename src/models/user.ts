
export interface User {
    profilePicture: string;
    coverPicture: string;
    isAdmin: boolean;
    numberPhone: string;
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface UserRegister {
    username: string;
    email: string;
    password: string;
}