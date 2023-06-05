export interface UserProfile{
    id: string, 
    userName: string, 
    tagline: string, 
    imgSrc: string, 
    user: any,
    followers: any[]; 
    following: []; 
}