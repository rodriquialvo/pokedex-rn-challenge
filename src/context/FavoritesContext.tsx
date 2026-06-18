import { FavoritePokemon } from "@/types/pokemon.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type FavoritesContextValue = {
  favorites: FavoritePokemon[];
  isLoadingFavorites: boolean;
  addFavorite: (pokemon: FavoritePokemon) => Promise<void>;
  removeFavorite: (pokemonId: number) => Promise<void>;
  isFavorite: (pokemonId: number) => boolean;
  toggleFavorite: (pokemon: FavoritePokemon) => Promise<void>;
};

const FAVORITES_STORAGE_KEY = "@pokedex/favorites";

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(
          FAVORITES_STORAGE_KEY,
        );

        if (!storedFavorites) {
          return;
        }

        const parsedFavorites = JSON.parse(
          storedFavorites,
        ) as FavoritePokemon[];

        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      } finally {
        setIsLoadingFavorites(false);
      }
    };

    loadFavorites();
  }, []);

  const persistFavorites = async (nextFavorites: FavoritePokemon[]) => {
    setFavorites(nextFavorites);
    await AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(nextFavorites),
    );
  };

  const addFavorite = async (pokemon: FavoritePokemon) => {
    const exists = favorites.some((item) => item.id === pokemon.id);

    if (exists) return;

    await persistFavorites([...favorites, pokemon]);
  };

  const removeFavorite = async (pokemonId: number) => {
    const nextFavorites = favorites.filter((item) => item.id !== pokemonId);

    await persistFavorites(nextFavorites);
  };

  const isFavorite = (pokemonId: number) => {
    return favorites.some((item) => item.id === pokemonId);
  };

  const toggleFavorite = async (pokemon: FavoritePokemon) => {
    if (isFavorite(pokemon.id)) {
      await removeFavorite(pokemon.id);
      return;
    }

    await addFavorite(pokemon);
  };

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      isLoadingFavorites,
      addFavorite,
      removeFavorite,
      isFavorite,
      toggleFavorite,
    }),
    [favorites, isLoadingFavorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = (): FavoritesContextValue => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavoritesContext must be used inside FavoritesProvider",
    );
  }

  return context;
};
