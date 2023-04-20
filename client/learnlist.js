
const baseURL = "http://localhost:4021";
let learnBtn = document.querySelector("#learnButton");
let displaysection = document.querySelector("#displaySection");

const getAllLearn = () => {
  axios
    .get(`${baseURL}/learn`)
    .then((res) => {
      displayLearningList(res.data); 
    })
    .catch((theseHands) => {
      console.log(theseHands);
    });
};


const createLearningCard = (problem) => {
  const learningContainer = document.querySelector("#learning-container");

  const learningCard = document.createElement("div");

  learningCard.classList.add("learning-card");

  learningCard.innerHTML = `
                    <p>${problem.problem_name}</p>
                    <p>${problem.difficulty}</p>
                    <p>${problem.link}</p>
                    
                `
 learningContainer.appendChild(learningCard);
};


const displayLearningList = (arr) => {
  const learningContainer = document.querySelector("#learning-container");

  learningContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createLearningCard(arr[i]);
  }
};

learnBtn.addEventListener("click", getAllLearn);
