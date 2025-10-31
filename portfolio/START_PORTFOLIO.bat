@echo off
setlocal ENABLEDELAYEDEXPANSION
title Jun Howell Mifa Abucay - Portfolio Website
echo.
echo ========================================
echo   Jun Howell Mifa Abucay - Portfolio Website
echo ========================================
echo.
cd /d "%~dp0"

rem Check npm is available
where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js and npm are not installed or not in PATH.
  echo Please install from https://nodejs.org/ then run this script again.
  pause
  exit /b 1
)

rem Install dependencies if node_modules is missing
if not exist "node_modules" (
  echo node_modules not found. Installing dependencies...
  if exist "package-lock.json" (
    call npm ci --no-fund --no-audit
  ) else (
    call npm install --no-fund --no-audit
  )
  if errorlevel 1 (
    echo [ERROR] Failed to install dependencies.
    pause
    exit /b 1
  )
)

echo.
echo Starting the development server on http://localhost:3000 ...
echo Press CTRL+C to stop the server.
echo.
call npm run dev

endlocal

