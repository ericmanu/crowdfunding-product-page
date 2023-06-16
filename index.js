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

});

// Retrieve and display initial values from localStorage
const moneyElement = document.querySelector(".money h1");
let moneyValue = parseInt(localStorage.getItem("moneyValue")) || 0;
moneyElement.textContent = `$${moneyValue.toLocaleString()}`;

const backersCountElement = document.querySelector(".backers h1");
let backersCount = parseInt(localStorage.getItem("backersCount")) || 0;
backersCountElement.textContent = backersCount.toLocaleString();

const storedProgressValue = parseInt(localStorage.getItem("progressValue")) || 0;
const progressBar = document.getElementById("progress-bar");
const maxValue = parseInt(progressBar.max);
progressBar.value = Math.min(storedProgressValue, maxValue);

// RADIO EVENTS
const btns = document.querySelectorAll(".edition");

btns.forEach((btn) => {
  const radioButton = btn.parentElement.querySelector("#pledge");
  const pl = radioButton.parentElement;
  const project = pl.parentElement.parentElement;

  btn.addEventListener("click", () => {
    if (radioButton.checked) {
      // Expand selected pledge option
      pl.style.height = "254px";
      pl.style.border = "2px solid #3CB3AB";

      // Check if <hr> already exists
      const existingHr = pl.querySelector("hr");
      if (!existingHr) {
        const hr = document.createElement("hr");
        hr.style.border = "1px solid rgba(0, 0, 0, 0.15)";
        hr.style.marginTop = "30px";
        pl.appendChild(hr);
      }

      const pledgeAmountDiv = pl.querySelector(".pledgeAmount");
      if (!pledgeAmountDiv) {
        // Create pledge amount input section
        const div = document.createElement("div");
        div.classList.add("pledgeAmount");
        pl.appendChild(div);
        div.style.height = "48px";
        div.style.width = "578px";
        div.style.margin = "24px auto";

        const h6 = document.createElement("h6");
        div.appendChild(h6);
        h6.textContent = "Enter your pledge";

        const div1 = document.createElement("div");
        div.appendChild(div1);

        const span = document.createElement("span");
        div1.appendChild(span);
        span.textContent = "$";

        const input = document.createElement("input");
        div1.appendChild(input);
        input.setAttribute("type", "number");
        input.setAttribute("id", "pa");
        input.setAttribute("name", "inputno");

        const button = document.createElement("button");
        button.classList.add("amount");
        div1.appendChild(button);
        button.textContent = "Continue";

        button.addEventListener("click", function () {
          const inputValue = parseInt(input.value);
          if (inputValue >= 25) {
            updateMoneyValue(inputValue);
            updateProgressBar(inputValue);
            incrementBackersCount();
            const thanksSection = thankYouPage();
            project.replaceWith(thanksSection);
          } else {
            alert("Please enter a value of 25 or more.");
          }
        });

        function updateMoneyValue(value) {
          let currentValue = parseInt(localStorage.getItem("moneyValue")) || 0;
          const updatedValue = currentValue + value;
          moneyElement.textContent = `$${updatedValue.toLocaleString()}`;
          localStorage.setItem("moneyValue", updatedValue);
        }

        function updateProgressBar(value) {
          let currentValue = parseInt(localStorage.getItem("progressValue")) || 0;
          const updatedValue = currentValue + value;
          progressBar.value = Math.min(updatedValue, maxValue);
          localStorage.setItem("progressValue", updatedValue);
        }

        function incrementBackersCount() {
          let backersCount = parseInt(localStorage.getItem("backersCount")) || 0;
          backersCount++;
          backersCountElement.textContent = backersCount.toLocaleString();
          localStorage.setItem("backersCount", backersCount);
        }
      }
    } else {
      // Collapse deselected pledge option
      pl.style.height = "157px";
      pl.style.border = "1px solid rgba(0, 0, 0, 0.15)";

      const pledgeAmountDiv = pl.querySelector(".pledgeAmount");
      if (pledgeAmountDiv) {
        pledgeAmountDiv.remove();
      }
    }

    // Collapse other radio inputs
    btns.forEach((otherBtn) => {
      const otherRadioButton = otherBtn.parentElement.querySelector("#pledge");
      const otherPl = otherRadioButton.parentElement;
      if (otherRadioButton !== radioButton) {
        otherRadioButton.checked = false;
        otherPl.style.height = "157px";
        otherPl.style.border = "1px solid rgba(0, 0, 0, 0.15)";

        const pledgeAmountDiv = otherPl.querySelector(".pledgeAmount");
        if (pledgeAmountDiv) {
          pledgeAmountDiv.remove();
        }
      }
    });

    project.style.height = "1001px";
  });
});
