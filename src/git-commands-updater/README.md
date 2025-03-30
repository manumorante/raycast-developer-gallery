# Git Commands

Directory containing Git aliases and utilities for Raycast Developer Gallery.

## Files

- `aliases.json`: Complete list of Git aliases
- `shell-aliases.json`: Shell-specific aliases
- `update.js`: Script to update aliases
- `utils/`: Utility functions

## Update Process

The `update.js` script follows these steps:

1. Gets current shell aliases and saves them
2. Creates a local copy of the main file
3. Compares and merges aliases
4. Shows a summary of changes

## Usage

This module:

- Standardizes Git operations
- Provides command shortcuts
- Maintains a centralized repository of aliases

## Structure

The module is organized into two main JSON files:

1. `aliases.json`: Contains the core Git command aliases
2. `shell-aliases.json`: Contains shell-specific variations of the Git commands

The `update.js` script is responsible for maintaining and updating these alias files.
