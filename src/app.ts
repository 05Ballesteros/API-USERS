import app from "@server/server";
import dotenv from "dotenv";
import "@config/mongodb";

dotenv.config();
const port = process.env.PORT || 4001;

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});