import moment from 'moment'   //https://momentjs.com/docs/#/parsing/   documentaion   time calculation moment() and diff.
import {v4 as uuid}  from 'uuid';  //https://www.npmjs.com/package/uuid  documentaion

class ActorModel{
    constructor(Fname, Lname, Bday, ImgSrc, linkImdb){
     this.Fname = Fname;
     this.Lname = Lname;
     this.Bday = moment(Bday);
     this.id = uuid();   // to get unique id for items in arrays. get rid of message 
     this.ImgSrc = ImgSrc;
      this.linkImdb = linkImdb;
      //(a method that calculates the age based on the birthday)
}
    age= () => {
     const now  =  moment();  // now is the actual moment  https://momentjs.com/docs/#/parsing/
        
        return now.diff(this.Bday, 'years')  // diff is a method that works on moment() value. 
    }

}

export default ActorModel;