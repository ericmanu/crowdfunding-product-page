const pledgeRewards = [
  {
    reward: "Pledge with no reward",
    pledge: "",
    rewardType:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    days: "",
  },
  {
    reward: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    rewardType:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    days: "101",
  },
  {
    reward: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    rewardType:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    days: "64",
  },
  {
    reward: "Mahogany Special Edition",
    pledge: "Pledge $200 or more",
    rewardType:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    days: "0",
  },
  ];
  // OPEN MODAL
  const section = document.querySelector(".project");
  const pledgecontainer = document.createElement("section");
  pledgecontainer.classList.add("pledgecontainer");
  pledgeRewards.forEach((pledge) => {
    const div1 = document.createElement("div");
    div1.classList.add("pledge");
    pledgecontainer.appendChild(div1);

    const radioButton = document.createElement("input");
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("name", "pledge");
    radioButton.setAttribute("id", "pledge");
    div1.appendChild(radioButton);

    const div2 = document.createElement("div");
    div2.classList.add("edition");
    div1.appendChild(div2);

    const header1 = document.createElement("h2");
    header1.textContent = pledge.reward;
    div2.appendChild(header1);

    const header2 = document.createElement("h6");
    header2.textContent = pledge.pledge;
    div2.appendChild(header2);

    const div3 = document.createElement("div");
    div3.classList.add("edd");
    div1.appendChild(div3);

    const header3 = document.createElement("h2");
    header3.textContent = pledge.days;
    const span = document.createElement("span");
    span.textContent = "left";
    header3.appendChild(span);
    div3.appendChild(header3);

    const paragraph = document.createElement("p");
    paragraph.textContent = pledge.rewardType;
    div1.appendChild(paragraph);
    if (pledge.reward === "Pledge with no reward") {
      div3.style.display = "none";
    }
    if (pledge.reward === "Black Edition Stand") {
      div2.style.width = "300px";
    }
    if (pledge.reward === "Mahogany Special Edition") {
      div2.style.width = "358px";
      div1.style.opacity = "0.5";
    }
    section.appendChild(pledgecontainer);
  });
  // CLOSE MODAL EVENTS
  const section1 = document.querySelector(".lightbox");
  const openThisProject = document.getElementById("back");
  const closeThisProject = document.querySelector(".close-modal");

  openThisProject.addEventListener("click", () => {
    section1.style.display = "block";
  });
  closeThisProject.addEventListener("click", () => {
    section1.style.display = "none";
  });
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
    if (event.target == section1) {
      section1.style.display = "none";
    }
  });
  function decrementDaysLeft() {
    const daysLeftElement = document.querySelector(".days h1");
    let daysLeft = parseInt(localStorage.getItem("daysLeft")) || 57;
    daysLeft--;
    daysLeftElement.textContent = daysLeft;
    localStorage.setItem("daysLeft", daysLeft);
  }
  function updateDaysCount() {
    return setInterval(decrementDaysLeft, 86400000);
  }
  updateDaysCount();
  // Retrieve and display initial values from localStorage
  const daysLeftElement = document.querySelector(".days h1");
  let daysLeft = parseInt(localStorage.getItem("daysLeft")) || 57;
  daysLeft--;
  daysLeftElement.textContent = daysLeft;

  const moneyElement = document.querySelector(".money h1");
  let moneyValue = parseInt(localStorage.getItem("moneyValue")) || 89914;
  moneyElement.textContent = `$${moneyValue.toLocaleString()}`;

  const backersCountElement = document.querySelector(".backers h1");
  let backersCount = parseInt(localStorage.getItem("backersCount")) || 5007;
  backersCountElement.textContent = backersCount.toLocaleString();

  const storedProgressValue = parseInt(localStorage.getItem("progressValue")) || 89914;
  const progressBar = document.getElementById("progress-bar");
  const maxValue = parseInt(progressBar.max);
  progressBar.value = Math.min(storedProgressValue, maxValue);
  // RADIO EVENTS
  const btns = document.querySelectorAll(".edition");
  btns.forEach((btn, index) => {
    const radioButton = btn.parentElement.querySelector("#pledge");
    const pledge = pledgeRewards[index];
    const pl = radioButton.parentElement;
    const project = pl.parentElement.parentElement;

    btn.addEventListener("click", () => {
      if (radioButton.checked = true) {
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
            if (pledge.reward === "Pledge with no reward") {
              updateMoneyValue(0);
              updateProgressBar(0);
              incrementBackersCount();
              const thanksSection = thankYouPage();
              project.replaceWith(thanksSection);
            }else if (pledge.reward === "Bamboo Stand" && inputValue >= 25) {
              updateMoneyValue(inputValue);
              updateProgressBar(inputValue);
              incrementBackersCount();
              const thanksSection = thankYouPage();
              project.replaceWith(thanksSection);
            } else if (pledge.reward === "Black Edition Stand" && inputValue >= 75) {
              updateMoneyValue(inputValue);
              updateProgressBar(inputValue);
              incrementBackersCount();
              const thanksSection = thankYouPage();
              project.replaceWith(thanksSection);
            } else {
              if (pledge.reward === "Bamboo Stand") {
                alert("Please enter a value of 25 or more.");
              } else if (pledge.reward === "Black Edition Stand") {
                alert("Please enter a value of 75 or more.");
              } else {
                alert("The edition is out of stock.")
              }
            }
          });
          function updateMoneyValue(value) {
            const moneyElement = document.querySelector(".money h1");
            let currentValue = parseInt(localStorage.getItem("moneyValue")) || 89914;
            const maxValue = 100000; // Maximum value set to 100,000
            const updatedValue = Math.min(currentValue + value, maxValue);
            moneyElement.textContent = `$${updatedValue.toLocaleString()}`;
            localStorage.setItem("moneyValue", updatedValue);
          }

          function updateProgressBar(value) {
            const progressBar = document.getElementById("progress-bar");
            let currentValue = parseInt(localStorage.getItem("progressValue")) || 89914;
            const maxValue = parseInt(progressBar.max);
            const updatedValue = currentValue + value;
            progressBar.value = Math.min(updatedValue, maxValue);
            localStorage.setItem("progressValue", updatedValue);
          }

          function incrementBackersCount() {
            const backersCountElement = document.querySelector(".backers h1");
            let backersCount = parseInt(localStorage.getItem("backersCount")) || 5007;
            backersCount++;
            backersCountElement.textContent = backersCount.toLocaleString();
            localStorage.setItem("backersCount", backersCount);
          }
        };
      } else {
        pl.style.height = "157px";
        pl.style.border = "1px solid rgba(0, 0, 0, 0.15)";

        const existingHr = pl.querySelector("hr");
        if (existingHr) {
          existingHr.remove();
        }
        const pledgeAmountDiv = pl.querySelector(".pledgeAmount");
        if (pledgeAmountDiv) {
          pledgeAmountDiv.remove();
        }
      };
      // Collapse other radio inputs
      btns.forEach((otherBtn) => {
        const otherRadioButton = otherBtn.parentElement.querySelector("#pledge");
        const otherPl = otherRadioButton.parentElement;
        if (otherRadioButton !== radioButton) {
          otherRadioButton.checked = false;
          otherPl.style.height = "157px";
          otherPl.style.border = "1px solid rgba(0, 0, 0, 0.15)";

          const existingHr = otherPl.querySelector("hr");
          if (existingHr) {
            existingHr.remove();
          }
          const pledgeAmountDiv = otherPl.querySelector(".pledgeAmount");
          if (pledgeAmountDiv) {
            pledgeAmountDiv.remove();
          }
        }
      });
      project.style.height = "1001px";
    });
  });
  // Modal Complete Page
  const thankYouPage = () => {
    const thanks = document.createElement("section");
    thanks.classList.add("thanks");
    thanks.style.width = "540px";
    thanks.style.height = "449px";
    thanks.style.border = "1px solid rgba(0, 0, 0, 0.0497193)";
    thanks.style.borderRadius = "8px";
    thanks.style.background = "#FFFFFF";

    const thanksImage = document.createElement("img");
    thanksImage.src = "/images/icon-check.svg";
    thanks.appendChild(thanksImage);

    const thanksDiv = document.createElement("div");
    thanksDiv.classList.add("support");
    thanks.appendChild(thanksDiv);

    const h1 = document.createElement("h1");
    h1.textContent = "Thanks for your support!";
    thanksDiv.appendChild(h1);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."
    thanksDiv.appendChild(paragraph);

    const button = document.createElement("button");
    button.classList.add("got-it");
    button.textContent = "Got it!";
    thanksDiv.appendChild(button);

    button.addEventListener("click", () => {
      thanks.style.display = "none";
      section1.style.display = "none";
      setTimeout(() => {
        window.location.reload();
      }, 0);
    });
    return thanks;
  };

  function applyMobileStyles() {
    btns.forEach((btn) => {
      const radioButton = btn.parentElement.querySelector("#pledge");
      const pl = radioButton.parentElement;
      const project = pl.parentElement.parentElement;
      btn.addEventListener("click", () => {
        if (radioButton.checked = true) {
          // Expand selected pledge option
          pl.style.height = "421px";

          const existingHr = pl.querySelector("hr");
          existingHr.style.marginTop = "60px";

          const pledgeAmountDiv = pl.querySelector(".pledgeAmount");
          pledgeAmountDiv.style.width = "231px"
          pledgeAmountDiv.style.height = "92px";
          pledgeAmountDiv.style.flexDirection = "column";

          const button = document.querySelector(".amount");
          button.addEventListener("click", function () {
            thankYouPage();
          });
        } else {
          pl.style.height = "288px";
        }
        btns.forEach((otherBtn) => {
          const otherRadioButton = otherBtn.parentElement.querySelector("#pledge");
          const otherPl = otherRadioButton.parentElement;
          if (otherRadioButton !== radioButton) {
            otherRadioButton.checked = false;
            otherPl.style.height = "288px";
          }
        });
        project.style.height = "1550px";
      });
    });
    const thankYouPage = () => {
      const thanks = document.querySelector(".thanks");
      thanks.style.width = "327px";
      thanks.style.height = "382px";
      return thanks;
    };
  };
  // Check if the viewport width matches the mobile view
  function isMobileView() {
    return window.matchMedia("(min-width: 320px) and (max-width: 480px)").matches;
  };
  // Function to handle window resize event
  function handleResize() {
    if (isMobileView()) {
      applyMobileStyles();
    }
  };
  // Add event listener to handle window resize
  window.addEventListener("resize", handleResize);
  // Initial check on page load
  handleResize();
