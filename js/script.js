var myQuestions = [
    {
        question: "Em que ano Michael Jordan foi draftado?",
        answers: {
            a: '1983',
            b: '1984',
            c: '1985',
            d: '1986'
        },
        correctAnswer: 'b'
    },
    {
        question: "Quantos anos Kobe Bryant e Shaquille O'Neal jogaram juntos no Lakers?",
        answers: {
            a: '6',
            b: '7',
            c: '8',
            d: '9'
        },
        correctAnswer: 'c'
    },
    {
        question: "Quem foi o cestinha da temporada 2013-14?",
        answers: {
            a: 'Carmelo Anthony',
            b: 'Russel Westbrook',
            c: 'LeBron James',
            d: 'Kevin Durant'
        },
        correctAnswer: 'd'
    },
    {
        question: "Quem foi a 1ª escolha do Draft de 2007?",
        answers: {
            a: 'Derrick Rose',
            b: 'Greg Oden',
            c: 'Andrea Bargani',
            d: 'Blake Griffin'
        },
        correctAnswer: 'b'
    },
    {
        question: "Quantas vezes Giannis Antetokounmpo participou do All Star Game?",
        answers: {
            a: '3',
            b: '4',
            c: '5',
            d: '6'
        },
        correctAnswer: 'c'
    },
    {
        question: "Que jogador foi homenageado pelo Miami Heat com um banner com seu número?",
        answers: {
            a: 'Pat Riley',
            b: 'Tim Hardway',
            c: 'Dan Marino',
            d: 'Dan Fouts'
        },
        correctAnswer: 'c'
    },
    {
        question: "Em que posição Tony Parker se encontra entre os maiores pontuadores do Spurs?",
        answers: {
            a: 'Primeiro',
            b: 'Segundo',
            c: 'Terceiro',
            d: 'Quarto'
        },
        correctAnswer: 'd'
    },
    {
        question: "Quem é jogador com mais tocos em uma única temporada da NBA?",
        answers: {
            a: 'Mark Eaton',
            b: 'Dikembe Mutombo',
            c: 'Hakeem Olajuwon',
            d: 'Manute Bol'
        },
        correctAnswer: 'a'
    },
    {
        question: "Quem é o maior pontuador da história do Hornets?",
        answers: {
            a: 'Larry Johnson',
            b: 'Alonzo Mourning',
            c: 'Kemba Walker',
            d: 'Glen Rice'
        },
        correctAnswer: 'c'
    },
    {
        question: "Quantas vezes John Stockton superou a marca de 1000 assistências em uma única temporada?",
        answers: {
            a: '7',
            b: '8',
            c: '9',
            d: '10'
        },
        correctAnswer: 'a'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}