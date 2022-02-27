const myObject = {
  name: "Emon Morol",
  phone: "01614714959",
  money: {
    fiftyNote: 5,
    houndredNote: 7,
    fiveHOundredNote: 3,
    totalMoney: 2450,
  },
  booksIRead: [
    "physics",
    "chemistry",
    "mathematics",
    "biology",
    "english",
    "bangla",
  ],
  moneySpent: function () {
    return myObject.money;
  },
};

// const tempString = `my name is ${myObject.name} . I have Total money of ${myObject.money.totalMoney} . I Have read the Book of ${myObject.booksIRead[1]}`;
// console.log(tempString);

// const number = () => 89;
// console.log(number());

// const divide = (num) => num / 7;
// console.log(divide(76));

// const result = (num1, num2) => {
//   const sum = num1 + num2;
//   const answer = sum / 2;
//   return answer;
// };
// console.log(result(20, 20));

// const result = (num1, num2) => {
//   const sum1 = num1 + 7;
//   const sum2 = num2 + 7;
//   const answer = sum1 + sum2;
//   return answer;
// };
// console.log(result(20, 20));

// const divided = numArray.find((number) => number < 50);
// console.log(divided);

// const money = {
//   fiftyNote: 5,
//   houndredNote: 7,
//   fiveHOundredNote: 3,
//   totalMoney: 2450,
// };

// const {
//   money: { totalMoney },
// } = myObject;
// console.log(totalMoney);

// const numArray = [34, 56, 78, 88, 46, 86, 24, 92, 28, 60, 99];
// const [a, balance] = numArray;
// console.log(balance, a);

const gettingData = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPicture(data));
};
gettingData();
const displayPicture = (photos) => {
  const container = document.getElementById("container-photos");
  photos.forEach((photo) => {
    // console.log(photo);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card" style="width: 18rem">
        <img
          src="${photo.url}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onclick="gettingFullDetails(${photo.id},)" class="btn btn-primary">Detail</button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
};
const gettingFullDetails = (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetail(data));
};
const displayDetail = (detail) => {
  const detailDiv = document.getElementById("photo-detail");
  document.getElementById("photo-detail").style.display = "flex";
  detailDiv.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card"">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${detail.url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                                <button onclick="closeDetailWindow()" id="close-button">×</button>
              <div class="card-body">
                <img id="thumbnail" src="${detail.thumbnailUrl}" class="img-fluid" alt="...">
                <h5 class="card-title">${detail.title}</h5>
                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quae expedita dolor? Cumque nisi molestias sunt. Quia explicabo magnam facere fuga tenetur esse. Ut labore modi alias asperiores dolor! Fugit porro debitis modi vel aut dicta, eveniet vero magni ipsum quos voluptas fugiat, in aliquam est accusamus voluptatibus cum sunt iure numquam ipsa temporibus autem. Laborum, nobis est laboriosam sit mollitia tenetur quas et assumenda, voluptatem unde aperiam quod eos earum ad. Nesciunt, excepturi repellendus at suscipit esse fugit libero nulla, distinctio tenetur quam ex tempore voluptatem animi voluptas praesentium illo minima, iure tempora iusto quod inventore nihil ipsa minus?</p>
              </div>
            </div>
          </div>
        </div>
    `;
  detailDiv.appendChild(div);
};

function closeDetailWindow() {
  document.getElementById("photo-detail").style.display = "none";
}
