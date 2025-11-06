#!/usr/bin/bash

git add .

echo "Please Enter a commit message"
read mess

git commit -m "$mess"

git push
