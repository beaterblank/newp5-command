@echo off
d:
set dir="D:\projects\CODE"
set /p name="Project name : "
echo creating %name% at %dir%
cd %dir%
md %name%

cd %name%
echo %CD%
copy "D:\projects\commands\index.html" %CD%
copy "D:\projects\commands\sketch.js" %CD%
pause
start http://localhost:8000/
start cmd.exe /c code .
start python -m http.server


