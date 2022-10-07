import {app} from "./app";
import { productRouter } from "./router/productRouter";
import { purchasetRouter } from "./router/purchaseRouter";
import { userRouter } from "./router/userRouter";


app.use("/user", userRouter);
app.use('/product', productRouter);
app.use("/purchase", purchasetRouter);