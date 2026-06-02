# === Etapa 1: build ===
FROM node:20-alpine AS build
WORKDIR /app

# Instalar dependencias con caché eficiente
COPY package*.json ./
RUN npm ci

# Copiar el resto del proyecto y construir
COPY . .
RUN npm run build

# === Etapa 2: servir estáticos con Nginx ===
FROM nginx:alpine

# Config para que el enrutamiento de la SPA funcione (fallback a index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el build de producción
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
