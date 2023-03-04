import { create } from "zustand";
const CardLists = {
  dog: "I named my dog 🐶 Soda because I used to like drinking soda 🥤 a lot. :)",
  coffee:
    "I love love love coffee ☕. I prefer my coffee black as I can taste the sweetness of the black coffee.",
  name: "⭐ My name is Vi, pronounced as 'V'. It's actually a typo made by my Dad. My name is supposed to be 'Vy', which means 'pretty', and 'Vi' means 'tiny' in Vietnamese...",
  books:
    "I enjoy reading fantasy 🗡️ books. My favorite series is the Kane Chronicles by Rick Riordan",
  loaf: "I get my passion for baking from my mom. 🍞 And I'm the only one in the family not lazy to learn baking from her haha",
  omlette:
    "🍜 I learn how to cook from my dad, as he's the main chef of my family.",
  rolling:
    "🥐 I love baking. One of the best things about baking is to get creative: taking one idea and putting your own twist on it.",
  computer:
    "Just an ordinary UI developer 👩‍💻 discovering new hobbies in 3D Websites and 3D modeling.",
  headphones:
    "I don't play games, but I really love listening to game tracks 🎶 and watching video game cinematics.",
  piping:
    "🍩 For me, baking is time-consuming and a labor of love, especially when my friends enjoy my baked good. It just feels joyous and ideal for sharing.",
};

export default create((set) => ({
  cardMessage: "",
  isCardOpened: false,
  fade: false,
  setCard: (item) =>
    set(() => ({ cardMessage: CardLists[item], isCardOpened: true })),
  closeCard: () => set(() => ({ isCardOpened: false })),
}));
