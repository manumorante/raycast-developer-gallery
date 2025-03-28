import { writeFileSync, readFileSync, copyFileSync } from 'fs';
import path from 'path';
import os from 'os';
import { print } from './utils/print.js';
import { getCurrentAliases, parseAliases, compareAndMergeAliases } from './utils/aliases.js';
import { rl, waitForAliasesJson, showSummary } from './utils/interaction.js';

print.title('Git Commands Updater');

const DEFAULT_ALIASES_PATH = path.join(os.homedir(), 'projects/raycast/raycast-extensions/git-commands/src/aliases.json');
const LOCAL_ALIASES_PATH = './aliases.json';
const SHELL_ALIASES_JSON = './shell-aliases.json';

async function updateAliases() {
  try {
    print.info('Pasos:');
    console.log('1. Obtener alias del shell');
    console.log('2. Guardar en shell-aliases.json');
    console.log('3. Crear copia local');
    console.log('4. Actualizar copia\n');

    const aliasesPath = await waitForAliasesJson(DEFAULT_ALIASES_PATH);
    if (!aliasesPath) return;

    // Obtener y guardar alias del shell
    print.step('Obteniendo alias del shell...');
    const currentAliasesText = await getCurrentAliases();
    const shellAliases = parseAliases(currentAliasesText);
    writeFileSync(SHELL_ALIASES_JSON, JSON.stringify(shellAliases, null, 2));
    print.done('Alias guardados en shell-aliases.json');

    // Crear y actualizar copia local
    print.step('Creando copia local...');
    copyFileSync(aliasesPath, LOCAL_ALIASES_PATH);
    const currentAliasesData = JSON.parse(readFileSync(LOCAL_ALIASES_PATH, 'utf8'));
    const currentAliases = currentAliasesData.aliases || [];
    print.done('Copia local creada');

    // Fusionar y verificar cambios
    print.step('Fusionando alias...');
    const { result: mergedAliases, changes } = compareAndMergeAliases(currentAliases, shellAliases);
    const newContent = JSON.stringify({ aliases: mergedAliases }, null, 2);
    const originalContent = readFileSync(LOCAL_ALIASES_PATH, 'utf8');

    if (originalContent === newContent) {
      print.info('No hay cambios que aplicar');
      rl.close();
      return;
    }

    // Guardar cambios
    writeFileSync(LOCAL_ALIASES_PATH, newContent);
    print.done('Cambios guardados en:');
    print.path(LOCAL_ALIASES_PATH);
    
    // Mostrar resumen
    showSummary(changes, currentAliases);
    rl.close();
  } catch (error) {
    print.error('Error: ' + error);
    rl.close();
    process.exit(1);
  }
}

process.on('SIGINT', () => {
  print.error('Proceso interrumpido');
  rl.close();
  process.exit(0);
});

updateAliases(); 