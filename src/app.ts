import app from "@services/server";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 4001;

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});