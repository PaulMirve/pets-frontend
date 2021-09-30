export default interface User {
    name: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    role?: string,
    active?: boolean,
    google?: boolean
}