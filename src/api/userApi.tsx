
// import { Register } from '../features/Register';
import axiosClient from './axiosClient'
import { UserRegister } from '../models'
import firebase from 'firebase'

const userApi = {

    Login: (params: any) => {
        const url = '/user/login';
        return axiosClient.post(url, params);
    },

    // GetUser(): Promise<UserData<User>> {
    //     const url = '/user/all';
    //     return axiosClient.get(url);
    // }

    // LoginAsync

    Register: (params: UserRegister) => {
        const url = '/user/register';
        return axiosClient.post(url, params);
    },

    getMe: () => {
        // Toto: call API to get current user

        return new Promise(async (resolve, reject) => {
            // reject(new Error("My Custom Error"))
            // return;

            // wait 500ms --> return result

            const currentUser = firebase.auth().currentUser;

            const token = await currentUser?.getIdToken();
            // console.log(token)

            resolve({
                user: {
                    id: currentUser?.uid,
                    displayName: currentUser?.displayName,
                    email: currentUser?.email,
                    photoURL: currentUser?.photoURL,
                    desc: "",
                    phoneNumber: "+84000000000",
                    city: "",
                    from: "",
                },
                accessToken: token,
            })

        })

    },

}

export default userApi;