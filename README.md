# Young's First React Practicing Project（Including some demos）

## JSX

  1. JSX是一种JavaScript的语法扩展
  2. 是React.createElement()的语法糖
  3. 被编译成ReactElement对象

## git

  1. while origin master is updated (somebody pushed sth new)
  2. local master is not the latest
  3. origin master is not allowed to push directly

## The way to solve with the problem above👆

  1. git checkout -b feat1
  2. git add . + git commit -m""
  3. git pull origin master --rebase
  4. git push --set-upstream origin feat1
  5. merge request

## git commit --amend

  1. git add . + git commit --amend
  2. if you want to edit commit message, press i and edit description.

## git tag

  1. How to show tags?  git show
  2. How to create tags? git tag -a v1.0 -m "my First git tag"
