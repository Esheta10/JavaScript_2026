let userContainer = document.querySelector(".userContainer");
let serachInput = document.querySelector("#searchInput");

const arr = [
  {
    profileUrl:
      "https://www.greekmyths-greekmythology.com/wp-content/uploads/2025/04/penelope-03b-weaving-1280X720-768x432.webp",
    name: "Odysseus",
    email: "odysseus@gmail.com",
  },
  {
    profileUrl:
      "https://www.greekmyths-greekmythology.com/wp-content/uploads/2025/04/penelope-03b-weaving-1280X720-768x432.webp",
    name: "Penelope",
    email: "penelope@gmail.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7J3raqKAqzhpHt2aWY_tZ2zlPUgK1ZwjzttuCyYqZwmZ79SRrFvR8Xc&s=10",
    name: "Telemachus",
    email: "telemachus@gmail.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzT9VwGNj7-bvpfi2o_7q5gb8l66J-03lNIeM1yWxWPVSOiEufLaqRwZF&s=10",
    name: "Achilles",
    email: "achilles@gmail.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = "";

  arr.map(function (obj) {
    let { profileUrl, name, email } = obj;

    let divElem = document.createElement("div");
    divElem.className = "userItem";

    divElem.innerHTML = `
            <img
                src=${profileUrl}
                alt="error loading image"
            />
            <div class="userInfo">
                <h6>${name}</h6>
                <h6>${email}</h6>
            </div>
        `;
    userContainer.append(divElem);
  });
}

renderUsers(arr);

function handleSearch(e){

    let searchValue = e.target.value;
    let filteredUsers = arr.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filteredUsers);
}
serachInput.addEventListener("input", handleSearch);