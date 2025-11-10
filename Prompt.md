# Prompt para el Desarrollo de la Landing Page de ConfiaPE

## 1. Objetivo del Proyecto

Desarrollar una landing page profesional, estética y de alto rendimiento para ConfiaPE, con el objetivo principal de captar leads (clientes y técnicos) y comunicar de manera efectiva la propuesta de valor de la plataforma. La página debe ser intuitiva, fácil de navegar y optimizada para la conversión.

## 2. Audiencia Objetivo

*   **Clientes (B2C):** Personas o empresas en Perú que necesitan contratar servicios técnicos confiables y verificados. Buscan seguridad, eficiencia y calidad.
*   **Técnicos/Profesionales (B2B):** Técnicos y profesionales independientes en Perú que buscan aumentar su visibilidad, gestionar su trabajo de forma eficiente y asegurar sus pagos. Buscan oportunidades de crecimiento y una plataforma confiable.

## 3. Identidad de Marca y Estilo Visual

*   **Colores Principales:**
    *   **Fondo:** Negro (predominante, para una sensación de modernidad y sofisticación).
    *   **Contraste/Acento:** Azul (para elementos interactivos, títulos clave, iconos, etc., transmitiendo confianza y tecnología).
    *   **Texto:** Blanco o tonos de gris claro para asegurar legibilidad sobre fondos oscuros.
*   **Tipografía:** Moderna, limpia y legible. Se recomienda una combinación de una fuente sans-serif para títulos (ej. Montserrat, Poppins) y otra para el cuerpo de texto (ej. Lato, Open Sans).
*   **Tono de Comunicación:** Profesional, confiable, directo y amigable. Enfatizar la seguridad, la eficiencia y la facilidad de uso.
*   **Estilo General:** Minimalista, moderno, con espacios en blanco (oscuros) generosos para una experiencia visual despejada. Uso de animaciones sutiles (AOS) para mejorar la interacción sin distraer.

## 4. Contenido Clave de la Landing Page (Basado en LANDING_PAGE_CONTENT.md)

La landing page debe incluir las siguientes secciones, presentadas de forma atractiva y fácil de digerir:

*   **Header:**
    *   Logo de ConfiaPE (texto o imagen placeholder).
    *   Navegación simple (ej. "Servicios", "Cómo Funciona", "Beneficios", "Contacto").
*   **Hero Section:**
    *   **Título Principal:** "ConfiaPE: Conectamos confianza y profesionalismo."
    *   **Subtítulo:** "Encuentra, contrata y califica a los mejores técnicos del Perú. Todo en un solo lugar."
    *   **Introducción:** Párrafo explicativo sobre la plataforma.
    *   **CTA Principal:** Botón "Encuentra a tu técnico ideal" (dirigido a clientes).
*   **Sección "¿Cómo Funciona?" (Para Clientes):**
    *   Título: "¿Cómo Funciona?"
    *   Explicación en 3 pasos claros y concisos (Busca y Compara, Solicita y Chatea, Paga y Califica), con iconos o ilustraciones representativas.
*   **Sección "Beneficios Clave":**
    *   Título: "Beneficios Clave"
    *   Dos columnas o secciones diferenciadas: "Para Clientes" y "Para Técnicos".
    *   Listado de beneficios con iconos (emojis o SVG simples) para cada grupo.
*   **Sección "Llamada a la Acción" (CTA Dual):**
    *   Título: "¿Listo para empezar?"
    *   Dos botones de CTA claros:
        *   "Encuentra a tu técnico ideal ahora" (para clientes).
        *   "Únete a nuestra red de profesionales" (para técnicos).
*   **Sección "Contacto" (Formulario):**
    *   Título: "¿Necesitas ayuda o tienes preguntas?" (o similar).
    *   Formulario simple para captar leads: Nombre, Correo Electrónico, Mensaje.
    *   Botón de envío.
*   **Footer:**
    *   Información de copyright.
    *   Breve descripción sobre la tecnología de la plataforma (Node.js, Next.js, PostgreSQL, Stripe, chat en tiempo real).
    *   Enlaces a redes sociales (opcional, placeholders por ahora).

## 5. Principios de Diseño y UX/UI

*   **Diseño Responsivo:** La página debe verse y funcionar perfectamente en todos los dispositivos (móviles, tablets, desktops).
*   **Claridad y Simplicidad:** Evitar el desorden visual. Cada elemento debe tener un propósito claro.
*   **Jerarquía Visual:** Usar tamaño de texto, peso, color y espaciado para guiar la vista del usuario a través de la información más importante.
*   **Consistencia:** Mantener un estilo visual y de interacción uniforme en toda la página.
*   **Accesibilidad:** Considerar buenas prácticas de accesibilidad (contraste de colores, etiquetas ARIA, navegación por teclado).
*   **Microinteracciones:** Añadir pequeños efectos visuales o animaciones (ej. hover states en botones, transiciones suaves) para mejorar la experiencia.

## 6. Consideraciones Técnicas

*   **Frontend:** React, TypeScript, Vite, Tailwind CSS.
*   **Backend (Serverless):** Implementación de una API serverless (Express.js en Vercel/similar) para el formulario de contacto, utilizando Prisma y PostgreSQL para la persistencia de datos.
*   **Rendimiento:** Optimización de imágenes, carga diferida (lazy loading) si es necesario, minimización de JavaScript y CSS.
*   **SEO Básico:** Meta tags (título, descripción), estructura semántica HTML5, URLs amigables (si aplica).

## 7. Próximos Pasos

1.  **Refinar el diseño:** Iterar sobre los componentes existentes y añadir los nuevos, asegurando la coherencia estética.
2.  **Implementar la lógica del formulario:** Conectar el formulario de contacto con la API serverless para el almacenamiento de leads.
3.  **Optimización:** Revisar el rendimiento y la accesibilidad.
4.  **Pruebas:** Asegurar la funcionalidad en diferentes navegadores y dispositivos.
