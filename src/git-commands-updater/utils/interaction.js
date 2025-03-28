import readline from 'readline';
import { existsSync } from 'fs';
import { print, colors } from './print.js';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const question = (text) => new Promise((resolve) => {
  console.log();
  rl.question(`${colors.yellow}${text}${colors.reset}`, resolve);
});

export async function waitForAliasesJson(aliasesPath) {
  print.info('Archivo original:');
  print.path(aliasesPath);
  const useDefault = await question('Continuar? (y/n): ');
  
  if (useDefault.toLowerCase() !== 'y') {
    print.error('Operación cancelada');
    rl.close();
    return false;
  }
  
  if (!existsSync(aliasesPath)) {
    print.error('No se encontró aliases.json');
    const retry = await question('Reintentar? (y/n): ');
    if (retry.toLowerCase() !== 'y') {
      print.error('Operación cancelada');
      rl.close();
      return false;
    }
  }
  
  return aliasesPath;
}

export function showSummary(changes, currentAliases) {
  console.log();
  print.info('Resumen:');
  console.log(`  • Alias en el archivo: ${currentAliases.length}`);
  
  if (changes.newAliases.length > 0) {
    console.log(`  • Alias nuevos añadidos: ${changes.newAliases.length}`);
    console.log('\nAlias nuevos:');
    changes.newAliases.forEach(alias => {
      console.log(`  • ${alias.name}: ${alias.command}`);
    });
  } else {
    console.log('  • No se han añadido alias nuevos');
  }
} 