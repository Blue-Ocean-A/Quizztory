const historyEasy = {
  _id:
  name: 'The easiest history quiz in the world',
  topic: 'History',
  difficult: 'Easy',
  questions: [
    {
      text: 'What happened in 1066?',
      answers: [
        { text: 'WWII', isCorrect: false },
        { text: 'The discovery of the Americas', isCorrect: false },
        { text: 'The Battle of Hastings', isCorrect: true },
        { text: 'Nothing of importance', isCorrect: false },
      ]
    },
    {
      text: 'Which of these was NOT a Roman leader?',
      answers: [
        { text: 'Julian Ceaser', isCorrect: false },
        { text: 'Nero', isCorrect: false },
        { text: 'Ceaser Salad', isCorrect: true },
        { text: 'Augustus', isCorrect: false },
      ]
    },
    {
      text: 'Where was the Titantic headed to before it sank?',
      answers: [
        { text: 'Japan', isCorrect: false },
        { text: 'A leisure loop in the ocean and then back home', isCorrect: false },
        { text: 'Mars', isCorrect: false },
        { text: 'USA', isCorrect: true },
      ]
    },
    {
      text: 'Who did Henry VIII first marry?',
      answers: [
        { text: 'Catherine of Aragon', isCorrect: true },
        { text: 'Meghan Merkel', isCorrect: false },
        { text: 'Kate Middleton', isCorrect: false },
        { text: 'Grace Kelly', isCorrect: false },
      ]
    },
    {
      text: 'What color was the Statue of Liberty originally?',
      answers: [
        { text: 'Pink', isCorrect: false },
        { text: 'White', isCorrect: false },
        { text: 'Copper', isCorrect: true },
        { text: 'Blue', isCorrect: false },
      ]
    }
};

module.exports = historyEasy;
// SOURCE: https://www.beano.com/posts/the-ultimate-easy-history-quiz