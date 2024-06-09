(async () => {
  const deleteSelectedCommentButton = document.querySelector(
    ".deleteSelectedCommentButton"
  );
  let commentsData;

  async function fetchCommentsData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    commentsData = data;
    return data;
  }

  async function createComments(comments) {
    const app = document.querySelector(".app");
    const headers = document.querySelector(".headers");
    app.innerHTML = "";
    app.appendChild(headers);

    comments.forEach((objectInArray) => {
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

      deleteButton.addEventListener("click", () => {
        deleteComment(objectInArray.id);
      });

      mainSection.addEventListener("click", () => {
        mainSection.classList.toggle("selected");
      });

      deleteSelectedCommentButton.addEventListener("click", () => {
        if (mainSection.classList.contains("selected")) {
          deleteComment(objectInArray.id);
        }
      });
      app.appendChild(mainSection);
    });
  }

  async function deleteComment(elementId) {
    commentsData = commentsData.filter((element) => element.id !== elementId);

    createComments(commentsData);
  }
  const initialComments = await fetchCommentsData();
  await createComments(initialComments);
})();
