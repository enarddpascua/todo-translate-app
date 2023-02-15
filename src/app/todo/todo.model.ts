export interface Todo {
    name:string,
    done:boolean | undefined,
    language: string
}

export interface TodoWithId{
    id:string,
    name:string,
    done:boolean,
    language: string,
}