import app from "./src/app/app";
import { testConnection } from "./src/db/data_base_conection";
import { Onboarding } from "./src/models/onboarding.model";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Servidor escuchando en http://localhost:" + PORT);
});

testConnection();
