FROM node:18

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar el resto del proyecto
COPY . .

# Generar Prisma Client para Linux
RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3000

# Comando de arranque: primero migraciones, luego server
CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.js"]