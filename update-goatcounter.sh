#!/usr/bin/env bash

GOATCOUNTER_URL="https://gc.zgo.at/count.js"

echo "Fetching the current goatcounter count.js file from: $GOATCOUNTER_URL"
wget -O - "$GOATCOUNTER_URL" > ./assets/js/count.js

echo "Fetching complete!"
