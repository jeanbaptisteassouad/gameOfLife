const enWording = {
  head: {
    title: 'Game of Life',
  },

  body: {
    title: 'Game of Life',

    descriptionOfWikipedia: '« The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. »',

    wikipediaURL: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life',

    madeBy: 'Made by Jean-Baptiste Assouad',

    en: 'English',
    fr: 'Français',
  },
}

export type WordingT = typeof enWording

const frWording: WordingT = {
  head: {
    title: 'Jeu de la Vie',
  },

  body: {
    title: 'Jeu de la Vie',

    descriptionOfWikipedia: '« Le jeu de la vie est un automate cellulaire conçu par le mathématicien britannique John Horton Conway en 1970. »',

    wikipediaURL: 'https://fr.wikipedia.org/wiki/Jeu_de_la_vie',

    madeBy: 'Réalisé par Jean-Baptiste Assouad',

    en: 'English',
    fr: 'Français',
  },
}

export const allWording = {
  en: enWording,
  fr: frWording,
}
