import app from "./src/app/app";
import { testConnection } from "./src/db/data_base_conection";
import { generateToken } from "./src/utilities/generateToken";
import "./src/utilities/autoSendRemiderEmail.schedule";
const PORT = process.env.PORT || 3001;

app.listen(PORT);
testConnection();
console.log(generateToken());
