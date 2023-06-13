document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
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
    console.log('Hello');
  });

  closeThisProject.addEventListener("click", () => {
    section1.style.display = "none";
  });

  // RADIO EVENTS
  /*   const radioButton = document.querySelector("#pledge");
  const btn = document.querySelector(".edition");

  btn.addEventListener("click", () => {
    radioButton.checked = true;
    console.log("Hello world");
  }); */
  const btns = document.querySelectorAll(".edition");
  const project = document.querySelector(".project");

  btns.forEach((btn) => {
    const radioButton = btn.parentElement.querySelector("#pledge");
    const pl = radioButton.parentElement;
    console.log(pl);
    btn.addEventListener("click", () => {
      console.log("Hello world");
      radioButton.checked = true;
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

      // Collapse other radio inputs
      btns.forEach((otherBtn) => {
        const otherRadioButton =
          otherBtn.parentElement.querySelector("#pledge");
        const otherPl = otherRadioButton.parentElement;
        if (otherRadioButton !== radioButton) {
          otherRadioButton.checked = false;
          otherPl.style.height = "157px";
          otherPl.style.border = "1px solid rgba(0, 0, 0, 0.15)";
        }
      });
    });
  });

});
/*
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } */
// console.log(backThisProject);
