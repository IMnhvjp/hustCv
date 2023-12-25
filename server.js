const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const app = express();

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

// Port
const PORT = process.env.PORT || 6868;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());

// Routers
const recruitmentPostRouter = require('./src/routers/recruitmentPostRouter.js');
const businessRouter = require('./src/routers/businessRouter.js');
const userRouter = require('./src/routers/userRouter.js');
const authRouter = require('./src/routers/authRouter.js');
const skillRouter = require('./src/routers/skillRouter.js')

const educationRouter = require('./src/routers/profileRouter/educationRouter.js');
const projectRouter = require('./src/routers/profileRouter/projectRouter.js');
const experienceRouter = require('./src/routers/profileRouter/experienceRouter.js');
const certificateRouter = require('./src/routers/profileRouter/certificateRouter.js');
const cvRouter = require('./src/routers/cvRouter.js');
const adminRouter = require('./src/routers/adminRouter.js');


const roleRouter = require('./src/routers/roleRouter.js');
const recruiterApplicationRouter = require('./src/routers/recruiterApplicationRouter.js');

// Routes
app.use('/api/recruitmentPosts', recruitmentPostRouter);
app.use('/api/business', businessRouter);
app.use('/api/users', userRouter);
app.use('/api/auths', authRouter);
app.use('/api/skills', skillRouter)

app.use('/api/profile/certificate', certificateRouter);
app.use('/api/profile/education', educationRouter);
app.use('/api/profile/project', projectRouter);
app.use('/api/profile/experiencce', experienceRouter);
app.use('/api/manageCv', cvRouter);


app.use('/api/roles', roleRouter);
app.use('/api/admin',adminRouter)

app.use('/api/recruiterApplication', recruiterApplicationRouter);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
