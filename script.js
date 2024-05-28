$(document).ready(function() {
    // Load questions from JSON file
    $.getJSON("https://hienhatrithuc.github.io/testhoidap/questions.json", function(data) {
        var quizContent = '';
        // Loop through each question
        $.each(data.questions, function(index, question) {
            // Build HTML for each question
            quizContent += '<div class="question">';
            quizContent += '<h2>' + question.questionText + '</h2>';
            // Loop through each option for the question
            $.each(question.options, function(optionIndex, option) {
                quizContent += '<input type="radio" name="question' + index + '" value="' + optionIndex + '">';
                quizContent += '<label>' + option + '</label><br>';
            });
            quizContent += '</div>';
        });
        // Add submit button
        quizContent += '<button id="submit">Submit</button>';
        // Insert quiz content into the container
        $('#quiz-container').html(quizContent);
        
        // Add event listener for submit button
        $('#submit').click(function() {
            // Logic to check answers and display result
            var score = 0;
            $('.question').each(function(index, element) {
                var selectedOption = $(element).find('input[type="radio"]:checked').val();
                if (selectedOption === data.questions[index].correctAnswer) {
                    score++;
                }
            });
            // Display result
            alert("Your score: " + score + " out of " + data.questions.length);
        });
    });
});
