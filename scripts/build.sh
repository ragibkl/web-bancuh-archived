#!/usr/bin/env bash

IMAGE_REGISTRY=ragibkl/web-bancuh

GIT_TAG=$(git describe --tags --exact-match 2> /dev/null);
GIT_BRANCH=$(git symbolic-ref -q --short HEAD);
GIT_COMMIT=$(git rev-parse --short HEAD);
DATE=$(date -u +%F.%H%M%S);

TAG=""
# Get image tag
if [[ $GIT_TAG != "" ]]
then
    TAG=$GIT_TAG;
elif [[ $GIT_BRANCH != "" ]]
then
    TAG=$GIT_BRANCH-$DATE;
else
    TAG=$DATE;
fi

FULL_TAG=$IMAGE_REGISTRY:$TAG
LATEST_TAG=$IMAGE_REGISTRY:latest
echo $FULL_TAG

docker build -t $FULL_TAG .
docker tag $FULL_TAG $LATEST_TAG

docker push $FULL_TAG
docker push $LATEST_TAG
