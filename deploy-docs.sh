#!/usr/bin/env bash

cd docs
yarn gen:docs
cd _book
git init
git add -A
git commit -m 'update docs'
git push -f git@github.com:windraxb/cloud-utils.git master:gh-pages
