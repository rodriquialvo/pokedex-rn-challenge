# Pokedex RN Challenge

React Native + Expo app for browsing Pokemon, viewing detail information, and keeping a local favorites list. The project uses Expo SDK 56, React Navigation, TanStack Query with persisted cache, AsyncStorage, i18n, and a small tested utility layer.

The original challenge asks for a simple Pokedex app with an optimized list, progressive image loading, detail view, real-time filtering, favorites, offline persistence, loading/error states, optional testing, Axios, React Navigation, and reusable components with a compound pattern approach.

## Features

- Pokemon list powered by the PokeAPI.
- Infinite scroll with pull-to-refresh.
- Search by Pokemon name within the loaded list.
- Detail screen with artwork, types, abilities, and stats.
- Favorites tab with persistent local storage and real-time name filtering.
- Shared app header with theme and language controls on every screen.
- Light and dark themes persisted across sessions.
- English and Spanish language toggle, initialized from the device locale.
- Progressive images with Pokemon initials while artwork is loading or unavailable.
- Theme-aware skeleton, empty, and error states.
- Branded launch sequence: launcher icon, full-screen splash, then a fade into the app.
- Unit tests for UI components and Pokemon utilities.

## Tech Stack

- Expo `~56.0.9`
- React `19.2.3`
- React Native `0.85.3`
- TypeScript `~6.0.3`
- React Navigation
- TanStack React Query + persisted cache
- AsyncStorage
- i18next / react-i18next
- Axios
- Jest + Testing Library for React Native

Expo SDK reference: https://docs.expo.dev/versions/v56.0.0/

## Challenge Coverage

| Requirement                 | Implementation                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| Optimized Pokemon list      | `FlatList` with paginated data through `useInfiniteQuery` and `onEndReached`.                      |
| Infinite scroll             | Fetches the next PokeAPI page using the `next` URL offset.                                         |
| Progressive image loading   | `ProgressiveImage` shows the Pokemon initial until artwork is rendered or when loading fails.      |
| Pokemon detail              | Detail screen shows artwork, types, abilities, stats, height, weight, and base experience.         |
| Real-time name filter       | Shared filtering logic searches the loaded Pokemon and saved favorites lists as the user types.    |
| Favorites management        | Pokemon can be added or removed from both list/detail flows.                                       |
| Favorites list              | Dedicated tab supports search and distinct empty states for no favorites and no search matches.    |
| Offline favorites           | Favorites are persisted with AsyncStorage.                                                         |
| Persisted list/cache        | TanStack Query cache is persisted with AsyncStorage through `PersistQueryClientProvider`.          |
| Loading states              | Skeleton list/detail components and footer loaders.                                                |
| Error and empty states      | Reusable `ErrorState` and `EmptyState` components for failures, empty favorites, and empty search. |
| Testing                     | Jest tests for reusable UI components and Pokemon utility helpers.                                 |
| Axios API client            | PokeAPI requests are centralized in `src/api`.                                                     |
| Reusable component patterns | `PokemonCard` and `PokemonDetail` expose compound subcomponents.                                   |
| Bonus UX                    | A shared header exposes theme/language controls across all screens, plus a branded launch flow.    |

## Requirements

- Node.js compatible with Expo SDK 56. Expo documents SDK 56 with Node `22.13.x`.
- npm
- Xcode for iOS builds.
- Android Studio / Android SDK for Android builds.

## Getting Started

Install dependencies:

```sh
npm install
```

Start Expo:

```sh
npm start
```

Run Android:

```sh
npm run android
```

Run iOS:

```sh
npm run ios
```

Run web:

```sh
npm run web
```

## Scripts

```sh
npm start          # Start Expo
npm run android    # Build and run Android
npm run ios        # Build and run iOS
npm run web        # Start Expo web
npm run lint       # Run Expo lint
npm run format     # Format files with Prettier
npm run test       # Run Jest
npm run test:ci    # Run Jest serially
```

## Project Structure

```text
src/
  api/             PokeAPI client, mappers, and API calls
  app/             Root app providers
  components/      Reusable UI components
  context/         Theme, language, and favorites state
  hooks/           Pokemon list/detail query hooks
  i18n/            Localization setup and resources
  navigation/      Stack and tab navigation
  screens/         Home, Detail, and Favorites screens
  test-utils/      Test render helpers
  theme/           Theme tokens and helpers
  types/           Shared TypeScript types
  utils/           Pure helpers
```

## Data and State

Pokemon data comes from the PokeAPI. The app fetches paginated list data and detail data through Axios, then caches it with TanStack Query.

Query cache, favorites, selected theme, and selected language are persisted with AsyncStorage, so the app keeps useful state across restarts.

## Testing

Run the full suite:

```sh
npm run test:ci
```

Current coverage includes:

- Shared header, empty/error states, search input, and favorite button UI behavior.
- Case-insensitive Pokemon and favorites filtering, including empty searches and no-match results.

## Native Assets

Launcher and splash assets live in `assets/` and are configured in `app.json`.

## Notes

- Native builds are preferred for validating the launch experience because Expo Go does not fully reproduce Android splash screen behavior in modern Expo SDKs.
- Pre-commit hooks run lint and tests.
