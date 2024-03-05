import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "People's Choice Award",
    subtitle:
      "As voted by our valued customers, this award recognizes the consistent quality and positive experiences enjoyed by our diners.",
  },
  {
    imgUrl: images.award02,
    title: "Top Service Award",
    subtitle:
      "This award acknowledges our dedicated staff who go above and beyond to provide exceptional hospitality to every guest.",
  },
  {
    imgUrl: images.award03,
    title: "Innovative Dish Award",
    subtitle:
      "This award celebrates our culinary team's creativity and dedication to bringing exciting and delicious new dishes to the table.",
  },
  {
    imgUrl: images.award05,
    title: "Sustainable Practices Award",
    subtitle:
      "This award acknowledges our commitment to sourcing fresh, local ingredients and minimizing our environmental impact.",
  },
];

export default { wines, cocktails, awards };
