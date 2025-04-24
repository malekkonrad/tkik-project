# Kompilator Python to Lua (PyToL)
Narzędzie webowe wykonywane w ramach projektu z przedmiotu Teoria Kompilacji i Kompilatory 2025 na kierunku Informatyka i Systemy Inteligentne na Akademii Górniczo-Hutniczej w Krakowie.

## Autorzy
- Konrad Małek - kmalek@student.agh.edu.pl
- Kamil Pustelnik - kpustelnik@student.agh.edu.pl

## Założenia programu
Projekt docelowo ma stać się translatorem (kompilatorem) kodu z języka programowania Python na kod o tożsamym rezultacie wykonywania w języku programowania Lua. Narzędzie będzie działało w przeglądarce jako strona statyczna, zatem całość zostanie napisana w języku JavaScript (do stworzenia i wyeksportowania strony internetowej zastosowane zostanie narzędzie Next.js). Do parsingu użyty zostanie Antlr 4.

W celu wiernego odzwierciedlenia składni Pythona pierwotnie zaczęrpnięto gramatykę z repozytorium [GitHub](https://github.com/antlr/grammars-v4/tree/master/python/python3_13) i zmodyfikowano w celu ograniczenia obsługiwalnej składni (lista modyfikacji zostanie uzupełniona). Z tego samego repozytorium zaczerpnięto kod do prawidłowego przetwarzania tabulatorów.

# Opis tokenów i gramatyka
[Spis tokenów](webapp/antlr/full/PythonLexer.tokens)
[Skaner Antlr 4](webapp/antlr/full/PythonLexer.g4)
[Parser Antlr 4](webapp/antlr/full/PythonParser.g4)

# Instrukcja obsługi
!!!TODO!!!
