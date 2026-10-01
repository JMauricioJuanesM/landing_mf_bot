const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace 60 -> 61
html = html.replace('Ver Arquitectura Técnica Completa (60 Módulos Avanzados)', 'Ver Arquitectura Técnica Completa (61 Módulos Avanzados)');
html = html.replace('Ver Arquitectura Técnica Completa (60 Módulos Avanzados)', 'Ver Arquitectura Técnica Completa (61 Módulos Avanzados)'); // In case there are 2

// Replace 14 -> 15
html = html.replace('🛡️ Inocuidad NOM-251 (14)', '🛡️ Inocuidad NOM-251 (15)');

// Replace version v1.9.73 -> v1.9.74
html = html.replace('v1.9.73', 'v1.9.74');

// Insert new module after Sprint 86
const sprint86End = `                    </div>
                    <div class="eco-card-badges">
                        <span style="background: rgba(16, 185, 129, 0.15); color: #059669; padding: 3px 10px; border-radius: 9999px;">🪳 Sprint 86 · Control de Plagas & IPM</span>
                        <span style="background: rgba(59, 130, 246, 0.15); color: #2563eb; padding: 3px 10px; border-radius: 9999px;">💰 +$39,205 MXN/mes por sucursal</span>
                        <span style="background: rgba(245, 158, 11, 0.15); color: #d97706; padding: 3px 10px; border-radius: 9999px;">⚖️ NOM-251 Num. 5.9 · NOM-256 · Distintivo H</span>
                    </div>
                </div>`;

const newModule = `                <div class="feature-module eco-card" data-category="sanidad">
                    <div>
                        <div class="eco-card-header">
                            <div class="eco-card-icon">🗑️</div>
                            <div class="eco-card-meta">
                                <span class="eco-card-category">🛡️ Inocuidad NOM-251 / Distintivo H</span>
                                <h4 class="eco-card-title">Smart KDS Food Waste Tracking, HACCP Waste Disposal Guard & Food Spoilage Early-Warning Engine™</h4>
                            </div>
                        </div>
                        <div class="eco-card-desc">
                            <ul style="list-style: none; padding-left: 0; margin-top: 8px; display: flex; flex-direction: column; gap: 6px;">
                                <li>✓ Registro instantáneo de mermas con cálculo automático de costo en MXN</li>
                                <li>🚥 Food Spoilage Early-Warning: semáforo de riesgo SAFE / MONITOR / ELEVATED / CRITICAL / DISCARD IMMEDIATE</li>
                                <li>🚫 HACCP Waste Disposal Guard: valida método de disposición legal (prohíbe vertido en drenaje de biológicos)</li>
                                <li>🔗 Trazabilidad tri-hash SHA-256 por evento (registro → disposición → auditoría) ante SEMARNAT y COFEPRIS</li>
                                <li>📊 Dashboard diario de mermas: top 3 items, categorías, tasa % vs baseline 3%</li>
                                <li>💰 Unit Economics: +$72,100 MXN/mes bruto por sucursal | Payback 0.63 días</li>
                            </ul>
                        </div>
                    </div>
                    <div class="eco-card-badges">
                        <span style="background: rgba(16, 185, 129, 0.15); color: #059669; padding: 3px 10px; border-radius: 9999px;">🗑️ Sprint 87 · Control de Mermas</span>
                        <span style="background: rgba(59, 130, 246, 0.15); color: #2563eb; padding: 3px 10px; border-radius: 9999px;">💰 ROI 4,710% | Payback 15.1 h</span>
                        <span style="background: rgba(245, 158, 11, 0.15); color: #d97706; padding: 3px 10px; border-radius: 9999px;">⚖️ NOM-161-SEMARNAT | NOM-251 Num. 5.4/5.10 | Distintivo H | LGPGIR Art. 19</span>
                    </div>
                </div>`;

const insertionIndex = html.indexOf(sprint86End);

if (insertionIndex !== -1) {
    const afterSprint86 = insertionIndex + sprint86End.length;
    html = html.substring(0, afterSprint86) + '\n' + newModule + html.substring(afterSprint86);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Success');
} else {
    console.log('Sprint 86 end not found');
}
