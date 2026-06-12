@echo off
chcp 65001 >nul
title Configurar chave secreta - MasterPag (Floricultura Margarida)
echo.
echo  ============================================================
echo    CONFIGURAR CHAVE SECRETA - PIX MasterPag
echo  ============================================================
echo.
echo  Cole abaixo a sua CHAVE SECRETA (comeca com sk_live_)
echo  e aperte ENTER.
echo.
set /p SECRET=Chave secreta:

if "%SECRET%"=="" (
  echo.
  echo  Nenhuma chave digitada. Nada foi alterado.
  echo.
  pause
  exit /b
)

(
echo MASTERPAG_PUBLIC_KEY=COLE_SUA_CHAVE_PUBLICA_AQUI
echo MASTERPAG_SECRET_KEY=%SECRET%
echo MASTERPAG_API_URL=https://api.masterpag.com/functions/v1
echo ALLOWED_ORIGIN=*
echo POSTBACK_URL=
echo PORT=3000
) > "%~dp0.env"

echo.
echo  ============================================================
echo    PRONTO! Chave salva.
echo  ============================================================
echo.
echo  Agora finalize um pedido no site (com CPF valido) que o
echo  PIX real vai aparecer. Pode fechar esta janela.
echo.
pause
