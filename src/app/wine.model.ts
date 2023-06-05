export class Wine{
    id: string 
    name: string 
    vintage: string
    varietal: string
    vitner: string 
    tastingNotes: string
    glassWare: string
    aerationTime: string 
    servingTemperature: string 
    pairing: string 
    imgSrc: string

    constructor(id: string, name: string, vintage: string, vitner: string, varietal: string, tastingNotes: string, glassWare: string, aerationTime: string, servingTemperature: string, pairing: string, imgSrc: string ){
        this.id = id; 
        this.name = name;
        this.vintage = vintage; 
        this.vitner = vitner; 
        this.varietal = varietal;
        this.tastingNotes = tastingNotes; 
        this.glassWare = glassWare; 
        this.aerationTime = aerationTime; 
        this.servingTemperature = servingTemperature; 
        this.pairing = pairing; 
        this.imgSrc = imgSrc;
    }
}