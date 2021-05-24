const historyMedium = {
  _id: {},
  name: 'American History Quiz',
  topic: 'History',
  difficulty: 'Medium',
  questions: [
    {
      text: 'Indepenence day was first established as a holiday by Congress in what year?',
      answers: [
        { text: '1853', isCorrect: false },
        { text: '1776', isCorrect: false },
        { text: '1870', isCorrect: true },
        { text: '1938', isCorrect: false },
      ],
    },
    {
      text: 'Who was the first President to live in the White House?',
      answers: [
        { text: 'John Adams', isCorrect: true },
        { text: 'Thomas Jefferson', isCorrect: false },
        { text: 'George Washington', isCorrect: false },
        { text: 'James Madison', isCorrect: false },
      ],
    },
    {
      text: 'What do the colors of the american flag symbolize?',
      answers: [
        { text: 'Nothing, they\'re just pretty', isCorrect: false },
        { text: 'Red: hardiness, White: purity, Blue: perseverence', isCorrect: true },
        { text: 'Red: compassion, White: peace and unity, Blue: rememberance', isCorrect: false },
        { text: 'Red: revolution, White: stability, Blue: integrity', isCorrect: false },
      ],
    },
    {
      text: 'Which three Presidents died on the 4th of July?',
      answers: [
        { text: 'George Washington, Chester Arthur, and James Monroe', isCorrect: false },
        { text: 'Abraham Lincoln, Thomas Jefferson, and Richard Nixon', isCorrect: false },
        { text: 'Johan Adams, Thomas Jefferson, and James Monroe', isCorrect: true },
        { text: 'Harry Truman, Franklin Pierce, and John Tyler', isCorrect: false },
      ],
    },
    {
      text: 'Where did John Philip Sousa compose The Stars and Stripes Forever, the official march of the United States?',
      answers: [
        { text: 'In an army bunker in the Civil War', isCorrect: false },
        { text: 'In Washington D.C. after visiting the White House for the first time', isCorrect: true },
        { text: 'In his living room, after a particularly good dinner', isCorrect: false },
        { text: 'On a boat, en route from a European vacation with his wife', isCorrect: false },
      ],
    },
    {
      text: 'Where was the first 4th of July celebration with fireworks display held?',
      answers: [
        { text: 'Washington D.C.', isCorrect: false },
        { text: 'New York, NY', isCorrect: false },
        { text: 'Boston, MA', isCorrect: true },
        { text: 'Atlanta, GA', isCorrect: false },
      ],
    },
  ],
};
module.eports = historyMedium;

// SOURCE: https://www.pbs.org/a-capitol-fourth/fireworks-fun/history-quiz/
