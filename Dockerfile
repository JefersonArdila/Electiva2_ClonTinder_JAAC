FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Genera el cliente de Prisma
RUN npx prisma generate

EXPOSE 3001

# Ejecuta migraciones y arranca el backend
CMD npx prisma migrate deploy && node src/index.js