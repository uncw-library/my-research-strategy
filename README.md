# my-research-strategy

(Note:  unless you're using a M1 apple, you can leave out the `--platform linux/x86_64/v8` parts.  That's only used to force the apple chip into x86 mode.)

### Dev box 

`docker-compose up`

revise code in ./src or ./public

see the site at localhost:3000

### Production

**Note that we have to specify the Dockerfile.prod**

`docker build -f Dockerfile.prod -t libapps-admin.uncw.edu:8000/randall-dev/my-research-strategy --platform linux/x86_64/v8  .`

to see it:

`docker push libapps-admin.uncw.edu:8000/randall-dev/my-research-strategy` and upgrade the rancher instance


## tutorials I like:

  - https://www.youtube.com/watch?v=gm_L69NHuHM

## create-react-app works by:

    - stage 1 builds a dev box.  

        you can edit the source code & the app updates immediately.

        a very slow server serves the app at port 3000

        the code lives in /src and /public
  
    - stage 2 builds a prod box.  

        here, nothing can be revised.  this is the finished product.  the source code has been minimized into /build folder in the container.

        we put that /build folder into a very fast server to serve it at port 80

Whenever we're revising the app, we stay in stage 1.  Then when we finish our revisions, we switch to stage 2 and push the app to production.

