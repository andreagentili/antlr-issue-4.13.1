#!/bin/bash

set -e

echo "Generating ANTLR grammar..."
java -jar ./bin/antlr-4.13.1-complete.jar -o src/ -long-messages -visitor -Dlanguage=TypeScript ./grammar/Language.g4