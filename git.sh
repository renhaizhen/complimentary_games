msg=$1
if [ -n "$msg" ]; then
    gss
    git add .
    git commit -m "${msg}"
    git pull
    git push
    echo "๐โโ๏ธfinish push"
else
    echo "๐โโ๏ธ please add commit"
fi