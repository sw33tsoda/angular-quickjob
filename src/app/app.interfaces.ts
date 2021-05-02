export interface JobPosting {
    position:string,
    level:string,
    langRequirement:number[],
    description:string,
    diploma:number,
    company:string,
    email:string,
    expireStatus:number,
    expireDate:string,
    style:object,
}

export interface JobBoard<T> {
    list:Array<T>,
}