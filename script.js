// Using Wizard Orpheus JS library to make this AI game

var myGame = new WizardOrpheus('', `You're a very popular journalist who has a very reputable journal. You have many requests for having people put their work in your journal. However, you should only choose the most interesting ones. Don't get convinced too easily!`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('submit-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    myGame.message(userInput);

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>';

    document.getElementById('user-input').value = '';
});

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})
