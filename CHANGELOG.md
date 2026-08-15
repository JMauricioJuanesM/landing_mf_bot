# Changelog

Todas las modificaciones notables del frontend y simuladores de ComandaFlow AI se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-08-15

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
