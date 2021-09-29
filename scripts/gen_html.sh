#!/usr/bin/sh

set -e

cd $(dirname $(realpath $0))

mkdir -p out/cv
node generators/gen_html.mjs content/cv/index.pug out/cv/index.html
cat content/cv/meta.txt out/cv/index.html > ../content/cv/index.html
