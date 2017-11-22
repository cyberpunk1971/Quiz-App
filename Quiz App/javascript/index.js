// function beginQuiz() {
//
//   document.getElementById('start').style.display = "none";
// document.getElementById('question-one').style.display = 'block';
//
// }
//
// function checkAnswer() {
// let question1 = document.quiz.q_one.value;
//   if (question1 == "Yuri Gagarin") {
//       alert("Correct! 1 out of 10 so far.");
//   } else {
//       alert("Wrong! 0 out of 10 so far");
//   }
// }
//
// function nextQuestion() {
//
//   let x = document.getElementById('question-two');
//   let y = document.getElementById('question-one');
//     if(x.style.display === "none" && y.style.display !== "none") {
//       x.style.display = "block";
//       y.style.display = "none"
//     } else {
//       x.style.display = "none";
//     }
//
// }



const theQuestionsAndAnswers = [
  {
    'question':'What was the name of the first human astronaut?',
    'answer': [
{
value: 'Yuri Gagarin',
number: 1
},
{ value: 'John Glenn',
number: 2
},
{ value: 'Alan Shepard',
number: 3
},
{ value: 'Lady Gaga',
number: 4
},
],
        'questionNumber': 1,
        'correctAnswer': 1
      },

  {
     'question':'In what year did the first human orbit the earth?',
          'answer': {
            '1': 1975,
            '2': 1961,
            '3': 1969,
            '4': 1989
          },
          'number': 2,
          'correctAnswer': 2
      },

      {
        'question':'What was the name of America\'s first manned space program?',
          'answer': {
            '1': 'Gemini',
            '2': 'Apollo',
            '3': 'Mercury',
            '4': 'Odin'
          },
          'number': 3,
          'correctAnswer': 3
      },

      {
        'question': ' In what year did Man first land on the moon?',
          'answer': {
            '1': 1972,
            '2': 1973,
            '3': 1969,
            '4': 1944
          },
          'number': 4,
          'correctAnswer': 3
      },

      {
        'question': 'Who said, "One small step for Man, one giant leap for Mankind"?',
          'answer': {
            '1': 'John Glenn',
            '2': 'Gus Grissom',
            '3': 'Neil Armstrong',
            '4': 'Scooby Doo'
          },
          'number': 5,
          'correctAnswer': 3
      },

      {
        'question': 'Who was the first Man to step onto the moon\'s surface?',
          'answer': {
            '1': 'Neil Armstrong',
            '2': 'Vladimir Putin',
            '3': 'John Glenn',
            '4': 'Yuri Gagarin'
          },
          'number': 6,
          'correctAnswer': 1
      },

      {
        'question': 'Who was the first female astronaut?',
          'answer': {
            '1': 'Sally Ride',
            '2': 'Valentina Tereshkova',
            '3': 'Jane Smith',
            '4': 'Lady Gaga'
          },
          'number': 7,
          'correctAnswer': 2
      },

      {
        'question': 'Who was the first mom to travel to space?',
          'answer': {
            '1': 'Valentina Tereshkova',
            '2': 'Sally Ride',
            '3': 'Anna Fisher',
            '4': 'Lady Gaga'
          },
          'number': 8,
          'correctAnswer': 3
      },

      {
        'question': 'What was the name of the first spacecraft on Mars?',
          'answer': {
              '1': 'Mars 3',
              '2': 'Viking 1',
              '3': 'Good Luck 1',
              '4': 'Good Bye 1'
          },
          'number': 9,
          'correctAnswer': 1
      },

      {
        'question': 'In what year did the first Mars landing occur?',
          'answer': {
            '1': '1975',
            '2': '1966',
            '3': '1969',
            '4': '1971'
          },
          'number': 10,
          'correctAnswer': 4
      }
    ]
    //place loop for questions here, increment int as var see https://www.freecodecamp.org/challenges/increment-a-number-with-javascript
    $(function() {
      $('#start').on('click', function() {
        $('.container').hide(1000);
        $('#quiz').show(function() {
          showQuestion(0);
        });

      });
    });


    function showQuestion(number) {
      $('.js-question').html(theQuestionsAndAnswers[number].question);
      generateAnswersHTML(theQuestionsAndAnswers[number].answer);

    };

    function generateQuestionHTML(question, answers) {
      //code here is similar to generateAnswersHTML
    };

    function generateAnswersHTML(answers) {
      // console.dir(answers);
      var answerList = '';
      for(i = 0; i < answers.length; i++) {
        let item = answers[i];
        // console.log(item);
        answerList += '<input type="radio" name="q-one" value="' + item.number + '">' + item.value + '';


      };
      $('.js-question').html(answerList);
    };

    // function handleQuiz() {
      // showQuestion();
    //   generateQuestionHTML();
    //   generateAnswersHTML();
    // }
    //
    // $(handleQuiz);
