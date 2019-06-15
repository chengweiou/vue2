yarn build:uat
rm -rf ~/Desktop/docker/ursaminor/dist
cp -r dist ~/Desktop/docker/ursaminor/
cp nginx.conf ~/Desktop/docker/ursaminor/default.conf
cd ~/Desktop/docker/ursaminor
docker stop ursaminor
docker run --rm -it -d --name ursaminor -p 61000:80 --network net -v ~/Desktop/docker/ursaminor/dist/:/usr/share/nginx/html/ -v ~/Desktop/docker/ursaminor/default.conf:/etc/nginx/conf.d/default.conf nginx