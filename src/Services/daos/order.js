import Mongodb from "../MongoClass.js";
import orderSchema from "../../DB/models/order.js";

class MongoOrders extends Mongodb {
    constructor() {
        super("Ordenes", orderSchema);
    }
}

export default MongoOrders