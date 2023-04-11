import express from "express";
import dotenv from 'dotenv'
import auth from './routes/auth.js'
import session from "express-session";
dotenv.config()

const app = express();
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}))
const port =process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.urlencoded({
    extended:true
}))


app.get("/", (req, res) => {
  res.render('index',{
    title:'Home Page',
    describ:`Home page work ${port}`
  });
});

app.use('/auth',auth)

app.listen({ port }, () => console.log(`App listen ${port}`));