export const resources = {
  es: {
    translation: {
      common: {
        loading: "Cargando...",
        error: "Ocurrió un error",
        retry: "Reintentar",
        empty: "No hay resultados",
      },
      tabs: {
        home: "Home",
        favorites: "Favoritos",
      },
      home: {
        title: "Pokédex",
        searchPlaceholder: "Buscar Pokémon...",
        emptySearch: "No encontramos Pokémon con ese nombre.",
        listError: "No pudimos cargar la lista de Pokémon.",
      },
      detail: {
        title: "Detalle",
        stats: "Estadísticas",
        types: "Tipos",
        abilities: "Habilidades",
        height: "Altura",
        weight: "Peso",
        baseExperience: "Experiencia base",
        addFavorite: "Agregar a favoritos",
        removeFavorite: "Quitar de favoritos",
      },
      favorites: {
        title: "Favoritos",
        empty: "Todavía no agregaste Pokémon favoritos.",
        searchPlaceholder: "Buscar favoritos...",
        emptySearch: "No encontramos favoritos con ese nombre.",
      },
      theme: {
        light: "Modo claro",
        dark: "Modo oscuro",
      },
      language: {
        spanish: "Español",
        english: "Inglés",
      },
    },
  },
  en: {
    translation: {
      common: {
        loading: "Loading...",
        error: "Something went wrong",
        retry: "Retry",
        empty: "No results found",
      },
      tabs: {
        home: "Home",
        favorites: "Favorites",
      },
      home: {
        title: "Pokédex",
        searchPlaceholder: "Search Pokémon...",
        emptySearch: "No Pokémon found with that name.",
        listError: "We could not load the Pokémon list.",
      },
      detail: {
        title: "Detail",
        stats: "Stats",
        types: "Types",
        abilities: "Abilities",
        height: "Height",
        weight: "Weight",
        baseExperience: "Base experience",
        addFavorite: "Add to favorites",
        removeFavorite: "Remove from favorites",
      },
      favorites: {
        title: "Favorites",
        empty: "You have not added favorite Pokémon yet.",
        searchPlaceholder: "Search favorites...",
        emptySearch: "We couldn't find favorites with that name.",
      },
      theme: {
        light: "Light mode",
        dark: "Dark mode",
      },
      language: {
        spanish: "Spanish",
        english: "English",
      },
    },
  },
} as const;
