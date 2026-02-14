import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
	deleteProduct,
	getProducts,
	postProduct,
	updateProduct,
} from "./controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", postProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
