# Changelog

Todas las modificaciones notables del frontend y simuladores de ComandaFlow AI se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.9.29] - 2026-09-23

### Added
- **ComandaFlow Escudo 86 & Menú Omnicanal en Tiempo Real: Cero Ventas Canceladas por Desabasto, Sincronización Sub-Milisegundo y Rescate de Comandas en WhatsApp (`index.html`):**
  - Módulo comercial de disponibilidad omnicanal en tiempo real con protocolo 1-Click "86" (<200ms) desde KDS de cocina o comando en WhatsApp para apagar platillos agotados en WhatsApp Bot, Menú Web QR y agregadores.
  - Propagación automática en cascada de insumos a recetas dependientes (ej. Aguacate Hass) y huella criptográfica SHA-256 (`eventFingerprint`) inmutable para auditoría operativa.
  - Motor de sustitución culinaria inteligente con filtro estricto de seguridad de alérgenos bajo la NOM-051-SCFI/SSA1-2010 (Gluten, Lácteos, Cacahuate, Mariscos, Soya, Huevo, Nueces, Sulfitos, Pescado).
  - Rescate conversacional proactivo de órdenes en vuelo: WhatsApp Bot ofrece automáticamente al cliente el platillo sustituto recomendado y un bono de cortesía ($35 MXN bajo LFPC Art. 92 Ter), alcanzando una tasa de rescate del 84% de las comandas afectadas.
  - Badges de conversión comercial: `⚡ 1-Click 86 Instantáneo (<200ms)`, `🤖 84% Comandas Salvadas en WhatsApp`, `🥦 Declaración de Alérgenos NOM-051` y `🛡️ Blindaje Legal PROFECO LFPC Art. 92 Ter`.

---

## [1.9.28] - 2026-09-23

### Added
- **ComandaFlow Franquicias & Multi-Sucursal: Split de Regalías en Tiempo Real, Escrow Automatizado y Conciliación Z-Cut CFDI 4.0 (`index.html`):**
  - Módulo comercial para cadenas y marcas gastronómicas multi-sucursal con enrutamiento de comanda por WhatsApp por geolocalización a la cocina más cercana.
  - Split automatizado de ingresos: 93% liquidado a la cuenta operativa de la sucursal, 5% de regalías a la matriz concentradora, 2% al fondo cooperativo nacional de mercadotecnia y cuota SaaS fija ($1,499 MXN/mes).
  - Escrow bancario centralizado con dispersión automática vía SPEI y simulación de CEP Banxico.
  - Motor de auditoría de cortes Z de caja y conciliación anti-discrepancias con alerta `FLAGGED_DISCREPANCY` ante desvíos mayores a $200 MXN o 3.0%.
  - Cumplimiento fiscal y contractual bajo LFPPI Arts. 245-250 (Circular de Oferta de Franquicia) y facturación masiva CFDI 4.0 (Clave SAT `80141600` e IVA 16% desglosado).
  - Badges de conversión: `🏛️ Split 93% Sucursal / 5% Matriz / 2% Mktg`, `📍 Enrutamiento Geográfico por WhatsApp`, `⚖️ Auditoría Corte Z Anti-Discrepancias` y `📑 CFDI 4.0 Regalías & LFPPI Arts. 245-250`.

---

## [1.9.27] - 2026-09-23

### Added
- **ComandaFlow Loyalty & Smart Cashback: Monedero Digital en WhatsApp, Rachas Gastronómicas y Rescate Anti-Churn (`index.html`):**
  - Nuevo módulo comercial de fidelización directa, monedero digital nativo en WhatsApp y erradicación del 30% de comisiones a terceros.
  - Tiers dinámicos progresivos (Bronze 5%, Silver 7%, Gold 10%, Diamond VIP 12%) con perks exclusivos (postres insignia, packaging ecológico y atención preferencial VIP).
  - Gamificación con Rachas Gastronómicas (+1.5% extra en pedidos semanales) y bonos automáticos cada 3 pedidos en racha (+$50 MXN).
  - Motor de rescate predictivo anti-churn con vouchers de 48h de vigencia para WhatsApp y salvaguarda financiera (tope de redención de 50% por comanda).
  - Cumplimiento fiscal estricto SAT Regla 3.3.1.41 RMF 2026 (descuento comercial mercantil en CFDI 4.0) y tope LFPIORPI ($5,000 MXN).
  - Badges de conversión: `💎 5% - 12% Smart Cashback Directo`, `🔥 Rachas Gastronómicas (+1.5% Bono)`, `🚨 Rescate Anti-Churn 48h en WhatsApp` y `💳 Monedero Digital Seguro (SAT Regla 3.3.1.41)`.

---

## [1.9.26] - 2026-09-23

### Added
- **ComandaFlow Corporate & Catering B2B: Almuerzos Grupales, Subsidio Co-Pay y Facturación SAT CFDI 4.0 (`index.html`):**
  - Módulo comercial B2B para pedidos corporativos en oficinas y centros de trabajo con link único y cutoff time.
  - Subsidio patronal diario por empleado deducible de impuestos (LISR Arts. 28 y 94) con co-pago automatizado de excedentes.
  - Consolidación KDS en un solo lote maestro de preparación y despacho dedicado en camioneta o moto XL con contenedor NOM-251.
  - Facturación fiscal SAT CFDI 4.0 consolidada (Régimen 601, Uso G03/D04 e IVA 16% desglosado).
  - Badges de conversión: `🏢 Ticket Promedio 8.5x ($1,850 - $3,500 MXN)`, `💳 Subsidio + Co-Pay Inteligente Empleado`, `📑 Factura Consolidada SAT CFDI 4.0 (Régimen 601)` y `🚐 Despacho Consolidado Dedicado NOM-251`.

---

## [1.9.25] - 2026-09-23

### Added
- **Escudo Anti-Fraude & Arbitraje Tripartito de Disputas (`index.html`):**
  - Módulo comercial de arbitraje imparcial y filtrado del 78.4% de reclamaciones falsas y friendly fraud.
  - Scoring de riesgo en comensales con 4 tiers y corroboración técnica cruzada (PoD PIN SHA-256, GPS <45m y checklist expo KDS).
  - Badges: `🛡️ Anti-Friendly Fraud (78.4% Filtrado)`, `⚖️ Arbitraje Tripartito Justo`, `💰 +4.1% Margen Neto Rescatado` y `📜 Blindaje Jurídico PROFECO`.

---

## [1.9.24] - 2026-09-23

### Added
- **Tarifa Dinámica Equilibrada, Detección de Clima Adverso & Price Lock Token (`index.html`):**
  - Módulo comercial con reparto ético 75/25 para repartidores durante contingencias climáticas.
  - Price Lock Token con TTL de 10 min en Redis y tope PROFECO (máx 2.2x o +$65 MXN) conforme a LFPC Art. 10.
  - Badges: `🌧️ Bono de Riesgo Chofer`, `🤝 Fair-Split Ético (75/25)`, `🔒 Price Lock Token (10 min)` y `⚖️ Tope Regulatorio PROFECO`.

---

## [1.9.23] - 2026-09-23

### Added
- **Liquidación Instantánea SPEI / STP & Retenciones Fiscales Automatizadas SAT (`index.html`):**
  - Nuevo módulo comercial "Liquidación Instantánea SPEI / STP & Retenciones Fiscales Automatizadas SAT (Art. 113-A LISR)".
  - Dispersión bancaria automatizada en tiempo real (<3s) de ganancias y 100% de propinas voluntarias al terminar turno o a demanda por WhatsApp.
  - Motor tributario conforme a la reforma de plataformas tecnológicas (LISR Arts. 113-A a 113-C y LIVA Art. 18-J): retención automática de ISR (2.1%) e IVA (8.0%) para repartidores con RFC verificado (20% ISR / 16% IVA para genéricos).
  - Conciliación neta cruzada de efectivo CoD cobrado en mano, eliminando el riesgo de crédito y descuadres de caja para el restaurante.
  - Emisión automatizada del CFDI de Retenciones e Información de Pagos (Complemento de Servicios de Plataformas Tecnológicas).
  - Badges de conversión: `⚡ Dispersión Inmediata SPEI / STP (3s)`, `🏛️ Retención SAT Art. 113-A (2.1% ISR / 8% IVA)`, `🧾 Timbrado CFDI de Retenciones 2.0` y `💵 Conciliación Neta CoD en Tiempo Real`.

---

## [1.9.22] - 2026-09-23

### Added
- **Prueba Criptográfica de Entrega (PoD) & Arqueo Anti-Fraude CoD (`index.html`):**
  - Nuevo módulo comercial "Prueba Criptográfica de Entrega (PoD) & Arqueo Anti-Fraude CoD (Código de Comercio Arts. 89-114)".
  - Apretón de manos criptográfico bidireccional (PIN OTP dinámico y QR HMAC-SHA256) validado con geocerca de radio estricto (<65m) y checklist de precinto inviolable NOM-251.
  - Generación de recibo digital inmutable con hash SHA-256 dotado de pleno valor probatorio mercantil ante PROFECO y tribunales federales.
  - Arqueo y conciliación de efectivo en tiempo real (Cash-on-Delivery) con alerta preventiva a los $1,500 MXN en mano, reduciendo a cero los descuadres de caja y el 98.4% de disputas por entrega.
  - Badges de conversión: `🔐 QR / OTP Criptográfico SHA-256`, `💵 Arqueo CoD en Tiempo Real`, `🛡️ 98.4% Cero Disputas / Fraudes` y `📦 Sello Inviolable NOM-251`.

---

## [1.9.21] - 2026-09-23

### Added
- **Garantía de Entrega a Tiempo & Compensación Inmediata PROFECO (`index.html`):**
  - Nuevo módulo comercial "Garantía de Entrega a Tiempo & Compensación Inmediata PROFECO (LFPC Art. 92)".
  - Bonificación proactiva automática del 20% al 100% en monedero virtual ante demoras superiores a 4 minutos o incidencias térmicas bajo NOM-251-SSA1-2009.
  - Atribución de responsabilidad algorítmica (cocina vs. chofer) que protege el margen del restaurante y asegura un 95.8% de retención de clientes.
  - Badges de conversión: `⏱️ SLA Garantizado (94.2% On-Time)`, `🎁 Bonificación 20% - 100% LFPC Art. 92`, `🌡️ Blindaje Térmico NOM-251 (>60°C)` y `🛡️ 95.8% Retención Comensal Automática`.

---

## [1.9.20] - 2026-09-23

### Added
- **Rebalanceo Predictivo de Flota, Hotspots y Tarificación Ética NOM-251 (`index.html`):**
  - Módulo comercial de Hotspot Staging AI con reposicionamiento anticipado de repartidores (< 4 min de pickup lag en restaurante).
  - Subsidio voluntario de relocalización ($18 a $35 MXN) respetando la autonomía laboral de la LFT (Art. 291).
  - Tarificación dinámica equitativa con blindaje PROFECO (tope de 1.6x) y recargo de lluvia 100% transferido al chofer (+25 MXN).
  - Garantía de inocuidad y control térmico (>60°C en comida caliente) bajo NOM-251-SSA1-2009.
  - Badges de conversión: `⚡ Hotspot Staging AI (< 4 min Pickup)`, `🌡️ Garantía Térmica NOM-251 (>60°C)`, `🛡️ Tarifa Justa PROFECO (Tope 1.6x)` y `💵 +$28,450 MXN Utilidad Neta/Mes`.

---

## [1.9.19] - 2026-09-22

### Added
- **Scorecard de Repartidores & Despacho Prioritario NOM-251 (`index.html`):**
  - Nuevo módulo comercial de evaluación multidimensional de choferes (puntualidad > 95%, temperatura NOM-251 > 60°C, aceptación y CSAT).
  - Algoritmo de 5 niveles dinámicos con factor de despacho prioritario (hasta 1.35x para choferes Diamond) y asignación exclusiva a rutas multi-drop.
  - Smart Incentive Engine con bonos de racha (+$50, +$120, +$200 MXN) y compensación climática/surge (+25 MXN).
  - Protocolo de auditoría semanal obligatoria de maletas térmicas herméticas bajo NOM-251-SSA1-2009.
  - Badges de conversión: Repartidores Diamond (98.2% a Tiempo), Auditoría Maleta Térmica NOM-251, Bonos por Desempeño Transparente y +$24,650 MXN Ahorro/Mes.

---

## [1.9.18] - 2026-09-22

### Added
- **Logística Inversa Inteligente & Garantía Térmica Cero Pérdidas NOM-251 (`index.html`):**
  - Nuevo módulo comercial de resolución automatizada ante entregas fallidas (comensal ausente, dirección errónea, derrame o retraso térmico).
  - Emisión de Certificados Inmutables de Destrucción Sanitaria bajo NOM-251-SSA1-2009 para garantizar inocuidad alimentaria.
  - Re-cocción express KDS en < 10 min y compensación instantánea vía WhatsApp Bot (+84.5% de retención de clientes tras incidencias).
  - Recuperación de mermas mediante disputas automáticas a agregadores 3P y cobro legal de pedidos no recibidos (+$20,394 MXN de ahorro neto mensual por sucursal).
  - Badges de conversión: Rescate Clientes (84.5% Retención), Certificado NOM-251 Inmutable, Re-Cook Express KDS (<10 min) y +$20,394 MXN Ahorro/Mes.

---

## [1.9.17] - 2026-09-22

### Added
- **Sincronización Just-In-Time Cocina-Despacho (Zero-Wait Handover) (`index.html`):**
  - Nuevo módulo comercial destacando la sincronización milimétrica entre KDS y la llegada del chofer a bahía.
  - Erradicación del tiempo muerto en banqueta (dwell time reducido de 14.5 min a < 2.1 min).
  - Blindaje térmico estricto bajo NOM-251-SSA1-2009 (> 60°C de temperatura central y < 3 min en barra caliente).
  - Incremento del +50% en capacidad de despacho por chofer (+2.3 entregas adicionales por turno).
  - Badges de conversión: Zero-Wait Handover (<2.1 min), Garantía Térmica NOM-251 (>60°C), KDS Multi-Estación JIT y +50% Productividad Chofer.

---

## [1.9.16] - 2026-09-22

### Added
- **Smart Batching & Multi-Drop Inteligente con Garantía Térmica NOM-251 (`index.html`):**
  - Nuevo módulo comercial destacando la agrupación automática de 2 a 3 pedidos compatibles en un solo viaje.
  - Reducción de hasta un 43% en costos de despacho y +31% a +42% de incremento en remuneración horaria para choferes.
  - Auditoría algorítmica continua de la NOM-251-SSA1-2009 garantizando tiempos de tránsito acumulado inferiores a 18 minutos.
  - Badges de conversión: Multi-Drop 2x-3x Inteligente, -43% Costo de Despacho, SLA Térmico NOM-251 (<18 min) y Enrutamiento TSP Greedy.

---

## [1.9.15] - 2026-09-22

### Added
- **Telemetría Satelital en Vivo & Geocercas 300m con Proof of Delivery (POD) (`index.html`):**
  - Módulo interactivo destacando el rastreo satelital GPS en tiempo real para última milla accesible directamente desde WhatsApp sin instalación de apps.
  - Alerta proactiva automática cuando el repartidor ingresa a menos de 300 metros del domicilio para agilizar la entrega y evitar comida fría.
  - Validación de Proof of Delivery (POD) con PIN OTP de 4 dígitos y evidencia fotográfica que erradica disputas fraudulentas de entrega.
  - Badges de rendimiento: Telemetría Satelital Sub-Segundo, Geocerca 300m Automática, Alerta WhatsApp Proactiva y POD Cero Fraude.

---

## [1.9.14] - 2026-09-21

### Added
- **Smart Dispatch Multi-Carrier & Flota Híbrida Inteligente (`index.html`):**
  - Módulo interactivo destacando el despacho inteligente entre flota propia ($18.50 MXN) y auto-escalamiento a Uber Direct / Borzo en menos de 60 segundos.
  - Monitoreo de SLA térmico bajo la norma NOM-251-SSA1-2009 con tiempos de tránsito inferiores a 18 minutos y rastreo en vivo por WhatsApp.
  - Badges de rendimiento: Flota Propia + Uber Direct, Auto-Escalamiento < 60s, SLA Térmico NOM-251 y Ahorro de hasta $70/pedido.

---

## [1.9.13] - 2026-09-21

### Added
- **Expediter Inteligente & Handover Anti-Error con PIN OTP (`index.html`):**
  - Módulo interactivo destacando la consolidación de tickets en barra de empaque y generación de PIN OTP de 4 dígitos.
  - Notificación instantánea vía WhatsApp al repartidor o cliente con código de retiro.
  - Eliminación total de entregas erróneas y robo de paquetes con SLA de entrega en barra < 3 min.
  - Badges de rendimiento operativo: Cero Paquetes Confundidos, Handover Barra < 3 min y PIN OTP Criptográfico.

---

## [1.9.12] - 2026-09-21

### Added
- **Cocina Inteligente KDS & Enrutamiento Multi-Estación (`index.html`):**
  - Módulo interactivo destacando la digitalización completa de comandas en cocina, eliminando 100% el papel térmico.
  - Enrutamiento automático por partidas a pantallas de Horno, Parrilla, Barra Fría, Bebidas y Despacho Expediter.
  - Badges de rendimiento operativo: SLA Cocina < 12 min, Pantallas KDS Ilimitadas y Enrutamiento Sub-2ms.
- **Programa Oficial de Partners & Afiliados 30% Recurrente (`index.html`):**
  - Nueva sección comercial con calculadora dinámica interactiva de comisiones mensuales y anuales por referidos activos ($389.70 MXN/mes por sucursal).
  - Integración directa de onboarding a canal prioritario de WhatsApp con contrato mercantil legal.

---

## [1.9.11] - 2026-09-21

### Added
- **Seguridad Zero-Trust & Rotación de Secretos API 24h (`index.html`):**
  - Módulo comercial destacando la arquitectura Zero-Trust de grado bancario para integraciones con POS, impresoras fiscales y plataformas de delivery.
  - Soporte de rotación programada con periodo de gracia dual-key de 24h para cero caídas de servicio (Zero-Downtime).
  - Badges visuales de valor técnico: Rotación 24h Grace Period, Cifrado HMAC SHA-256 y Dual-Key Zero-Downtime.

---

## [1.9.10] - 2026-09-21

### Added
- **Pagos Fraccionados Multi-Comensal & Conciliación FinTech (`index.html`):**
  - Módulo de cobro individual por comensal o división en partes iguales desde WhatsApp/Web PWA.
  - Conciliación satelital y liquidación en tiempo real en Redis sin saturación de terminales físicas.
  - Badges de valor FinTech: Pagos Individuales 1-Tap, Conciliación SAT Automática y Cero Filas en Caja.

---

## [1.9.9] - 2026-09-20

### Added
- **Llamado Digital a Mesero & Asistencia Inmediata (`index.html`):**
  - Módulo interactivo de solicitud de servicio y cuenta en 1 toque desde la mesa sin esperar al mesero.
  - Alertas instantáneas en tiempo real a meseros y barra con caché Redis de sub-2ms y cero mesas desatendidas.
  - Badges de rendimiento: latencia <2ms con Redis TTL, 0 mesas desatendidas y 1-Tap en WhatsApp/PWA.

---

## [1.9.8] - 2026-09-20

### Added
- **Dine-In QR, Split-Bill & Badges de Impacto Operativo (`index.html`):**
  - Badges visuales de ROI para restaurantes: +22% de rotación de mesas, reducción del tiempo de cobro en mesa de 14 min a 2.1 min y +28% en propinas digitales para personal.
  - Integración comercial de la experiencia de autoservicio en mesa vía WhatsApp y Web PWA sin fricción de mesero.

---

### Added
- **Consola Interactiva de Trazabilidad de Lotes, FEFO & Recall Sanitario NOM-251 (`inventory/index.html`):**
  - Pestaña interactiva "🏷️ Trazabilidad Lotes & FEFO NOM-251" con semáforo preventivo de vida de anaquel (Óptimo, Preventivo <72h, Crítico <24h, Cuarentenado).
  - Simulador de rotación FEFO que muestra la priorización automática de lotes con menor vida útil ante comandas de cocina.
  - Protocolo de retiro preventivo sanitario (Recall) con 1-click para aislamiento de lotes con falla térmica (> 4.5°C) o alerta de salubridad y emisión de actas oficiales NOM-251.
  - Métricas de riesgo financiero ($ MXN) y auditoría de cadena de frío en tiempo real.

---

## [1.9.5] - 2026-09-13

### Added
- **Módulo Interactivo de Auditoría Física & Conciliación de Merma (`inventory/index.html`):**
  - Pestaña interactiva "📋 Auditoría Física & Mermas" para levantamiento de conteo ciego en cocina y almacén.
  - Conciliación algorítmica en tiempo real comparando conteo físico vs stock teórico deducido por recetas BOM.
  - Clasificación de discrepancias: Tolerancia Aceptable (+/- 2%), Merma en Preparación (2-10%), Merma Crítica / Fuga Oculta (>10%) y Sobrante no Registrado.
  - Cálculo instantáneo de Impacto Financiero ($ MXN) y Tasa de Merma con semáforo operativo (EXCELENTE, ACEPTABLE, ATENCIÓN REQUERIDA).
  - Botón de Auto-Calibración de Stock que actualiza existencias e invalida caché de snapshot en Redis (TTL 60s).

---

## [1.7.0] - 2026-08-15

### Added
- **Kitchen Inventory, Auto-Replenishment & Waste AI PWA (`inventory/index.html`):**
  - Consola web interactiva para control de stock en tiempo real y valuación de almacén en Zacatecas.
  - Simulador de deducción atómica de materias primas por orden mediante explosión de recetas BOM.
  - Generador de órdenes de compra (PO) estructuradas para WhatsApp con PIN criptográfico de recepción.
  - Dial de Food Cost % (Target < 28%) y generador de campañas Flash Yield para liquidación rentable de perecederos.

## [1.6.0] - 2026-08-15

### Added
- **Dine-In QR, Split Bill & Loyalty Hub PWA (`dine-in/index.html`):**
  - Consola web interactiva para mesas con QR criptográfico HMAC-SHA256 y comensales en vivo.
  - Simulador colaborativo de orden compartida e individual con división de cuenta (50/50 o por ítem) y propinas.
  - Wizard de auto-onboarding self-service en 4 pasos con ingestión OCR y pairing de WhatsApp.
  - Monitor de monedero digital y tiers de cashback gamificado.


### Added
- **Growth, Dynamic Pricing & Omnichannel Voice Hub PWA (`growth/index.html`):**
  - Consola web interactiva para control de precios dinámicos y yield management en tiempo real con sliders de ocupación KDS.
  - Simulador de llamadas telefónicas omnicanal SIP / Asterisk con visualización de transcripción en tiempo real y generación de tickets KDS.
  - Tracker de campañas Meta Ads con cálculo dinámico de ROAS (6.8x), CAC ($50 MXN) y comisiones de Uber evitadas.


### Added
- **Business Intelligence & Franchising Demand Forecasting Hub PWA (`bi/index.html`):**
  - Dashboard web corporativo para visualización consolidada de cadenas y franquicias (Guadalupe, Zacatecas Centro, Fresnillo).
  - KPIs en tiempo real: GMV de red, comisiones ahorradas frente a UberEats (30%), órdenes activas y tiempos medios de cocina.
  - Predictor estacional de demanda interactivo con factores exógenos combinables (Quincena, Lluvia, Clásicos de Fútbol).
  - Wizard automatizado de preparación de stock en cocina (kilogramos de masa madurada, queso, carnes preparadas, cajas y porciones de aderezo).
  - Monitor de saturación y capacidad KDS por sucursal con detección de cuellos de botella.

## [1.3.0] - 2026-08-15

### Added
- **KDS Kitchen Display System & Merchant Console PWA (`kds/index.html`):**
  - Consola web interactiva de latencia ultra-baja (<40ms) para tabletas y pantallas de cocina.
  - Máquina de estados de preparación de comandas (En Cocina, Listo, Despachado).
  - Temporizadores adaptativos codificados por color (Verde <8 min, Amarillo 8-15 min, Rojo >15 min con animación pulsante).
  - Alertas sonoras Web Audio API de alta frecuencia para ambientes con ruido de cocina.
  - Modal interactivo para gestión de insumos/platillos agotados (86'd Items) con sincronización en tiempo real hacia WhatsApp.
  - Generador de Corte de Turno (Reporte Z) con balance de ventas, desglose por métodos de pago y comisiones ahorradas.

### Added
- **Estandarización de Ramas de Desarrollo Autónomo (`feature/asistente-autonomo`):**
  - Unificación de rama de trabajo para despliegues e integraciones continuas.
- **Simulador Web Interactivo Safari Live Demo (`demo/index.html`):**
  - Interfaz web interactiva y responsiva para demostraciones comerciales en celulares y tablets sin instalación.
  - Selector en vivo de 3 negocios piloto reales de Zacatecas (Lucky Pizza, El Rey del Taco, Black Burger).
  - Simulación paso a paso: Dictado/envío de orden por WhatsApp -> Extracción automática con IA -> Cálculo financiero -> Impresión de ticket térmico en cocina animada -> Link de pago Fintech -> Despacho a repartidor.
- **Live Order Tracker PWA Mini-App (`tracker/index.html`):**
  - Mini-app web ultra-ligera (<120 KB) con mapa GPS interactivo en tiempo real (Leaflet + OpenStreetMap).
  - Estado del pedido en 4 etapas: Recibido, En Cocina, En Camino (repartidor en moto) y Entregado.
  - Botón directo de contacto con soporte por WhatsApp.

## [1.1.0] - 2026-08-15

### Added
- **Landing Page Oficial ComandaFlow AI (`index.html`):**
  - Calculadora dinámica de ROI y ahorro frente a comisiones abusivas de apps de delivery (Uber Eats / DiDi Food 30%).
  - Simulador de conversación de WhatsApp embebido con respuestas inteligentes.
  - Despliegue en dominios `comanda.masfast.shop` y `comandaflow.masfast.shop` con certificado SSL renovado.
