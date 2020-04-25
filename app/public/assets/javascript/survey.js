const surveyQuestions = [
    "You are looking for a cat that does well with children.",
    "You are looking for a cat that will get along with your cat(s).",
    "You are looking for a cat that will get along with your dog(s).",
    "You are looking for a cat that will be friendly with visitors.",
    "You are looking for a social cat. One that likes to be where the people are.",
    "You are looking for a cat that enjoys pets.",
    "You are looking for a lapcat.",
    "You are looking for a playful cat.",
    "You are looking for a quiet cat.",
    "You are looking for a cat that is vocal.",
];

let questionContainer;
let question;
let answerArray = [];

$(".document").ready(function () {
    popSurvey();
});

function popSurvey() {
    for (i = 0; i < surveyQuestions.length; i++) {
        questionContainer = undefined;
        question = undefined;

        questionContainer = $('<div class="flex flex-col mb-4 md:w-full">');
        question =
            '<label class="mb-2 text-gray-darkest" for="q' +
            i +
            '">' +
            surveyQuestions[i] +
            '</label><select class="form-select mt-1 block w-1/3 bg-gray-600 text-white" name="q' +
            i +
            '" id="q' +
            i +
            '"><option value="" selected disabled hidden>Select an Option</option><option value="1">Strongly Disagree</option><option value="2">Disagree</option><option value="3">Neutral</option><option value="4">Agree</option><option value="5">Strongly Agree</option></select>';

        questionContainer.append(question);
        $("#survey").append(questionContainer);
    }
}
