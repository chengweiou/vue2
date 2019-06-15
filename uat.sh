yarn build:uat
rm -rf ~/Desktop/docker/universe/xxx-web/dist
cp -r dist ~/Desktop/docker/universe/xxx-web/
cp nginx.conf ~/Desktop/docker/universe/xxx-web/default.conf
cd ~/Desktop/docker/universe/xxx-web
docker stop xxx-web
docker run --rm -it -d --name xxx-web -p 61001:80 --network net -v ~/Desktop/docker/universe/xxx-web/dist/:/usr/share/nginx/html/ -v ~/Desktop/docker/universe/xxx-web/default.conf:/etc/nginx/conf.d/default.conf nginx