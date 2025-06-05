# Kompilator Python to Lua (PyToL)
Narzędzie webowe wykonywane w ramach projektu z przedmiotu Teoria Kompilacji i Kompilatory 2025 na kierunku Informatyka i Systemy Inteligentne na Akademii Górniczo-Hutniczej w Krakowie.

## Autorzy
- Konrad Małek - kmalek@student.agh.edu.pl
- Kamil Pustelnik - kpustelnik@student.agh.edu.pl

## Założenia programu

### Ogólne cele programu
Projekt docelowo ma stać się translatorem (kompilatorem) kodu z języka programowania Python na kod o tożsamym rezultacie wykonywania w języku programowania Lua. Narzędzie będzie działało w przeglądarce jako strona statyczna.

W celu wiernego odzwierciedlenia składni Pythona pierwotnie zaczęrpnięto gramatykę z repozytorium [GitHub](https://github.com/antlr/grammars-v4/tree/master/python/python3_13) i zmodyfikowano w celu ograniczenia obsługiwalnej składni. Z tego samego repozytorium zaczerpnięto kod do prawidłowego przetwarzania tabulatorów.

### Rodzaj translatora
**Kompilator** (konwerter) - z języka Python na Lua.

### Języki implementacji
Kompilator wraz statycznym interfejsem webowym został napisany w języku **TypeScript**, do stworzenia i wyeksportowania strony internetowej zastosowano **Next.js**. 
Do parsingu (stworzania gramatyki i lexera) użyto narzędzia **Antlr4**.



## Opis tokenów oraz gramatyka
[Spis tokenów](webapp/antlr/full/PythonLexer.tokens)

[Skaner Antlr 4](webapp/antlr/full/PythonLexer.g4)

[Parser Antlr 4](webapp/antlr/full/PythonParser.g4)


## Instrukcja obsługi

### Dostęp online:
Wersja demonstracyjna dostępna pod adresem: [link](https://malekkonrad.github.io/tkik-project/)
*Aplikacja jest automatycznie aktualizowana z każdym commitem do repozytorium.*

### Sposób użycia:
-  **Otwórz aplikację** w przeglądarce internetowej.
-  **Wprowadź kod Python** w lewym panelu edytora.
-  Kod zostanie na bieżąco tłumaczony i wyświetlony po prawej stronie, w sytuacji, gdy wprowadzony kod jest niepoprawny - nie wpisuje się w standardową składnię Pythona - zostanie wyświetlony komunikat o błędzie - zawierający dokładną informację o lokalizacji błędu (linijka oraz zaznaczenie w wskazanej linijce konkretnego miejsca).
- **Klikając w przycisk RUN** zostnie uruchomiony skompilowany kod w Lua oraz jego wynik  .



## Obsługiwane konstrukcje językowe

### Aktualnie zaimplementowane:
- Definicje funkcji z parametrami
- Instrukcje warunkowe (if/elif/else)
- Pętle (while)
- Operacje arytmetyczne i logiczne
- Zmienne i przypisania
- Wywołania funkcji
- Podstawowe typy danych (int, float, string, bool)
- Obsługa wyjątków (try/except)
