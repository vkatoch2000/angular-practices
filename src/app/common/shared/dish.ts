import { Comment } from './comment';

export class Dish {
 id : Number;   
 name : String ;
 image : String;
 category : String;
 label : String;
 featured : Boolean;
 price : String;
 description : String;
 comments:Comment[];
}
