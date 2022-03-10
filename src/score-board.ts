export class ScoreKeeper{
    
    public time1 = 0;
    public time2 = 0;

 
    public scoreTeamA1(){
        return this.time1 = this.time1 + 1 
    }
    public scoreTeamA2(){
        return this.time1 = this.time1 + 2
    }
    public scoreTeamA3(){
        return this.time1 = this.time1 + 3
    }

    
    public scoreTeamB1(){
        return this.time2 = this.time2 + 1 
    }
    public scoreTeamB2(){
        return this.time2 = this.time2 + 2
    }
    public scoreTeamB3(){
        return this.time2 = this.time2 + 3 
    }

     public getScore(){
        
        let placar1 = `000`
        let placar2 = `000`

        if (this.time1 > 9) {
            placar1  = `0${this.time1}`
           
        }
        if (this.time1 <= 9) {
            placar1  = `00${this.time1}`
           
        }
       
        if (this.time1 > 99) {
            placar1  = `${this.time1}`
          
        }
        if(this.time1 > 999){
            this.time1 = 999
            placar1 = `${this.time1}`
            return "não poderá ultrapassar 999"

        }


        if (this.time2 <= 9) {
            placar2  = `00${this.time2}`
            
        }
        if (this.time2 > 9) {
            placar2  = `0${this.time2}`
           
        }
        if (this.time2 > 99) {
            placar2  = `${this.time2}`
       
        }
        if(this.time2 > 999){
            this.time2 = 999
            placar2 = `${this.time2}`
            return "não poderá ultrapassar 999"
        }
        
        return `${placar1}:${placar2}`
    }
}