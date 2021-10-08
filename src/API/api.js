import axios from "axios";


const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8aa7e496-83d8-4a38-9082-b9ad5d1d0e5d"
    }
});


export const Api= {
    getUser(pageNumber=1,pageSize=10){
    return  instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(
        response=> {
            return response.data;
        });
    },
    followDelete(id){
    return instance.delete(`follow/${id}`).then(
        response=>{
            return response.data;
        });
    },
    followPost(id){
        return instance.post(`follow/${id}`).then(
            response=>{
                return response.data;
            });
    },
    authRequest(){
        return  instance.get(`auth/me`).then(
            response=> {
                return response.data;
            });
    }
}

export const ApiProfile={
    getStatus(userId){
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(UserStatus){
        return instance.put(`profile/status`,{status:UserStatus});
    }
}

export const ApiLogin={
    loginUser(userEmail,userPassword,rememberUser){
        return instance.post(`auth/login`,{email:userEmail,password:userPassword,rememberMe:rememberUser});
    },
    unloginUser(){
    return instance.delete(`auth/login`);
    }
}