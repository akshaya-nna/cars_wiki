export class Card {
   public brand: String;
   public flagship: String;
   public location: String;
   public revenue?: String;
   public symbol: String;
   public carImg: String;
   public year: String;
   public parentOrg?: String;
   public csnum?: String;
   public description?: String;

   constructor(brnd:String,flg:String,loc:String,rev:String,sym:String,car:String,yr:String,parent:String,csnum:String,desc:String){
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