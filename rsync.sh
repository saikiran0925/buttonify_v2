#!/bin/bash
rsync -av --exclude='.git' . ui-webhook:/home/linux/deploy/jetty/botify
