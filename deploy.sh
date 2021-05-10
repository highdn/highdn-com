#!/bin/bash

set -o errexit
set -o xtrace

bower cache clean
bower update
npm install
polymer build --name prod
yes | gcloud app deploy
