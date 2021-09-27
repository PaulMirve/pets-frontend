export default interface User {
    _id?: string,
    name: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    role?: string,
    active?: boolean,
    google?: boolean
}