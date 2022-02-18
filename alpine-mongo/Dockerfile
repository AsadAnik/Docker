# Step 1
FROM alpine

# Step 2 (Install a Software)
RUN echo 'https://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'https://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0

# Step 3 (Configure that Software)
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

# Step 4 (Set default Commands)
CMD [ "mongod" ]
