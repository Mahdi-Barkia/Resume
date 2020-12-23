# Resume with NextJS

Resume website with NextJS

[**DEMO**](https://mahdi-barkia-resume.netlify.app)

## Commands to run the application 
**on development**
```bash
docker build -t resume-dev . 
```
```bash
docker run -p 3000:3000 -v ${PWD}/components:/usr/src/app/components --name cv-dev resume-dev
```
**on build**
```bash
docker build -t resume-build -f Dockerfile.build .
```
```bash
docker run -v ${PWD}/out:/nextjs-ui/out --name cv-build resume-build 
```
**on production**
```bash
docker build -t resume-server -f Dockerfile.prod .
```
```bash
docker run -p 80:80 --name cv-server resume-server 
```

## Author

* **MaHdi** -  [https://github.com/Mahdi-Barkia](https://github.com/Mahdi-Barkia)
