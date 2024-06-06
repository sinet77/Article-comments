(async () => {
  async function fetchCommentsData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    return data;
  }

  async function createComments() {
    const data = await fetchCommentsData();
    const app = document.querySelector(".app");
    const headers = document.querySelector(".headers");
    app.innerHTML = "";
    app.appendChild(headers);

    data.forEach((objectInArray) => {
      const mainSection = document.createElement("div");
      mainSection.classList.add("main");

      const commentName = document.createElement("div");
      commentName.classList.add("commentName");
      commentName.textContent = objectInArray.name;
      mainSection.appendChild(commentName);

      const email = document.createElement("div");
      email.classList.add("email");
      email.textContent = objectInArray.email;
      mainSection.appendChild(email);

      const body = document.createElement("div");
      body.classList.add("body");
      body.textContent = objectInArray.body;
      mainSection.appendChild(body);

      const action = document.createElement("div");
      action.classList.add("action");
      mainSection.appendChild(action);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.textContent = "Delete";
      action.appendChild(deleteButton);

      app.appendChild(mainSection);
    });
  }

  await createComments();
})();
