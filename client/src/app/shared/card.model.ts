export class Card {
   public brand: string;
   public flagship: string;
   public location: string;
   public revenue?: string;
   public symbol: string;
   public carImg: string;
   public year: string;
   public parentOrg?: string;
   public csnum?: string;
   public description?: string;

   constructor(brnd:string,flg:string,loc:string,rev:string,sym:string,car:string,yr:string,parent:string,csnum:string,desc:string){
            this.brand=brnd;
            this.flagship=flg;
            this.location=loc;
            this.revenue=rev;
            this.symbol=sym;
            this.carImg=car;
            this.year=yr;
            this.parentOrg=parent;
            this.csnum=csnum;
            this.description=desc;
   }
}