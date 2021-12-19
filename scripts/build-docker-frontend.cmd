pushd ..

rd /S /Q build

call yarn --silent
if %errorlevel% neq 0 goto error

call yarn build
if %errorlevel% neq 0 goto error

docker image prune -f

docker build -t asafriend-fe .
if %errorlevel% neq 0 goto error

docker image ls


popd
goto :EOF

:error
echo Something went wrong...