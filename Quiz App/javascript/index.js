/*
*  Alex THomas
*  thomasad71@gmail.com
*  29 NOV 17
*
* */

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
          {
            value: 1961,
            number: 2
          },
          {
            value:1969,
            number: 3
          },
          {
            value:1989,
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
      {
          value: 'Apollo',
          number: 2
      },
      {
          value: 'Mercury',
          number: 3
      },
      {
          value: 'Odin',
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
      {
          value: '1973',
          number: 2
      },
      {
          value: '1969',
          number: 3
      },
      {
          value: '1944',
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
      {
          value: 'Gus Grissom',
          number: 2
      },
      {
          value: 'Neil Armstrong',
          number: 3
      },
      {
          value: 'Scooby Doo',
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
      {
          value: 'Vladimir Putin',
          number: 2
      },
      {
          value: 'John Glenn',
          number: 3
      },
      {
          value: 'Yuri Gagarin',
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
      {
          value: 'Valentina Tereshkova',
          number: 2
      },
      {
          value: 'Jane Smith',
          number: 3
      },
      {
          value: 'Lady Gaga',
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
      {
          value: 'Sally Ride',
          number: 2
      },
      {
          value: 'Anna Fisher',
          number: 3
      },
      {
          value: 'Lady Gaga',
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
      {
          value: 'Viking 1',
          number: 2
      },
      {
          value: 'Good Luck 1',
          number: 3
      },
      {
          value: 'Good Bye 1',
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
      {
          value: 1966,
          number: 2
      },
      {
          value: 1969,
          number: 3
      },
      {
          value: 1971,
          number: 4
      },
      ],
        'questionNumber': 10,
        'correctAnswer': 1
            },
    ];

   var answerArray = [];
    var correct = 0;
      function correctGuess() {
        correct += 1;
      }


    function rightOrWrong(questionNumber, userAnswer) {
      var questionObject = questionNumber - 1;
      var obj = quizArray[questionObject];
      if(userAnswer == obj.correctAnswer) {
        correctGuess();
        $('#amount').html(correct);
        $('#display-right-or-wrong').html('Correct!');
        } else {
        $('#display-right-or-wrong').html('Wrong!');
        }
    }


    $(function() {
      $('#start').on('click', function() {
        $('.container').hide(1000);
        $('.results').hide();
        $('.show-results').hide();
        $(' #count ').html(pageNumber);
        $('#quiz').show(function() {
          showQuestion(0);
        });
      });
    });

  var clickCount = 0;
  var pageNumber = 1;
  function clickTally() {
        clickCount += 1;
        if(pageNumber === 10) {
          $('.js-next').hide();
          $('#display-right-or-wrong').hide();
          results();
          console.log('bananas');
        }
    }

    $(function() {
      $('.js-next').on('click', function(event) {
        event.preventDefault();
        clickTally();
          pageNumber++;
        showQuestion(clickCount);

        $('#display-right-or-wrong').html('');

        if(pageNumber < 11) {
            $(' #count ').html(pageNumber);
        }
      });
    });


   function check() {
      $('.js-next').attr('disabled', true);
    }

    function answerRequired() {
      $('.js-next').attr('disabled', false);
    }


    function results() {
      $('.results').show(1000);
      $('.results').on('click', function() {
      $('#quiz').hide(1000);
      $('.show-results').show(1000);
      $('#restart').show();
      });
    }


    function showQuestion(bananas) {
      console.log(pageNumber);
      if(pageNumber < 11) {
        generateAnswersHTML(quizArray[bananas].answer);
        generateQuestionHTML(quizArray[bananas].question);
        $('input[type="radio"]').on('click', function() {
          $('input[type="radio"]').attr('disabled', true);
          rightOrWrong(quizArray[bananas].questionNumber, $(this).val());
          answerRequired();
        });
        check();
        }
    };


    function generateQuestionHTML(question) {
      var  questionNumber = '<h2>' + question + '</h2>';
      $('.js-question').html(questionNumber);
    }


    function generateAnswersHTML(answers) {
      var answerList = '';
      for(i = 0; i < answers.length; i++) {
        let item = answers[i];
        answerList += '<input type="radio" name="q-one" value="' + item.number + '">' + item.value + '';
        }
      $('.js-answer').html(answerList);

    }


    $('#restart').on('click', function() {
      location.reload();
    })
