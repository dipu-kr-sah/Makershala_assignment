const footerNotes = (heading, description) => {
  /*
    `<div class="flex flex-col text-white text-justify">
   <span class="font-bold">${heading}</span>
   ${description}
 </div>`
 */
  const div = document.createElement("div");
  const headingContainer = document.createElement("span");
  const descriptionContainer = document.createElement("span");
  descriptionContainer.innerText = description;
  div.setAttribute(
    "class",
    "flex flex-col text-white text-justify box-border py-3"
  );
  headingContainer.setAttribute("class", "font-bold");
  headingContainer.innerText = heading;
  div.appendChild(headingContainer);
  div.appendChild(descriptionContainer);
  return div;
};
const FooterNotesArr = [
  {
    heading: "About Makershala",
    description:
      "Today, in the computer age, not all schools teach coding in early " +
      "childhood resulting in a major gap in the requirements of the new " +
      "world and our children's skills. WhiteHat Jr introduces and prepares " +
      "your child from 6-18 years for this new coding world. They learn " +
      "fundamentals of coding--logic, structure, sequence and algorithmic " +
      "thinking--to generate creative outcomes like animations and apps. All " +
      "classes are taught Live 1:1 Online in the comfort of your home by Top " +
      "1% selected teachers and subject matter experts.",
  },
  {
    heading: "Coding For Kids",
    description: `Whether you are a student interested in the IT careers that you could explore with a coding qualification or just fascinated by the world of tech and coding courses, WhiteHat Jr offers a wide range of online coding courses that make coding accessible to kids and young teenagers. We've put together a simple guide to answer some of the most commonly asked questions from parents and prospective students to help you understand the basics of what our kids programming courses cover, whether they are right for your child and how best to navigate them.`,
  },
  {
    heading: "Curious about what is involved in courses for coding for kids?",
    description:
      "We have developed kids programming courses that allow kids, teens, and " +
      "young adults to learn how to code at all ages with proper coding classes " +
      "and in an environment that works for them - Online. The courses offered " +
      "by WhiteHat Jr are designed to teach kids to code with core programming " +
      "skills, and then improve the proficiency of the kids coding languages. " +
      "Our facilitators align digital literacy into coding courses, as required " +
      "by the existing skills of the learners. Since our curriculum is " +
      "developed by industry experts and the most important activity of " +
      "teaching coding is done by top 1% selected teachers, learners get state " +
      "of the art education through our propriety, creative activity based" +
      "curriculum.",
  },
  {
    heading: "Are coding classes for kids suitable?",
    description:
      "When you're a parent exploring the possibilities that coding " +
      "classes for kids can bring, you 're probably wondering whether coding courses will " +
      "suit your child. The benefits of learning to code courses extend far " +
      "beyond future job opportunities. WhiteHat Jr teaches coding for kids in " +
      "programs designed to stimulate creativity, problem-solving skills, and " +
      "academic performance overall. Over the longer term, online coding " +
      "courses are a great way to train learners for an increasingly " +
      "tech-oriented world.",
  },
  {
    heading: "What will you learn in a coding course for kids?",
    description: `WhiteHat Jr's coding courses are oriented towards coding and programming. You will learn`,
  },
  {
    heading: "The essentials of coding: Logic, Structure, Sequence",
    description: `How to create Websites, Animations & Apps
    How to manipulate data using programming languages
    How to be a problem solver
    How technologies converse with each other
    `,
  },
  {
    heading: "Start to learn coding with us!",
    description:
      "If you are a motivated parent and passionate about technology and where " +
      "it can lead you to, then Join now. If you or your child would like to " +
      "find out more about the opportunities provided by our coding programs, " +
      "explore the kids programming courses offered by WhiteHat Jr and consider " +
      "enrolling for a free trial. Remember, no coding experience beforehand is " +
      "required.",
  },
];
const footerNotesContainer = document.getElementById("footer-notes");
for (let notes of FooterNotesArr) {
  footerNotesContainer.appendChild(
    footerNotes(notes.heading, notes.description)
  );
}
