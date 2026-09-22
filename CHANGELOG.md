# Changelog

Todas las modificaciones notables del frontend y simuladores de ComandaFlow AI se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
