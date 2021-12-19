pushd ..

call npm install --silent
if %errorlevel% neq 0 goto error

docker image prune -f

docker build -t asafriend-be .
if %errorlevel% neq 0 goto error

docker image ls


popd
goto :EOF

:error
echo Something went wrong...