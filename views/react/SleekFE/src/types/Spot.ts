/*import {v4 as uuidv4} from 'uuid';

class Spot {
    x: number;
    y: number;
    idProduct: number;
    id: string;

    constructor(x: number, y: number, idProduct: number) {
        this.x = x;
        this.y = y;
        this.idProduct = idProduct;
        this.id = uuidv4()
    }
}

export default Spot*/




import {v4 as uuidv4} from 'uuid';

class Spot {
    x: number;
    y: number;
    idProduct: number;
    id: string;
    idOutfit

    constructor(x: number, y: number, idOutfit:string, idProduct: number) {
        this.x = x;
        this.y = y;
        this.idProduct = idProduct;
        this.id = uuidv4();
        this.idOutfit = idOutfit;
    }
}

export default Spot

