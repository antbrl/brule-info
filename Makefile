OUT_DIR := ./public

all: gen_html gen_hugo gen_pdf

gen_html:
	./scripts/gen_html.sh

gen_hugo:
	hugo --cleanDestinationDir --minify -d $(OUT_DIR)

gen_pdf:
	./scripts/gen_pdf.sh

.PHONY: clean
clean:
	rm -rf $(OUT_DIR)
	rm -rf ./scripts/out
