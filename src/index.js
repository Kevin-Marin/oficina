import e from "express";
import "dotenv/config";
import "./db.js"
import maintenance_router from "./routes/maintenance_route.js"
import vehicle_router from "./routes/vehicle_route.js"
import workshop_router from "./routes/workshop_route.js"


const app = e();

app.use(e.json())

app.use("/maintenance", maintenance_router)
app.use("/vehicle", vehicle_router)
app.use("/workshop", workshop_router)

app.listen(process.env.API_PORT)