document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
const productRewards = [
        {
            reward: "Bamboo Stand",
            pledge: "Pledge $25 or more",
            rewardType: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            days: "101",
            btn: "Select Reward"
        },
        {
            reward: "Black Edition Stand",
            pledge: "Pledge $75 or more",
            rewardType: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            days: "64",
            btn: "Select Reward"
        },
        {
            reward: "Mahogany Special Edition",
            pledge: "Pledge $200 or more",
            rewardType: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            days: "0",
            btn: "Out of Stock"
        }
    ];

    const about = document.querySelector('.about');
    productRewards.forEach(productReward => {
        const section = document.createElement('section');
        section.classList.add('bamboo');

        const firstDiv = document.createElement('div');
        firstDiv.classList.add('b-in');
        section.appendChild(firstDiv);

        const firstHeader = document.createElement('h2');
        firstHeader.textContent = productReward.reward;
        firstDiv.appendChild(firstHeader);

        const firstSpan = document.createElement('span');
        firstSpan.textContent = productReward.pledge;
        firstDiv.appendChild(firstSpan);

        const firstParagraph = document.createElement('p');
        firstParagraph.textContent = productReward.rewardType;
        section.appendChild(firstParagraph);

        const secondDiv = document.createElement('div');
        secondDiv.classList.add('b-reward');

        const secondHeader = document.createElement('h2');
        secondHeader.textContent = productReward.days;
        const secondSpan = document.createElement('span');
        secondSpan.textContent = 'left';
        secondHeader.appendChild(secondSpan);
        secondDiv.appendChild(secondHeader);
        section.appendChild(secondDiv);

        const button = document.createElement('button');
        button.id = 'reward';
        button.textContent = productReward.btn;
        secondDiv.appendChild(button);

        if (productReward.reward === 'Mahogany Special Edition') {
            section.style.opacity = '0.5';
            button.style.backgroundColor = '#2F2F2F';
            button.style.opacity = '0.5';
            firstSpan.style.opacity = '0.5';
          }
        about.appendChild(section);
        // console.log(section);
    });

    const bookmarkButton = document.getElementById('book');

// Check if the bookmarked state is stored in localStorage
let isBookmarked = localStorage.getItem("isBookmarked") === "true";

// Apply initial state based on localStorage
if (isBookmarked) {
  bookmarkButton.textContent = 'Bookmarked';
  bookmarkButton.style.width = '190px';
  bookmarkButton.style.color = '#147A73';
  bookmarkButton.innerHTML = '<svg id="btn" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#147A73" cx="28" cy="28" r="28"/><path fill="#FFFFFF" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>Bookmarked';
}

bookmarkButton.addEventListener('click', (e) => {
    e.preventDefault();
  if (!isBookmarked) {
    // Toggle to bookmarked state
    bookmarkButton.style.width = '190px';
    bookmarkButton.style.color = '#147A73';
    bookmarkButton.innerHTML = '<svg id="btn" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#147A73" cx="28" cy="28" r="28"/><path fill="#FFFFFF" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>Bookmarked';
    // Store bookmarked state in localStorage
    localStorage.setItem("isBookmarked", true);
  } else {
    // Toggle to non-bookmarked state
    bookmarkButton.style.width = '174px';
    bookmarkButton.style.color = '#7A7A7A';
    bookmarkButton.innerHTML = '<svg  width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>Bookmark';
    // Remove bookmarked state from localStorage
    localStorage.setItem("isBookmarked", false);
  }

  // Update isBookmarked variable
  isBookmarked = !isBookmarked;
});

const openHam = document.querySelector('.open-ham');
const closeHam = document.querySelector('.close-ham');
const hamContainer = document.querySelector('.link-menu-tab');
// console.log(hamContainer)

openHam.addEventListener('click', () => {
  openHam.style.display = 'none';
  closeHam.style.display = 'block';
  hamContainer.style.display = 'block';
});

closeHam.addEventListener('click', () => {
  openHam.style.display = 'block';
  closeHam.style.display = 'none';
  hamContainer.style.display = 'none';
});

});