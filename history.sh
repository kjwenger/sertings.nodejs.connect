#!/usr/bin/env bash

npm install swagger-codegen-cli --global
swagger-codegen-cli generate -i ../swagger.yaml -l nodejs-server -o .
