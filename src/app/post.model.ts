import { UserProfile } from "./userprofile.model"

export class Post{
    id: string 
    title: string
    tastingNotes: string
    imgSrc: string 
    rating: number 
    userProfile: UserProfile;
   
    constructor(id: string, title: string, tastingNotes: string, imgSrc: string, rating: number, userProfile: UserProfile){
        this.id= id; 
        this.title=title; 
        this.tastingNotes=tastingNotes; 
        this.imgSrc = imgSrc; 
        this.rating = rating;
        this.userProfile = userProfile;
    }
}