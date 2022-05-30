docker compose up postgres redis &
sleep 30s
cd ./strapi-medusa && yarn start