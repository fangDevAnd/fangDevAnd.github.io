#!/bin/bash

time=$(date "+%Y-%m-%d")
git add .
git commit -m "$time_提交内容"
git push origin main


#进行服务器发布
