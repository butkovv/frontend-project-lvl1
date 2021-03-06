install: install-deps

start:
	npx babel-node src/bin/brain-even.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

publish:
	npm publish --dry-run
