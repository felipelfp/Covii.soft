# Script to run the unified project development server
# Finding node installation dynamically to avoid encoding issues with 'Usuário'
$fnmDir = Join-Path $env:USERPROFILE "AppData\Roaming\fnm\node-versions"
if (Test-Path $fnmDir) {
    $installationDir = Get-ChildItem -Path $fnmDir -Recurse -Filter "node.exe" | Select-Object -First 1 -ExpandProperty DirectoryName
}

if ($installationDir -and (Test-Path $installationDir)) {
    $npmPath = Join-Path $installationDir "npm.cmd"
    $env:PATH = "$installationDir;" + $env:PATH
    
    Write-Host "Found Node at: $installationDir" -ForegroundColor Green
    Write-Host "Installing dependencies..." -ForegroundColor Cyan
    & $npmPath install
    Write-Host "Starting Vite development server..." -ForegroundColor Cyan
    & $npmPath run dev
} else {
    Write-Error "Node.js installation not found in $fnmDir"
}
