const natureEasy = {
  _id: {},
  name: 'Animals for the whole family quiz',
  topic: 'Nature',
  difficulty: 'Easy',
  questions: [
    {
      text: 'What is the fastest animal in the world?',
      answers: [
        { text: 'peregrine falcon', isCorrect: true },
        { text: 'cheetah', isCorrect: false },
        { text: 'ant', isCorrect: false },
        { text: 'human', isCorrect: false },
      ],
    },
    {
      text: 'What sea creature is a blue whale\'s favorite meal?',
      answers: [
        { text: 'seaweed', isCorrect: false },
        { text: 'dolphin', isCorrect: false },
        { text: 'fish', isCorrect: false },
        { text: 'krill', isCorrect: true },
      ],
    },
    {
      text: 'Which mamal has the most powerful bite in the world?',
      answers: [
        { text: 'baboon', isCorrect: false },
        { text: 'wolf', isCorrect: false },
        { text: 'hippopotamous', isCorrect: true },
        { text: 'lion', isCorrect: false },
      ],
    },
    {
      text: 'What nickname do adult male gorrilas have due to their hair?',
      answers: [
        { text: 'redheads', isCorrect: false },
        { text: 'silverback', isCorrect: true },
        { text: 'baldy', isCorrect: false },
        { text: 'blue bonnets', isCorrect: false },
      ],
    },
    {
      text: 'How many wolves did the largest recorded pack have?',
      answers: [
        { text: 'up to 20', isCorrect: false },
        { text: 'up to 100', isCorrect: false },
        { text: 'up to 200', isCorrect: false },
        { text: 'up to 400', isCorrect: true },
      ],
    },
  ],
};

module.exports = natureEasy;
// BASED ON DATA FROM: https://www.mylondon.news/whats-on/20-animal-quiz-questions-answers-18155363
