import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function getCurrentAliases() {
  const command = 'source ~/.zshrc && alias | grep "^g"';
  const { stdout } = await execAsync(command, { shell: '/bin/zsh' });
  return stdout;
}

export function parseAliases(txt) {
  const lines = txt.split('\n').filter((line) => line.includes('='));
  return lines.map((line) => {
    let [, name, command] = line.match(/^(.*?)=(.*)$/);
    command = command.replace(/^'(.*)'$/, '$1');
    return { name, command };
  });
}

export function compareAndMergeAliases(currentAliases, shellAliases) {
  const result = [...currentAliases];
  const changes = {
    newAliases: []
  };
  
  shellAliases.forEach(shellAlias => {
    const existingIndex = result.findIndex(current => current.name === shellAlias.name);
    
    if (existingIndex === -1) {
      result.push(shellAlias);
      changes.newAliases.push(shellAlias);
    } else {
      result[existingIndex] = {
        ...result[existingIndex],
        command: shellAlias.command
      };
    }
  });

  return { result, changes };
} 