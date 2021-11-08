# my-research-strategy

(Note:  unless you're using a M1 apple, you can leave out the `--platform linux/x86_64/v8` parts.  That's only used to force the apple chip into x86 mode.)

### Dev box 

`docker-compose up`

revise code in ./src or ./public

see the site at localhost:3000

To lint, `npm install` then `npx eslint ./src`


### Production

**Note that we have to specify the Dockerfile.prod**

`docker build -f Dockerfile.prod -t libapps-admin.uncw.edu:8000/randall-dev/my-research-strategy --platform linux/x86_64/v8 --no-cache .`

There's a lot in the above command:

  - use the file: Dockerfile.prod (versus the dev-focused Dockerfile)
  - tag the image: libapps.....
  - for the platform: linux/x86_64/v8 (so apple M1 makes an x86 linux image)
  - with: no-cache (rebuild the image from scratch)

to see it:

`docker push libapps-admin.uncw.edu:8000/randall-dev/my-research-strategy` and upgrade the rancher instance
