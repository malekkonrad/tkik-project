Parsing

```
java -jar antlr4.jar -Dlanguage=TypeScript PythonLexer.g4
# Remove .js from import PythonLexerBase
java -jar antlr4.jar -Dlanguage=TypeScript PythonParser.g4
```