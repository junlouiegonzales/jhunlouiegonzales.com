## Prerequisites

https://jekyllrb.com/docs/installation/
https://www.libvips.org/install.html

## Start

bundle exec jekyll serve --config \_config.yml,\_local_env.yml --livereload --trace

## Build

JEKYLL_ENV=production bundle exec jekyll build -d public --config \_config.yml,\_prod_env.yml --trace && cp ./robot.txt ./public/robot.txt
