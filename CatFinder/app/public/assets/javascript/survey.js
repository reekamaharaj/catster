const surveyQuestions = [   
    'You are looking for a cat that does well with children.',
    'You are looking for a cat that will get along with your cat(s).',
    'You are looking for a cat that will get along with your dog(s).',
    'You are looking for a cat that will be friendly with visitors.',
    'You are looking for a social cat. One that likes to be where the people are.',
    'You are looking for a cat that enjoys pets.',
    'You are looking for a lapcat.',
    'You are looking for a playful cat.',
    'You are looking for a quiet cat.',
    'You are looking for a cat that is vocal.'
];

const answers = [
    'Select an Option', 
    'Strongly Disagree', 
    'Disagree', 
    'Neutral', 
    'Agree', 
    'Strongly Agree'
];

let questionContainer;
let question;

$('.document').ready(function(){
    popSurvey();
});

function popSurvey(){
    for (i = 0; i < surveyQuestions.length; i++){
        questionContainer = undefined;
        question = undefined; 

        questionContainer = $('<div class="flex flex-col mb-4 md:w-full">');
        question = '<label class="mb-2 text-grey-darkest" for="question">' + surveyQuestions[i] + '</label>';

        // for (i = 0; i < 5; i++){
        //         answerArray[i] = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="' + i + '"><input type="radio" class="' + i + '" name=' + i + '" value="' + i + '" onClick="clicked(this.value, this.className)"></input><span class="ml-2 px-4 py-2 text-orange-800">' + answers[i] + '</span></label>';
        //     }
        questionContainer.append(question);
        $('#survey').append(questionContainer);
    }
}