@echo off
echo [INFO] Install archetype to local repository.

cd %~dp0
call mvn clean install

echo [INFO] 安装成功...
pause