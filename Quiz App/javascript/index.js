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



const quizArray = [
  {
    'question':'What was the name of the first human astronaut?',
    'answer': [
        {
          value: 'Yuri Gagarin',
          number: 1
        },
        {
          value: 'John Glenn',
          number: 2
        },
        {
          value: 'Alan Shepard',
          number: 3
        },
        {
          value: 'Lady Gaga',
          number: 4
        },
      ],
      'questionNumber': 1,
      'correctAnswer': 1
  },

  {
     'question':'In what year did the first human orbit the earth?',
          'answer':  [
      {
      value: 1975,
      number: 1
      },
      { value: 1961,
      number: 2
      },
      { value:1969,
      number: 3
      },
      { value:1989,
      number: 4
      },
      ],
              'questionNumber': 2,
              'correctAnswer': 2
            },



      {
        'question':'What was the name of America\'s first manned space program?',
          'answer': [
      {
      value: 'Gemini',
      number: 1
      },
      { value: 'Apollo',
      number: 2
      },
      { value: 'Mercury',
      number: 3
      },
      { value: 'Odin',
      number: 4
      },
      ],
              'questionNumber': 3,
              'correctAnswer': 3
            },

      {
        'question': ' In what year did Man first land on the moon?',
          'answer': [
      {
      value: '1972',
      number: 1
      },
      { value: '1973',
      number: 2
      },
      { value: '1969',
      number: 3
      },
      { value: '1944',
      number: 4
      },
      ],
              'questionNumber': 4,
              'correctAnswer': 3
            },

      {
        'question': 'Who said, "One small step for Man, one giant leap for Mankind"?',
          'answer':[
      {
      value: 'John Glenn',
      number: 1
      },
      { value: 'Gus Grissom',
      number: 2
      },
      { value: 'Neil Armstrong',
      number: 3
      },
      { value: 'Scooby Doo',
      number: 4
      },
      ],
              'questionNumber': 5,
              'correctAnswer': 3
            },

      {
        'question': 'Who was the first Man to step onto the moon\'s surface?',
          'answer':[
      {
      value: 'Neil Armstrong',
      number: 1
      },
      { value: 'Vladimir Putin',
      number: 2
      },
      { value: 'John Glenn',
      number: 3
      },
      { value: 'Yuri Gagarin',
      number: 4
      },
      ],
              'questionNumber': 6,
              'correctAnswer': 1
            },

      {
        'question': 'Who was the first female astronaut?',
          'answer': [
      {
      value: 'Sally Ride',
      number: 1
      },
      { value: 'Valentina Tereshkova',
      number: 2
      },
      { value: 'Jane Smith',
      number: 3
      },
      { value: 'Lady Gaga',
      number: 4
      },
      ],
              'questionNumber': 7,
              'correctAnswer': 2
            },

      {
        'question': 'Who was the first mom to travel to space?',
          'answer': [
      {
      value: 'Valentina Tereshkova',
      number: 1
      },
      { value: 'Sally Ride',
      number: 2
      },
      { value: 'Anna Fisher',
      number: 3
      },
      { value: 'Lady Gaga',
      number: 4
      },
      ],
              'questionNumber': 8,
              'correctAnswer': 3
            },

      {
        'question': 'What was the name of the first spacecraft on Mars?',
          'answer': [
      {
      value: 'Mars 3',
      number: 1
      },
      { value: 'Viking 1',
      number: 2
      },
      { value: 'Good Luck 1',
      number: 3
      },
      { value: 'Good Bye 1',
      number: 4
      },
      ],
              'questionNumber': 9,
              'correctAnswer': 1
            },

      {
        'question': 'In what year did the first Mars landing occur?',
          'answer': [
      {
      value: 1975,
      number: 1
      },
      { value: 1966,
      number: 2
      },
      { value: 1969,
      number: 3
      },
      { value: 1971,
      number: 4
      },
      ],
              'questionNumber': 10,
              'correctAnswer': 1
            },
    ]




    $(function() {
      $('#start').on('click', function() {
        $('.container').hide(1000);
        $('.results').hide();
        $('.show-results').hide();
        $(' #count ').html(pageNumber); //<------renders question count
        $('#quiz').show(function() {
          showQuestion(0);
        });
      });
    });



  var pageNumber = 1;
    $(function() {
      $('.js-next').on('click', function(event) {
        event.preventDefault();
        showQuestion(pageNumber);
        pageNumber++;
        $(' #count ').html(pageNumber); //<------renders question count
        if(pageNumber == 10) {
        results();

      };

      });
    });


    function results() {
      $('.results').show(1000);
      $('.results').on('click', function() {
      $('#quiz').hide(1000);
      $('.show-results').show(1000);
      });
    };


  //   function clickCount() {
  //     let count = 0;
  //     $('.js-next').on('click', function() {
  //       count <= 9;
  //       $('#quiz').hide();
  //     $('.results').show();
  //   });
  // };
      //write function to tell quiz it's over
      //need to score answer, keep score,
      //disable next button on each question until is answered


    //
    //
    function showQuestion(bananas) {
      generateAnswersHTML(quizArray[bananas].answer);
      generateQuestionHTML(quizArray[bananas].question);
    };


    function generateQuestionHTML(question) {
      var  questionNumber = '<h2>' + question + '</h2>'
      $('.js-question').html(questionNumber);
    };


    function generateAnswersHTML(answers) {
      var answerList = '';
      for(i = 0; i < answers.length; i++) {
        let item = answers[i];
        answerList += '<input type="radio" name="q-one" value="' + item.number + '">' + item.value + '';
        };
      $('.js-answer').html(answerList);
    };


    // generateAnswersHTML();
    // function handleQuiz() {
      // showQuestion();
    //   generateQuestionHTML();
    //   generateAnswersHTML();
    // }
    //
    // $(handleQuiz);
