import Link from "next/link";

export type FAQITEM = {
  id: number;
  question: string;
  answer: string | React.ReactNode;
};

export const data: FAQITEM[] = [
  {
    id: 1,
    question: "Kako poručiti tortu?",
    answer: (
      <>
        Tortu je moguće poručiti na više načina. Jedan od načina je{" "}
        <span className="font-light text-primary">online</span> putem{" "}
        <Link
          href="#"
          className="hover:cursor font-medium text-primary underline"
        >
          sledećeg linka.
        </Link>{" "}
        Na prvu porudžbinu online se dobija poput od 500 dinara. Torte se takođe
        mogu poručiti i putem Instagram-a, Facebook-a, Viber-a, email-a ili
        direktnim pozivom na telefon svakog dana između 16:00 i 21:00 časa.
      </>
    ),
  },
  {
    id: 2,
    question: "Kako si?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis nibh eu congue imperdiet. Sed nec ante eget ipsum iaculis luctus. Suspendisse vitae malesuada lectus. Phasellus a arcu nec libero tincidunt posuere sit amet non lacus. Praesent eu nisi lacus. Nunc lacus lacus, posuere sed eros non, semper vehicula massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut aliquam, nunc et congue lacinia, erat est vulputate ex, a posuere tortor nunc id ex. Quisque neque quam, mollis non convallis quis, commodo a urna. Donec malesuada vulputate ipsum, vel efficitur turpis iaculis sit amet. Nam at mi imperdiet, volutpat eros at, sodales elit. Sed tincidunt pellentesque elit, in tincidunt eros cursus id.",
  },
  {
    id: 3,
    question: "Vreme dostave i lokacija?",
    answer:
      "Curabitur sit amet odio vitae turpis bibendum ullamcorper. Cras at bibendum ipsum, eget molestie elit. Donec semper et leo quis scelerisque. Fusce facilisis erat non ornare commodo. Vestibulum blandit eros ac tellus tempor, eu ultricies urna luctus. Sed vel convallis ex, vel fringilla elit. Ut eros tortor, interdum nec viverra ac, dictum vitae est. Vestibulum nec tempus quam, et faucibus sapien. Donec risus risus, venenatis at mi et, convallis ultrices metus. Suspendisse at felis ut nisl viverra congue eget sit amet leo. Ut tincidunt libero ac justo sagittis sollicitudin. Donec luctus imperdiet consectetur.",
  },
  {
    id: 4,
    question: "Sastojci torti?",
    answer:
      "Maecenas venenatis molestie turpis ac porta. Nunc placerat, est at cursus interdum, ipsum mi malesuada est, et bibendum orci nibh id eros. Nam dui tellus, fermentum eget augue vitae, pulvinar pellentesque augue. Duis vitae quam vestibulum, molestie massa sed, hendrerit nibh. Nunc augue purus, aliquet id consectetur id, condimentum in tellus. Vivamus pharetra finibus aliquet. Cras mollis quam ex. Nulla aliquet fringilla pulvinar. Nullam feugiat, enim quis posuere tempus, nulla elit venenatis justo, non ullamcorper enim lacus a magna. Proin suscipit orci a nisl volutpat, eu tempor sem ornare. Aliquam erat volutpat. Aliquam nec ultrices eros. Aenean tempor lacus non nunc condimentum, quis interdum eros congue.",
  },
];
