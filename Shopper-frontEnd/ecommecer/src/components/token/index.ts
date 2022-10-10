export const headers = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
};

export const setHeader = (token: string) => {
    token && (headers.headers.Authorization = token)
    !headers.headers.Authorization && (headers.headers.Authorization = window.localStorage.getItem('token'))
}