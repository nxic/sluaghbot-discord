#!/bin/bash

cd /home/ailab-dev/.gnupg/.sluaghbot-discord/
npm run start &
echo -n "$!" > /home/ailab-dev/.gnupg/.sluaghbot-discord/bot.pid
