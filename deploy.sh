#!/bin/bash

set -o errexit
set -o xtrace

bower update
goapp deploy
