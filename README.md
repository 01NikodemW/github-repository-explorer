# Todo app

## Uruchomienie programu

<!-- ### Backend -->

1.  Vercel
    Projekt został zdeployowany na platformie Vercel, link do strony: https://github-repository-explorer-phi.vercel.app/

    Wchodząc pod adres

2.  Uruchomienie lokalne

    Na wstępie należy zainstalować zależności

    ```sh
    npm i
    ```

    Następnie należy zbudować projekt

    ```sh
    npm run build
    ```

    oraz uruchomić aplikację

    ```sh
    npm start
    ```


# Proces tworzenia

Moją pracę rozpocząłem od przeanalizowania wymagań i doboru technologii jakich będę używał do tworzenia aplikacji. W kolejnej części przeszedłem do zakodowania połączenia z API. W tym celu wygenerowałem token, który będzie przesyłany w każdym zapytani i umieściłem go wraz z URLem w pliku .env. Do kontaktu z API wykorzystałem takie biblioteki @tanstack/react-query i axios żeby zapewnić dobrą organizację kodu, zarządzanie stanem poprzez przechowywanie wyników zapytań w pamięci cache przeglądarki (stąd brak wykorzystania MobX czy Redux) oraz wygodę z korzystania. Każdy routing opakowany został w customowy hook który zwraca dane wraz z informacją czy są pobierane z bazy albo umożliwiający wykonanie zadania separując cały kod odpowiedzialny za kontakt z api od kodu odpowiedzialnego za tworzenie UI aplikacji.

Następnie przeszedłem do tworzenia widoków, gdzie zaimplementowałem UI zgodnie przygotowanym designem. Uznałem go za wzór w kontekście ustawienia elemnetów i dostosowałem je pod widoki mobile i webowe. Zadbałem responsywność aplikacji na wszystkich typach urządzeń. Po zakodowaniu UI połączyłem utworzone wcześniej hooki to kontaktu z API. Zadbałem również o obsługę braku występowania danych oraz ich ładowania poprzez wyświetlanie odpowiednich komunikatów i elemntów ładnowania.

W ramach dodatkowych funkcji dodałem za pomocą narzędzia react-i18next obsługę języka angielskie i polskiego. W prawym górny znajduję się przycisk, po którego kliknęciu zmienia się język aplikacji. Dodałem również pokazowe zarządzanie stanem poprzez przechowywanie języka i jego ustawień wykorzystując useContext.

Po utworzeniu aplikacji wykorzytując narzędzie Cypress utworzyłem testy e2e wszystkich funkcjonalności aplikacji, testy uruchamiane są poleceniem

```sh
npm run e2e-tests
```
