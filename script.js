function audio() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: true }) // add audio property
        .then(function (stream) {
            var video = document.getElementById('videoElement')
            video.srcObject = stream
            video.play()
        })
        .catch(function (err) {
            console.log('Error: ' + err.message)
        })
}

function startInterview() {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            var video = document.getElementById('videoElement')
            video.srcObject = stream
            video.play()
        })
        .catch(function (err) {
            console.log('Error: ' + err.message)
        })

    // Create an array of questions
    var questions = [
        'Q: Tell me about yourself.',
        'Q: Why do you want to work for this company?',
        'Q: What are your strengths?',
        'Q: What are your weaknesses?',
        'Q: How do you handle stress and pressure?',
        'Q: What are your long-term goals?',
        'Q: Why should we hire you?',
        'Q: What is your greatest achievement?',
        'Q: Do you have any questions for me?',
        'Q: Is there anything else you would like to add?',
    ]

    // Initialize the current question index to 0
    var currentQuestion = 0
    document.getElementById('interview-area').innerHTML = ''

    // Create a div to hold the interview questions and answers
    var interviewDiv = document.createElement('div')
    interviewDiv.innerHTML = '<p>' + questions[currentQuestion]
    document.getElementById('interview-area').appendChild(interviewDiv)

    // Create a countdown timer
    var countdown = 20
    var timer = setInterval(function () {
        countdown--
        if (countdown <= 0) {
            // Get the user's response
            //var response = interviewDiv.getElementsByTagName("textarea")[0].value;

            // Use AI to generate a response to the user's response
            var aiResponse = 'AI response goes here'

            // Update the interview div with the AI's response
            interviewDiv.innerHTML += "<p>AI's response: " + aiResponse + '</p>'

            // Move to the next question
            currentQuestion++
            if (currentQuestion < questions.length) {
                // If there are more questions, update the interview div with the next question
                interviewDiv.innerHTML = '<p>' + questions[currentQuestion]
                countdown = 20
            } else {
                // If there are no more questions, clear the timer
                clearInterval(timer)
            }
        }
        document.getElementById('countdown').innerHTML = countdown
    }, 1000)

    // Create a div to display the countdown timer
    var countdownDiv = document.createElement('div')
    countdownDiv.innerHTML = '<p>Time remaining: <span id="countdown">' + countdown + '</span> seconds</p>'
    document.getElementById('interview-area').appendChild(countdownDiv)
}
