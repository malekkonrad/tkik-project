Parsing

```
java -jar antlr4.jar -Dlanguage=TypeScript PythonLexer.g4 -visitor
# Remove .js from import PythonLexerBase
java -jar antlr4.jar -Dlanguage=TypeScript PythonParser.g4 -visitor
```