@setlocal

set ENTRYPOINT=http
set ROUTER=asafriend-front-rtr
set SERVICE=asafriend-front-srv

docker run -m 256m -d --name asafriend-fe --net asafriend_net --label "traefik.enable=true" --label "traefik.http.routers.%ROUTER%.entrypoints=%ENTRYPOINT%" --label "traefik.http.routers.%ROUTER%.rule=Host(`asafriend.aliseilab.space`)" --label "traefik.http.services.%SERVICE%.loadbalancer.healthcheck.path=/index.html" --label "traefik.http.routers.%ROUTER%.service=%SERVICE%" asafriend-fe