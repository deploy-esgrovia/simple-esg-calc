# Simplified ESG Calculator

## Development

1. Start watching tailwind

```bash
npx tailwind -i .\src\assets\css\tailwind.css -o .\src\assets\css\style.css --watch
```

2. Run dev server

```bash
npm run dev
```

## Dockerized Version

1. Use this command to build the docker image:

```bash
docker build -t simple-esg-calc .
```

2. Use this command to run the image:

```bash
docker run -p 8080:80 simple-esg-calc
```

3. Now you can get access to the container using this address:
   [http://localhost:8080/](http://localhost:8080/)
