#!/usr/bin/sh

set -e

cd $(dirname $(realpath $0))

node generators/gen_pdf.mjs ../public cv ../static/cv.pdf
