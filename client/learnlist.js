

const createLearningCard = (problem) => {

    const learningContainer = document.querySelector("#learning-container");

    const learningCard = document.createElement('div')

    learningCard.innerHTML = `
    <p class='problem'>${problem.address}</p>;

 
}




const displayLearningList = (arr) => {
  const learningContainer = document.querySelector("#learning-container");

  housesContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createLearningCard(arr[i]);
  }
};