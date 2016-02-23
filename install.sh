#!/bin/bash
#
# To execute this file on a newly created VM run:
#
# $ sudo apt-get install git
# $ git clone git@github.com:highdn/highdn-com.git
# $ ./highdn-com/install.sh
#

set -o errexit
set -o xtrace

sudo apt-get install npm nodejs nodejs-legacy unzip

sudo npm install -g bower

# Get latest download URL of Google App Engine SDK for Go at
# https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Go

wget https://storage.googleapis.com/appengine-sdks/featured/go_appengine_sdk_linux_amd64-1.9.33.zip
unzip go_appengine_sdk_linux_amd64-1.9.33.zip

echo "Add $PWD/go_appengine to your search paths."
PATH="$PWD/go_appengine:$PATH"

# Provide Google account credentials to access Google App Engine.
appcfg.py list_versions $(dirname $0) --noauth_local_webserver

echo SUCCESS.
