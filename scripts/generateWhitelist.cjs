const fs = require('fs');
const path = require('path');

// Leer el CSV
const csvPath = path.join(__dirname, '..', 'academy.csv');
const csv = fs.readFileSync(csvPath, 'utf8');

// Parsear las líneas
const lines = csv.split('\n');
const activeEmails = new Set();

// Procesar cada línea (saltando el header)
for (let i = 1; i < lines.length; i++) {
    const line = lines[i];

    // Solo procesar líneas con suscripción activa
    if (line.includes('(active)')) {
        // Buscar el email en el formato: "email@ejemplo.com","mailto:email@ejemplo.com"
        const emailMatch = line.match(/\"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\",\"mailto:/i);
        if (emailMatch) {
            activeEmails.add(emailMatch[1].toLowerCase());
        }
    }
}

// Convertir a array y ordenar
const emailArray = Array.from(activeEmails).sort();

console.log('Total usuarios con suscripcion activa: ' + emailArray.length);
console.log('\nPrimeros 10 emails:');
emailArray.slice(0, 10).forEach(function (email) { console.log('  - ' + email); });

// Generar el archivo whitelist.js
const whitelistContent = '// Lista de usuarios con suscripcion ACTIVA en YinYangSEO Academy\n' +
    '// Generado automaticamente desde academy.csv el ' + new Date().toLocaleDateString('es-ES') + '\n' +
    '// Total: ' + emailArray.length + ' usuarios activos\n\n' +
    'export const WHITELIST = [\n' +
    emailArray.map(function (email) { return '    "' + email + '"'; }).join(',\n') +
    '\n];\n';

const outputPath = path.join(__dirname, '..', 'src', 'constants', 'whitelist.js');
fs.writeFileSync(outputPath, whitelistContent, 'utf8');

console.log('\n Whitelist generada en: ' + outputPath);
