import { UserProfile } from "./userprofile.model"

export class Post{
    id: string
    title: string
    tastingNotes: string
    imgSrc: string 
    ranking: string 
    userProfile: UserProfile;
   
    constructor(id: string, title: string, tastingNotes: string, imgSrc: string, ranking: string, userProfile: UserProfile){
        this.id= id; 
        this.title=title; 
        this.tastingNotes=tastingNotes; 
        this.imgSrc = imgSrc; 
        this.ranking = ranking; 
        this.userProfile = userProfile;
    }
}