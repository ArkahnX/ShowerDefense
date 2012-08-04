github instructions!
Initial setup:
fork the repository located at: https://github.com/GentleHat/ShowerDefense
using github for windows: http://windows.github.com/
clone your repository and then view the local copy of it. Click the tools menu in github and "Open shell here"
type git remote add upstream https://github.com/GentleHat/ShowerDefense
then hit enter.
type git fetch upstream
then hit enter.
type git merge upstream/master
then hit enter.

To merge remote (not your own) changes:
git fetch upstream
git merge upstream/remote

To merge your changes:
an uncommited changes message will be shown in the top right of the repository in github for windows.
add an informative commit message (and optional description)
click sync in the top menu (should be blue)
open the github repository by clicking the github link next to the commit (around the middle of github for windows)
send a pull request
may need to add a message, and your description may be carried over. Anticipate having to describe all the work you did. However your commit messages will be synced, so just summarize.