# Git Commands

Directorio que contiene alias y utilidades de Git para Raycast Developer Gallery.

## Archivos

- `aliases.json`: Lista completa de alias de Git
- `shell-aliases.json`: Alias específicos del shell
- `update.js`: Script para actualizar los alias
- `utils/`: Funciones de utilidad

## Proceso de Actualización

El script `update.js` sigue estos pasos:

1. Obtiene los alias actuales del shell y los guarda
2. Crea una copia local del archivo principal
3. Compara y fusiona los alias
4. Muestra un resumen de los cambios

## Uso

Este módulo:
- Estandariza operaciones de Git
- Proporciona atajos de comandos
- Mantiene un repositorio centralizado de alias

## Structure

The module is organized into two main JSON files:
1. `aliases.json`: Contains the core Git command aliases
2. `shell-aliases.json`: Contains shell-specific variations of the Git commands

The `update.js` script is responsible for maintaining and updating these alias files. 