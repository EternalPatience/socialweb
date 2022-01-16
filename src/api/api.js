import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b18cbcd7-4ca2-4fb9-baf0-35ba2f999b6f'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(
            `follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(
            `follow/${id}`)
            .then(response => response.data)
    },
}


export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(
            `auth/login`,
            {email, password, rememberMe, captcha}
        )
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}


export const profileAPI = {
    getProfile(id) {
        return instance.get(
            `profile/${id}`)
            .then(response => response.data)
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    saveImage(image) {
        let formData = new FormData()
        formData.append('image', image)
        return instance.put(`profile/photo`, formData)
    },
    saveProfile(profileData) {
        return instance.put(`/profile`, profileData)
    }
}
