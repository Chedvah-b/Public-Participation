export class project{
    topic: string ;
    details:string;
    category1:string;
    category1_like:number;
    category1_unLike:number;
    category2:String;
    category2_like:number;
    category2_unLike:number;
    category3:String;
    category3_like:number;
    category3_unLike:number;
    category4:String;
    category4_like:number;
    category4_unLike:number;
    category5:String;
    category5_like:number;
    category5_unLike:number;
    img:string;
    constructor(topic: string,  details:string,  category1:string,category1_like:number,category1_unLike:number,category2:String,
        category2_like:number,
        category2_unLike:number,
        category3:String,
        category3_like:number,
        category3_unLike:number,
        category4:String,
        category4_like:number,
        category4_unLike:number,
        category5:String,
        category5_like:number,
        category5_unLike:number,img:string) {
        this.topic=topic;
        this.details=details;
        this.category1=category1;
        this.category1_like=category1_like;
        this.category1_unLike=category1_unLike;
        this.category2=category2
        this.category2_like=category2_like;
        this.category2_unLike=category2_unLike;
        this.category3=category3
        this.category3_like=category3_like;
        this.category3_unLike=category3_unLike;
        this.category4= category4;
        this.category4_like= category4_like;
        this.category4_unLike=category4_unLike;
        this.category5=category5;
        this.category5_like=category5_like;
        this.category5_unLike= category5_unLike;
       this.img=img
     }
}