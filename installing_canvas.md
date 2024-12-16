chmod 777 . -R

./scripts/docker-dev-setup.sh

git reset --hard

echo "COMPOSE_FILE=docker-compose.yml:docker-compose.override.yml:docker-compose/mailcatcher.override.yml" >.env

docker compose up

into /etc/hosts

172.16.1.9 pgweb.canvas.local
172.16.1.8 mail.canvas.local
172.16.1.5 web.canvas.local

pgweb.canvas:8081
mail.canvas:8080
web.canvas