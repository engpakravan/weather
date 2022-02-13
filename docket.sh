clean_up() {
  docker-compose down
}

main() {
  trap "clean_up" SIGINT
  docker-compose up --build
}

main