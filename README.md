# Monkey Testing – Los Estudiantes

Este proyecto implementa pruebas automatizadas utilizando **Monkey Testing** sobre el sitio web [losestudiantes.com](https://losestudiantes.com/). Las pruebas consisten en generar eventos aleatorios en la interfaz para detectar posibles errores, fallos de estabilidad o comportamientos inesperados.

## 🚀 Instrucciones para ejecutar las pruebas

Sigue estos pasos para ejecutar el conjunto de pruebas utilizando **Cypress**:

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta el siguiente comando:
   ```bash
   cypress open
   ```
3. En la interfaz de Cypress:
   - Haz clic en **"Add Project"** si es la primera vez que lo abres.
   - Selecciona la carpeta raíz del proyecto.
   - Elige la opción **"E2E Testing"**.
4. Selecciona uno de los navegadores disponibles.
5. Haz clic en **"Start Testing"**.
6. Ejecuta el archivo de prueba llamado **`monkey_testing`**.

## 🐒 ¿Qué hace el Monkey Testing?

Durante la ejecución, se simulan acciones aleatorias en la interfaz del sitio web, como:

- Clics en enlaces aleatorios.
- Llenado de campos de texto con valores aleatorios.
- Selección de opciones en menús desplegables (combos).
- Clics en botones de forma aleatoria.


## 📚 Sobre el proyecto

Este trabajo fue desarrollado como solución al taller de **Random Testing en Aplicaciones Web**, parte del curso **Pruebas Automatizadas** de la **Maestría en Ingeniería de Software** de la **Universidad de Los Andes**.
