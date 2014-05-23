GIT_MODIFIED_UPDATED = $(shell git status --porcelain | grep -E '.?[AM].+[.]js(on)?$$' | sed -e "s/^...//g")

tidy:
	@./node_modules/js-beautify/js/bin/js-beautify.js -p -k -w120 -r -f $(GIT_MODIFIED_UPDATED)

lint:
	@./node_modules/jshint/bin/jshint --verbose $(GIT_MODIFIED_UPDATED)

dist:
	./node_modules/browserify/bin/cmd.js -t uglifyify --standalone entropy index.js > dist/string-entropy.js
	./node_modules/browserify/bin/cmd.js plugin/entropy.bootstrap.js > dist/entropy.bootstrap.min.js
	./node_modules/browserify/bin/cmd.js -t uglifyify plugin/entropy.bootstrap.js > dist/entropy.bootstrap.min.js

.PHONY: dist
