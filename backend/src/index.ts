import app from "./app";
import sequelize from "./connection/connection";

const port = 8080;
app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
