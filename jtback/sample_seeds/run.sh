#!/bin/bash

if [ -z "$1" ]; then
    echo "Error: SQL file argument required"
    exit 1
fi

# Determine script directory name; if it's 'sample_seeds' use ../jtdata.db, else use jtdata.db
script_dir="$(cd "$(dirname "$0")" && pwd)"
dir_name="$(basename "$script_dir")"

if [ "$dir_name" = "sample_seeds" ]; then
    DB_PATH="../jtdata.db"
else
    DB_PATH="jtdata.db"
fi

sqlite3 "$DB_PATH" < "$1"
