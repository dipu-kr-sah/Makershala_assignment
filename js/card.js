/**
<div class="card h-[25rem] w-[18rem] rounded-2xl flex flex-col">
                <header
                  class="flex h-full grow w-full rounded-t-2xl bg-[length:100%_150%] bg-[url(./images/beach-scenery.jpg)]"
                ></header>
                <footer
                  class="info w-full bg-white h-3/5 flex flex-col rounded-b-2xl"
                >
                  <!-- <img src="" class="h-full" /> -->

                  <div
                    class="icon-and-details-container text-gray-500 box-border px-5 pt-4"
                  >
                    <p class="font-bold text-black">
                      Little Wizards - Clay Modelling competition 2021
                    </p>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        person_outline
                      </span>
                      <span class="details grow">Upto 3 member teams</span>
                    </div>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        calendar_today
                      </span>
                      <span class="details grow">For 7-8 year olds</span>
                    </div>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        emoji_events
                      </span>
                      <span class="details grow"
                        >19 prizes worth Rs. 2,00,000
                      </span>
                    </div>
                  </div>

                  <div class="line border-[1px] w-full"></div>

                  <div
                    data-text="Enter Now"
                    class="box-border mt-2 flex justify-center items-center custom-button text-white h-20"
                  ></div>
                </footer>
              </div><div class="card h-[25rem] w-[18rem] rounded-2xl flex flex-col">
                <header
                  class="flex h-full grow w-full rounded-t-2xl bg-[length:100%_150%] bg-[url(./images/beach-scenery.jpg)]"
                ></header>
                <footer
                  class="info w-full bg-white h-3/5 flex flex-col rounded-b-2xl"
                >
                  <!-- <img src="" class="h-full" /> -->

                  <div
                    class="icon-and-details-container text-gray-500 box-border px-5 pt-4"
                  >
                    <p class="font-bold text-black">
                      Little Wizards - Clay Modelling competition 2021
                    </p>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        person_outline
                      </span>
                      <span class="details grow">Upto 3 member teams</span>
                    </div>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        calendar_today
                      </span>
                      <span class="details grow">For 7-8 year olds</span>
                    </div>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        emoji_events
                      </span>
                      <span class="details grow"
                        >19 prizes worth Rs. 2,00,000
                      </span>
                    </div>
                  </div>

                  <div class="line border-[1px] w-full"></div>

                  <div
                    data-text="Enter Now"
                    class="box-border mt-2 flex justify-center items-center custom-button text-white h-20"
                  ></div>
                </footer>
              </div>
 */

const card = (
  imageUrl,
  title = "Little Wizards - Clay Modelling competition 2021"
) => {
  const allowedMebersLength = "Upto 3 member teams";
  const ageLimit = "For 7-8 years old";
  const rewards = "19 prizes worth Rs. 2,000,000";
  const buttonClickRedirectUrl = "#";
  const deadLineDate = new Date();
  const template = `
  <div class="card h-[29rem] w-[22rem] rounded-2xl flex flex-col box-border p-3">
                <header
                  class="flex h-full grow w-full rounded-t-2xl bg-[length:100%_150%] bg-[url(${imageUrl})]"
                ></header>
                <footer
                  class="info w-full bg-white h-3/5 flex flex-col rounded-b-2xl"
                >
                  <!-- <img src="" class="h-full" /> -->

                  <div
                    class="icon-and-details-container text-gray-500 box-border px-5 pt-4"
                  >
                    <p class="font-bold text-black">
                      ${title}
                    </p>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        person_outline
                      </span>
                      <span class="details grow">${allowedMebersLength}</span>
                    </div>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        calendar_today
                      </span>
                      <span class="details grow">${ageLimit}</span>
                    </div>
                    <div class="icon-and-details flex flex-row">
                      <span
                        class="icon box-border mr-4 material-icons-outlined"
                      >
                        emoji_events
                      </span>
                      <span class="details grow"
                        >${rewards}
                      </span>
                    </div>
                  </div>

                  <div class="line border-[1px] w-full"></div>

                  <div
                    data-text="Enter Now"
                    class="box-border mt-2 flex justify-center items-center custom-button text-white h-20"
                  ></div>
                </footer>
              </div>
  `;
  return template;
};

let innerHTML = "";
const dir_name_images = "./images/";
const images = [
  "beach-scenery.jpg",
  "ballons.jpg",
  "beach-scenery.jpg",
  "colorful-silver-foil.jpg",
  "gaint-wheel.jpg",
  "iron-works.jpg",
  "plant-and-colorful-walls.jpg",
  "umbrella.jpg",
  "yellow-red-house-and-street.jpg",
];
for (let t of images) {
  innerHTML += card(dir_name_images + t);
}
const cardListContainer = document.getElementById("cards_list");
if (cardListContainer) cardListContainer.innerHTML = innerHTML;
