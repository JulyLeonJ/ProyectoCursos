FROM node:20.19.3 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.27.1
COPY --from=build /app/dist/ProyectoCurso /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]