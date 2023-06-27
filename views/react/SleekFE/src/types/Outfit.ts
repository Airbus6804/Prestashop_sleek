//import Spot from "./Spot";

/*export default interface Outfit {
    name: string,
    description: string,
    picture: string,
    spots: Array<Spot>
}*/

import {v4 as uuidv4} from "uuid";


class Outfit {
    name: string;
    description: string;
    picture: string;
    id: string;

    constructor(name: string, description: string, picture: string){
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.id = uuidv4();
    }
}


export default Outfit;

