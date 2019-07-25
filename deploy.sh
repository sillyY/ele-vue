#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交源码
git add -A 
git commit -m 'deploy'
git push origin master

# 生成静态文件
npm run build

# 发布到自定义域名
echo 'sillyy.cn' > docs/.vuepress/publicCNAME

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/sillyY/sillyY.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -