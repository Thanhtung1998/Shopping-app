

export interface GetUser_users {
    __typename: "User";
    id: string;
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    coverPicture: string;
    isAdmin: boolean;
    desc: string;
    city: string;
    from: string;
    numberPhone: string;
}

export interface GetUsers {
    car: GetUser_users[];
}