export const reviews = [
  {
    id: 1,
    user: {
      id: 4,
      isPro: false,
      name: `Ivan`,
      avatar: `../img/avatar-max.jpg`,
    },
    rating: 3,
    comment: `Beautiful place in beautifool location with good neighbors!`,
    date: Date.now(),
  },
  {
    id: 2,
    user: {
      id: 6,
      isPro: false,
      name: `Irina`,
      avatar: `../img/avatar-max.jpg`,
    },
    rating: 5,
    comment: `It was awesome!`,
    date: Date.now(),
  },
  {
    id: 3,
    user: {
      id: 7,
      isPro: true,
      name: `Max`,
      avatar: `../img/avatar-max.jpg`,
    },
    rating: 2,
    comment: `I would never recomend that!`,
    date: Date.now(),
  },

];
