FROM node:16-alpine AS development

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY tsconfig.json package.json package-lock.json next.config.js next-env.d.ts ./

COPY src/ ./src

COPY public/ ./public

RUN npm ci

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "build:docker"]