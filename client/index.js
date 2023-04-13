const baseURL = 'http://localhost:4021'

console.log('ALL SYSTEMS OPERATIONAL')

let templateBtn = document.querySelector('#templateButton')
let inputFields = document.querySelector('#inputSection')


const getTemplate = () => {
    axios.get(`${baseURL}/template`)
    .then ((res) => {
        console.log(res.data)

        for (let i = 0; i < res.data.length; i++) {
          let pTag = document.createElement("p");

          pTag.innerHTML = `
                    ${res.data[i]}: <input type="text">
                `;
          inputFields.appendChild(pTag);
        }
    })
    .catch((theseHands) => {
        console.log(theseHands)

    })
}

templateBtn.addEventListener('click', getTemplate)