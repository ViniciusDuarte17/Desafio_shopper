import {app} from "./app";
import { productRouter } from "./router/productRouter";
import { purchasetRouter } from "./router/purchaseRouter";
import { clientRouter } from "./router/clientRouter";


app.use("/user", clientRouter);
app.use('/product', productRouter);
app.use("/purchase", purchasetRouter);