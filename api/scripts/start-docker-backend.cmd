@setlocal

set ENTRYPOINT=http
set ROUTER=asafriend-back-rtr
set SERVICE=asafriend-back-srv

REM Last time you used: "traefik.http.routers.%ROUTER%.rule=Host(`asafriend.aliseilab.space/api`)"

docker run -m 256m -d --name asafriend-be --net asafriend_net --label "traefik.enable=true" --label "traefik.http.routers.%ROUTER%.entrypoints=%ENTRYPOINT%" --label "traefik.http.routers.%ROUTER%.rule=PathPrefix(`/api/readers`)" --label "traefik.http.services.%SERVICE%.loadbalancer.healthcheck.path=/health" --label "traefik.http.routers.%ROUTER%.service=%SERVICE%" asafriend-be