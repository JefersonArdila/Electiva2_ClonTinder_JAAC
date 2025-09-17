FROM node:18

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar el resto del proyecto
COPY . .

# Generar Prisma Client con binarios para Linux
RUN npx prisma generate

EXPOSE 3001

# Ejecutar migraciones y arrancar servidor
CMD npx prisma migrate deploy && node src/index.js
