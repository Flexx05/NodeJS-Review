import express from "express";

const app = express();

// Midleware
app.use(express.json());

// Router

export const viteNodeApp = app;
