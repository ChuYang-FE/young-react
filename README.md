# Young's First React Practicing Project（Including some demos）

## JSX

  1. JSX是一种JavaScript的语法扩展
  2. 是React.createElement()的语法糖
  3. 被编译成ReactElement对象

## Git

  1. while origin master is updated (somebody pushed sth new)
  2. local master is not the latest
  3. origin master is not allowed to push directly

## The way to solve with the problem above👆

  1. git checkout -b feat1
  2. git add . + git commit -m""
  3. git pull origin master --rebase
  4. git push --set-upstream origin feat1
  5. merge request

## Git commit --amend

  1. git add . + git commit --amend
  2. if you want to edit commit message, press i and edit description.

## git tag

  1. How to show tags?  git show
  2. How to create tags? git tag -a v1.0 -m "my First git tag"

## When sth new on the origin master, my way to git push(work-flow)

  1. git checkout -b feat2
  2. Finish my work, git add . + git commit
  3. git rebase master(better than git pull origin master)
  4. git push origin feat1
  5. if exits conflicts: deal with it, "git add ." and then "git rebase --continue"
