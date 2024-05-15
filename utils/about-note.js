function calculateElapsedTime(startDate) {
  const currentDate = new Date();
  const startTime = new Date(startDate);
  const timeDifference = currentDate - startTime;

  const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
  const days = Math.floor(
    (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const hours = Math.floor(
    (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  return { years, days, hours, minutes, seconds };
}

const elapsedTime = calculateElapsedTime("January 1, 2019 00:00:00 GMT+0000");

const aboutText = [
  "Hey there!",
  "I'm Gabriel.",
  "A product-driven full stack web developer.",
  "Based in Nigeria.",
  "Proficient in the LAMP, WAMP, JAMstack, and XAMPP stacks.",
  "Focusing on JavaScript technologies for the client side;",
  "PHP technologies on the server side;",
  "And SQL based databases.",
  `With focus on web technologies, its been ${elapsedTime.years} years, ${elapsedTime.days} days since my first \"Hello World\"`,
  "I am enthusiastic about building products, and developing ideas.",
  "And conversant with the African start-up culture.",
  "I am open to innovations, collaborations, and opportunities.",
];

export { aboutText };
