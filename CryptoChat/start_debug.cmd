@set PATH=c:\node;%PATH%

@rem app port
@set PORT=13579

@rem find node.exe
@set NODEEXE=node.exe
@if exist c:\node\node.exe set NODEEXE=c:\node\node.exe

@rem start app in debug mode
start /min cmd /c %NODEEXE% --debug server.js

@rem start node-inspector
start /min cmd /c %NODEEXE% node_modules\node-inspector\bin\inspector.js

@echo node-inspector is started
@echo Application URL: http://localhost:13579/
@echo Debugger    URL: http://localhost:8080/debug?port=5858

@echo.

@set GOOGLE_CHROME="%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"

@if not exist %GOOGLE_CHROME% goto end

@choice /C:NY /M "Do you want to launch Google Chrome"
@if errorlevel 2 %GOOGLE_CHROME% http://localhost:13579/ http://localhost:8080/debug?port=5858


:end
