FROM node:16.13.2
WORKDIR /app
ENV NODE_ENV=production
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 80
CMD ["npm", "start"]