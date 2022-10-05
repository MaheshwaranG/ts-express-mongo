import express from "express";
import warehouseRoutes from "./warehouse/routes"
import { createFacility } from "./warehouse/services/facility";
const router = express.Router();
router.use(warehouseRoutes);

router.get('/a', async (req, res) => {
  console.log("API called ::: /create/facility")
  // const facility = await createFacility(req.body);
  // return res.json({"test": "asd"});
  return res.send("Working ")
})

router.get("/api/test", (req, res) => {
  const variable = req.query.variable;
  return res.send("Working " + variable);
});

export default router;
