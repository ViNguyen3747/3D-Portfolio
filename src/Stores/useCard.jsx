import { create } from "zustand";
const CardLists = {
  computer:
    "Just an ordinary UI developer 👩‍💻 discovering new hobbies in 3D Websites and 3D modeling.",
  dog: "Frameworks and Libraries that I have used ❤️: ReactJS, Three.js, React Three Fiber, GatsbyJS, Ember.js, Next.js, Express.js, Redux",
  headphone:
    "I don't play games, but I really love listening to game tracks 🎶 and watching video game cinematics.",

  coffee:
    "🍩 I'm using Blender to make 3d models, and I also combine 3d models with Blender's Grease Pencil tools to make 2.5D art, which I shared via my Insta account",
  name: "⭐ My name is Vi, pronounced as 'V'. It's actually a typo made by my Dad. My name is supposed to be 'Vy', which means 'pretty', and 'Vi' means 'tiny' in Vietnamese...",
  code: "a JavaScript enthusiast / in love with ReactJS / a 3d modeling and Three.js learner / always eager to learn and expand knowledge💡",
  book: "I enjoy reading fantasy 🗡️ and sci-fi 🤖 books. My go-to places are obviously libraries and bookstores",
  loaf: "I get my passion for baking from my mom. 🍞 I'm the only one in the family not lazy to learn baking from her haha",
  omelette:
    "Besides coding for my full-time job 🍳 I also code as a hobby, especially with Reactjs and Threejs",
  rolling:
    "🥐 My love for baking comes from getting creative: taking one idea and putting your own twist on it ✨",
  piping:
    "Proud to be a too-much-coffee-☕ drinker and I prefer my coffee black.",
};
export default create((set) => ({
  cardMessage: "",
  isCardOpened: false,
  fade: false,
  foundItems: [],
  setCard: (item) =>
    set((state) => ({
      cardMessage: CardLists[item],
      isCardOpened: true,
      foundItems: [...new Set([...state.foundItems, item])],
    })),
  setResume: () =>
    set((state) => ({
      foundItems: [...new Set([...state.foundItems, "resume"])],
    })),
  closeCard: () => set(() => ({ isCardOpened: false })),
}));
