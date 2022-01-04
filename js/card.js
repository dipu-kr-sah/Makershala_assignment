const card = (title, imageUrl) => {
  const allowedMebersLength = "Upto 3 member teams";
  const ageLimit = "For 7-8 years old";
  const rewards = "19 prizes worth Rs. 2,000,000";
  const buttonClickRedirectUrl = "#";
  const deadLineDate = new Date();
  const template = `
  <div class='card-container'>
    <header class="image-container">
    <img src="${imageUrl}">
    </header>
    <main>
    </main>
    <footer>
        <button> Enter now</button>
    </footer>
  </div>
  `;
};
