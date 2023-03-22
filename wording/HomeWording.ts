const enWording = {
  head: {
    title: 'Game of Life',
  },

  body: {
    title: 'Game of Life',

    descriptionOfWikipedia: '« The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. »',

    wikipediaURL: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life',

    madeBy: 'Made by Jean-Baptiste Assouad',

    overlayMessage: 'Move your mouse or touch here',

    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
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

    overlayMessage: 'Bougez votre souris ou touchez ici',

    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
  },
}

const deWording: WordingT = {
  head: {
    title: 'Spiel des Lebens',
  },

  body: {
    title: 'Spiel des Lebens',

    descriptionOfWikipedia: '« Das Spiel des Lebens (englisch Conway’s Game of Life) ist ein vom Mathematiker John Horton Conway 1970 entworfenes Spiel, basierend auf einem zweidimensionalen zellulären Automaten. »',

    wikipediaURL: 'https://de.wikipedia.org/wiki/Conways_Spiel_des_Lebens',

    madeBy: 'Hergestellt von Jean-Baptiste Assouad',

    overlayMessage: 'Bewege deine Maus oder berühre hier',

    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
  },
}

const esWording: WordingT = {
  head: {
    title: 'Juego de la vida',
  },

  body: {
    title: 'Juego de la vida',

    descriptionOfWikipedia: '« El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. »',

    wikipediaURL: 'https://es.wikipedia.org/wiki/Juego_de_la_vida',

    madeBy: 'Hecho por Jean-Baptiste Assouad',

    overlayMessage: 'Mueve tu ratón o toca aquí',

    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
  },
}

const itWording: WordingT = {
  head: {
    title: 'Gioco della vita',
  },

  body: {
    title: 'Gioco della vita',

    descriptionOfWikipedia: '« Il Gioco della vita (Game of Life in inglese, noto anche solo come Life) è un automa cellulare sviluppato dal matematico inglese John Conway sul finire degli anni sessanta. »',

    wikipediaURL: 'https://it.wikipedia.org/wiki/Gioco_della_vita',

    madeBy: 'Realizzato da Jean-Baptiste Assouad',

    overlayMessage: 'Muovi il mouse o tocca qui',

    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
  },
}

export const allWording = {
  en: enWording,
  fr: frWording,
  de: deWording,
  es: esWording,
  it: itWording,
}
