type User = {
    uid: number,
    uname: string
}

export interface Post {
    id: string;
    title: string;
    body: string;
    vote: number;
    user: User
}
