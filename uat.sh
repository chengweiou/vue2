yarn build:uat
rm -rf ~/Desktop/docker/universe/ursaminor/dist
cp -r dist ~/Desktop/docker/universe/ursaminor/
cp nginx.conf ~/Desktop/docker/universe/ursaminor/default.conf
cd ~/Desktop/docker/universe/ursaminor
docker stop ursaminor
docker run --rm -it -d --name ursaminor -p 61000:80 --network net -v ~/Desktop/docker/universe/ursaminor/dist/:/usr/share/nginx/html/ -v ~/Desktop/docker/universe/ursaminor/default.conf:/etc/nginx/conf.d/default.conf nginx