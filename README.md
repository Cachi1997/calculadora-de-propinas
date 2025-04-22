# Calculadora de Propinas

Es una (SPA) **Single Page Application** interactiva para gestionar un pedido de menú y calcular la propina aplicada, construida con **Vite**, **React** y **TypeScript**, y desplegada en **Netlify**.

---

## Demo en Vivo

[Probar la aplicación en Netlify](https://comfy-buttercream-37ce15.netlify.app/)

---

## Características

- **Listado de Menú**  
  Muestra 12 ítems de comida y bebida con nombre y precio, cargados desde un arreglo estático (`data/db.ts`)
- **Custom Hook `useOrder`**  
  Toda la lógica de estado —añadir/eliminar ítems, cálculo de subtotal, propina y total— está encapsulada en el hook personalizado `useOrder` (`src/hooks/useOrder.ts`) para un código más limpio y reutilizable.
- **Agregar y Eliminar Ítems**
  - Añade productos al pedido con un clic en “Menú”.
  - Elimina un producto específico desde la sección “Consumo”.
  - Limpia todo el pedido usando el botón **Guardar Orden**, que reinicia el estado interno
- **Selección de Propina**
  - Opciones de radio para 10%, 20% y 50%.
  - Actualiza la propina seleccionada en tiempo real
- **Cálculo de Totales**
  - **Subtotal**: suma de (precio × cantidad) para cada ítem.
  - **Propina**: subtotal × porcentaje seleccionado.
  - **Total a Pagar**: subtotal + propina.
  - Despliega todo en la sección “Totales y propina”

---

## Tecnologías

- **Vite** ^6.3.1 (bundler y servidor de desarrollo)
- **React** ^19.0.0 y **ReactDOM** ^19.0.0 (biblioteca de UI)
- **TypeScript** ~5.7.2 (tipado estático)
- **Tailwind CSS** ^4.1.4 (estilos utility‑first)
- **Custom Hook**: `useOrder` para centralizar la lógica de gestión de pedidos y propinas.
- **ESLint** con plugins para React y Hooks (calidad de código)
- **Netlify** (hosting del frontend)

---

## Instalación y Uso

1. **Clonar el repositorio**

```bash
git clone https://github.com/Cachi1997/calculadora-de-propinas.git

cd calculadora-de-propinas

npm install

npm run dev
```
