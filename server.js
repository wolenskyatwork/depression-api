var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 4000;

app.use(cors());
//routes
var router = express.Router();

// router.use(function(req, res, next) {
//   next();
// });

const tempQuestions = {
  questions:
  [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead, or of hurting yourself in some way?",
  ],
};

const answers = {
  answers: [
    {
      text: "Not at all",
      value: 0,
    },
    {
      text: "Several days",
      value: 1,
    },
    {
      text: "More than half the days",
      value: 2,
    },
    {
      text: "Nearly every day",
      value: 3,
    },
  ],
};

const severity = {
  severity: [
    {
      text: "none",
      threshold: 4,
    },
    {
      text: "mild",
      threshold: 9,
    },
    {
      text: "moderate",
      threshold: 14,
    },
    {
      text: "moderately severe",
      threshold: 19,
    },
    {
      text: "none",
      threshold: 27,
    },
  ],
};

const therapists = {
  therapists: [
    {
      name: "Abdul Sulaiman",
      email: "abdul@gmail.com",
    },
    {
      name: "Selena Hernandez",
      email: "selena@gmail.com",
    },
    {
      name: "Misha Omelchenko",
      email: "misha@gmail.com",
    },
  ],
};

router.route('/questions')
  .get(function(req, res) {
    res.json(JSON.parse(JSON.stringify(tempQuestions)));
  });

router.route('/answers')
  .get(function(req, res) {
    res.json(JSON.parse());
});

app.use('/api', router);


//start server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
