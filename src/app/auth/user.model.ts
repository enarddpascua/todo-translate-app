
export interface UserWithId {
    uid:number,
    email:string,
    password: string,
    role:string
}


export interface User {
    email:string,
    password: string,
    role:string
}

export interface UserLog{
    id:number,
    uid:number,
    email:string,
    created_todos:number,
    deleted_todos:number,
    translated_todos:number,
    last_login: string
}