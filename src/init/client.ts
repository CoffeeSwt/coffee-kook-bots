import Kasumi from "kasumi.js";
import { CustomStorage } from "./type";

const config = {
    type: "webhook" as "webhook",
    token: "1/MzA5OTY=/TBbHCyXavLRES4xPlahUag==",
    verifyToken: "_bmwlXnHMBdaGqpg",
    encryptKey: "7jQsllPs",
    port: 8888,
    disableSnOrderCheck: true,
};

export const client: Kasumi<CustomStorage> = new Kasumi(config);
