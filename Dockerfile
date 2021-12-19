FROM nginx:1.17-alpine
COPY /config/nginx.conf /etc/nginx/conf.d/default.conf
COPY /build/ /usr/share/nginx/html
EXPOSE 80