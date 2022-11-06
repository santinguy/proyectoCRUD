import express from "express";
// const express = require('express');
import indexRoutes from "./routes/index.routes";
import {create} from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

app.set('views', path.join(__dirname, "views"));

// app.engine(
//     ".hbs",
//     exphbs({
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     defaultLayout: 'main',
//     extname: ".hbs",
// })
// );

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
  });
  
  app.engine(".hbs", exphbs.engine);
  app.set("view engine", ".hbs");

  app.set("view engine", ".hbs");


//MIDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false }));

//Routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

export default app;