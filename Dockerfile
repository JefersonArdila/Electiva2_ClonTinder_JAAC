FROM node:18

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar el resto del proyecto (incluye generated/prisma)
COPY . .

# Aseguramos que la carpeta generated/prisma exista en el contenedor
RUN test -d generated/prisma || (echo "⚠️ La carpeta generated/prisma no existe en el repo" && exit 1)

EXPOSE 3001

# Migraciones + arrancar servidor
CMD npx prisma migrate deploy && node src/index.js
