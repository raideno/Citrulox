import { randomDate } from "./utils.js";

const reviews = [
  {
    author: "Amine",
    stars: 3.5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    message: `J'adore le beurre de cacahuètes et j'ai essayé de nombreuses marques, mais celle-ci est de loin la meilleure que j'ai jamais goûtée ! C'est crémeux, savoureux et parfaitement équilibré en termes de salinité et de sucrerie.`,
    date: randomDate(new Date(2020, 12, 1), new Date()).toDateString(),
  },
  {
    author: "Morad",
    stars: 4.5,
    avatar: "https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg",
    message: `Je suis un amateur de fitness et j'utilise régulièrement le beurre de cacahuètes pour mes smoothies protéinés. Ce beurre de cacahuètes est une excellente source de protéines et de graisses saines, sans ajout de sucre ni d'huile de palme.`,
    date: randomDate(new Date(2020, 12, 1), new Date()).toDateString(),
  },
  {
    author: "Sérine",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    message: `Le beurre de cacahuètes de cette marque est incroyablement polyvalent ! Je l'utilise pour mes sandwiches, mes dips de légumes et même pour faire des desserts. Je le recommande vivement à tous ceux qui cherchent à ajouter une touche de saveur et de nutrition à leur alimentation quotidienne`,
    date: randomDate(new Date(2020, 12, 1), new Date()).toDateString(),
  },
  {
    author: "Nadir",
    stars: 3,
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    message: `Je suis un fan inconditionnel de cette marque de beurre de cacahuètes depuis des années. Leur beurre de cacahuètes naturel et biologique est absolument délicieux et j'apprécie particulièrement qu'il soit fabriqué sans additifs ni conservateurs.`,
    date: randomDate(new Date(2020, 12, 1), new Date()).toDateString(),
  },
  {
    author: "Rania",
    stars: 4.5,
    avatar: "https://media.istockphoto.com/id/1272756535/photo/young-woman-portrait.jpg?s=612x612&w=0&k=20&c=witp4a4Tvt6t7rqkDXZZlb7yxMY6rLOQQlRw5_0gjgo=",
    message: `Je suis ravi d'avoir découvert cette marque de beurre de cacahuètes ! Non seulement leur produit est incroyablement délicieux, mais leur engagement en faveur de l'environnement et de la durabilité est tout simplement remarquable. Je suis fier de soutenir cette entreprise et je la recommande vivement.`,
    date: randomDate(new Date(2020, 12, 1), new Date()).toDateString(),
  },
]

const createReview = ({ author, stars, avatar, message, date }) => {
  const html = `<div class="review">
    <div class="review-header">
      <div class="review-header-left">
        <div class="review-avatar">
          <img src="${avatar}" width="100%" height="100%"
            alt="review-avatar"></img>
        </div>
        <div class="review-details">
          <div class="review-stars">
            ${new Array(Math.floor(stars)).fill('<img class="review-star" src="./assets/icons/Solid/Status/Star.svg" alt="star"></img>').join("")}
            ${Math.floor(stars) === stars ? "" : ' <img class="review-star" src="./assets/icons/Solid/Status/Star-half.svg" alt="half-star"></img>'}
          </div>
          <div class="review-author">${author}</div>
        </div>
      </div>
      <div class="review-header-right">${date.toString()}</div>
    </div>
    <div class="review-content">${message}</div>
  </div>`;
  return html;
};

const createDot = () => {
  const dot = document.createElement("div");
  dot.classList.add("reviews-pages-dot");
  return dot;
};

const reviewsContainer = document.getElementById("reviews-list");
const dotsContainer = document.getElementById("reviews-pages-dots");

reviews.forEach((review) => {
  reviewsContainer.innerHTML += createReview(review);
  dotsContainer.appendChild(createDot());
});

const dots = Array.from(document.getElementsByClassName("reviews-pages-dot"));

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    reviewsContainer.scrollTo({ left: index * window.innerWidth, behavior: "smooth" })
    dots.forEach((dot) => dot.classList.remove("reviews-pages-dot-active"));
    dot.classList.add("reviews-pages-dot-active");
  });
});

dots[0].classList.add("reviews-pages-dot-active");

export default "idk";