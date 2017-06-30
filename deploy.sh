#!/bin/bash

TEMP_DIR=".znck.github.io";
REPO="git@github.com:znck/znck.github.io";
RELEASE=$(date)

if [ -d ${TEMP_DIR} ]; then
  rm -rf ${TEMP_DIR};
fi;

# Download latest code.
git clone --depth 1 --branch master ${REPO} ${TEMP_DIR};

# Update all files.
rm -rf ${TEMP_DIR}/*;
cp -r dist/* ${TEMP_DIR};

# Commit and push.
cd ${TEMP_DIR};
git add -A;
git commit -m "Deployed at ${RELEASE}";
git push origin master;

cd ..
rm -rf ${TEMP_DIR};

echo 'Deployed to github pages.';
