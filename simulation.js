/* ============================================
   BIOL 1104 Lab #6 — DNA Extraction Simulation
   State Machine & Interactive Logic
   ============================================ */

// ─── Image Paths ───
const GITHUB_BASE = 'https://raw.githubusercontent.com/INTERLabs-Prototypes/biol1104-lab6/main/';

const IMG = {
    titulos: {
        t1: GITHUB_BASE + 'Imagenes/Titulos/Title1.png',  // Solution prep
        t2: GITHUB_BASE + 'Imagenes/Titulos/Title2.png',  // Onion cutting
        t3: GITHUB_BASE + 'Imagenes/Titulos/Title3.png',  // Blending
    },
    pasos: {
        p1: GITHUB_BASE + 'Imagenes/Pasos/Paso1.png',    // Mixing solution with glass rod
        p2a: GITHUB_BASE + 'Imagenes/Pasos/Paso2a.png',  // Cutting onion
        p2b: GITHUB_BASE + 'Imagenes/Pasos/Paso2b.png',  // Cutting onion close-up
        p3: GITHUB_BASE + 'Imagenes/Pasos/Paso3.png',    // Filtering with funnel
        p4a: GITHUB_BASE + 'Imagenes/Pasos/Paso4a.png',  // Pouring into test tube + ethanol
        p4b: GITHUB_BASE + 'Imagenes/Pasos/Paso4b.png',  // Final DNA visible
    },
    materiales: [
        { src: GITHUB_BASE + 'Imagenes/Materiales/Cebollas_frescas.png', name: '3 cebollas frescas' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Probetas.png', name: 'Probetas (10, 50, 100 ml)' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Beaker_de_250_ml.png', name: '3 beakers de 250 ml' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Cuchillo.png', name: '1 cuchillo' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Tubo_de_ensayo_de_15_ml.jpg', name: '1 tubo de ensayo 15 ml' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Licuadora.jpg', name: '1 licuadora' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Gradilla.jpg', name: '1 gradilla' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Embudo1.jpg', name: '1 embudo' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Varillas_de_cristal.jpg', name: '4 varillas de cristal' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Filtros_de_café.jpg', name: '1 filtro de café' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Sal_sin_yodo (20g).jpg', name: 'Sal sin yodo (20 g)' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Ablandador_de_carne_5g.jpg', name: 'Ablandador de carne (5 g)' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Detergente_20_ml.png', name: 'Detergente (20 ml)' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Agua_destilada_de_95_ml_y_180_ml.png', name: 'Agua destilada (180 + 95 ml)' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/95_etanol_frío_6_ml.png', name: 'Etanol 95% frío (6 ml)' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Balanza.png', name: '1 balanza' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Regla.png', name: '1 regla' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Tabla_de_picar.png', name: '1 tabla para picar' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Platos.png', name: '2 platos' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Espatulas.png', name: '2 espátulas' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Nevera_congelador.png', name: 'Nevera / congelador' },
        { src: GITHUB_BASE + 'Imagenes/Materiales/Marcador_negro.png', name: 'Marcador negro' },
    ]
};

// ─── Phase & Step Definitions ───
const PHASES = [
    // 0 — Introduction
    {
        id: 'intro',
        title: 'INTRODUCCIÓN',
        steps: [
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Sección 1</div>
                    <h2 class="nb-section-title">Introducción</h2>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Hola, bienvenidos a esta simulación del laboratorio de biología. En esta simulación aprenderás aspectos básicos sobre la <strong>extracción de ADN</strong> utilizando una adaptación de un método inorgánico de extracción.</p>
                    </div>
                    <p class="nb-text">En la simulación de hoy aprenderás cómo extraer o aislar el ADN de <strong>células de cebolla</strong>, separándolo de los demás componentes celulares de manera que conserve su estructura y secuencia.</p>
                    <p class="nb-text">El proceso de extracción de ADN sigue una secuencia de etapas:</p>
                    <ul class="nb-objectives">
                        <li><strong>Lisis celular</strong> — romper las membranas y paredes celulares</li>
                        <li><strong>Eliminación de contaminantes</strong> — separar el ADN de otras moléculas</li>
                        <li><strong>Precipitación del ADN</strong> — hacer visible el ADN</li>
                    </ul>
                    <p class="nb-text">La cebolla tiene casi 5 veces la cantidad de ADN que un ser humano, además es un bulbo translúcido con bajo contenido de almidón, lo que permite ver el ADN claramente.</p>
                `,
                canProceed: true
            },
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Sección 1</div>
                    <h2 class="nb-section-title">Objetivos</h2>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Estos son los objetivos que cumplirás en esta simulación:</p>
                    </div>
                    <ul class="nb-objectives">
                        <li>Aprender los pasos básicos para extraer ADN de célula eucariota vegetal</li>
                        <li>Aprender el efecto que tiene cada solución que se usa en la extracción</li>
                        <li>Analizar cómo el procedimiento puede variar según el tipo de célula</li>
                        <li>Repasar la documentación correcta de las observaciones realizadas</li>
                    </ul>
                    <div class="nb-instructor" style="margin-top:16px;">
                        <div class="nb-instructor-label">📋 Hipótesis</div>
                        <p>La extracción de ADN sigue unos principios generales que varían según el tipo de célula de donde se desea extraer el ADN.</p>
                    </div>
                `,
                canProceed: true
            }
        ]
    },
    // 1 — Safety
    {
        id: 'safety',
        title: 'SEGURIDAD',
        steps: [
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Sección 2</div>
                    <h2 class="nb-section-title">Vestimenta de Seguridad</h2>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Para entrar al laboratorio debes vestir correctamente. Selecciona todos los elementos de seguridad requeridos:</p>
                    </div>
                    <div class="safety-grid" id="safety-quiz">
                        <div class="safety-option" data-correct="true" onclick="toggleSafety(this)">
                            <span class="option-check"></span>
                            <span>👟 Zapatos cerrados</span>
                        </div>
                        <div class="safety-option" data-correct="true" onclick="toggleSafety(this)">
                            <span class="option-check"></span>
                            <span>🥼 Bata de laboratorio</span>
                        </div>
                        <div class="safety-option" data-correct="true" onclick="toggleSafety(this)">
                            <span class="option-check"></span>
                            <span>🥽 Gafas de seguridad</span>
                        </div>
                        <div class="safety-option" data-correct="true" onclick="toggleSafety(this)">
                            <span class="option-check"></span>
                            <span>💇 Cabello recogido</span>
                        </div>
                        <div class="safety-option" data-correct="false" onclick="toggleSafety(this)">
                            <span class="option-check"></span>
                            <span>👕 Camiseta sin mangas</span>
                        </div>
                        <div class="safety-option" data-correct="false" onclick="toggleSafety(this)">
                            <span class="option-check"></span>
                            <span>🩴 Sandalias</span>
                        </div>
                    </div>
                    <button class="btn-action" id="btn-check-safety" onclick="checkSafety()">Verificar vestimenta</button>
                    <div id="safety-feedback"></div>
                `,
                canProceed: false,
                requiresSafety: true
            }
        ]
    },
    // 2 — Materials
    {
        id: 'materials',
        title: 'MATERIALES',
        steps: [
            {
                image: IMG.titulos.t1,
                content: 'MATERIALS_PLACEHOLDER',
                canProceed: true
            }
        ]
    },
    // 3 — Demo
    {
        id: 'demo',
        title: 'DEMOSTRACIÓN',
        steps: [
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Sección 4</div>
                    <h2 class="nb-section-title">Demostración</h2>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Observa la demostración del procedimiento antes de realizarlo por tu cuenta:</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:12px;">
                        <div class="nb-instructor-label">❓ ¿Cuáles soluciones utilizaré?</div>
                        <p>Dos soluciones: una de <strong>detergente y sal</strong> que rompe la célula, y otra de <strong>ablandador de carne</strong> que protege el ADN. También <strong>etanol frío</strong> para precipitar el ADN.</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:12px;">
                        <div class="nb-instructor-label">❓ ¿De cuál tejido de la cebolla haré la extracción?</div>
                        <p>Del <strong>corazón del bulbo</strong> de la cebolla. Corta la cebolla hasta llegar a su centro.</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:12px;">
                        <div class="nb-instructor-label">❓ ¿Cómo hago lisis celular?</div>
                        <p>Mezcla la cebolla con la <strong>solución de detergente y sal</strong> en una licuadora.</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:12px;">
                        <div class="nb-instructor-label">❓ ¿Cómo protejo el ADN?</div>
                        <p>Mezcla la solución filtrada con la <strong>solución de ablandador de carne</strong>.</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:12px;">
                        <div class="nb-instructor-label">❓ ¿Cómo precipito el ADN?</div>
                        <p>Sirve <strong>6 ml de etanol 95% frío</strong> en el tubo de ensayo.</p>
                    </div>
                    <div class="nb-note">📝 ¡Recuerda! Toma apuntes del procedimiento y el propósito de cada paso.</div>
                `,
                canProceed: true
            }
        ]
    },
    // 4 — Phase 1: Prepare Solutions
    {
        id: 'phase1',
        title: 'PREPARAR SOLUCIONES',
        steps: [
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Fase 1 — Paso 1 de 6</div>
                    <h2 class="nb-section-title">Solución de Detergente y Sal</h2>
                    <div class="substep-progress" id="phase1-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Sobre la mesa de trabajo hay materiales para preparar dos soluciones. Inicia con la <strong>solución de detergente y sal</strong> en un beaker de 250 ml. Esta solución romperá las membranas, coagulará proteínas y se unirá a los grupos fosfato del ADN.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🏷️ Buscar beaker y rotularlo "solución sal+detergente"</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p1,
                content: `
                    <div class="nb-section-num">Fase 1 — Paso 2 de 6</div>
                    <h2 class="nb-section-title">Agregar Ingredientes</h2>
                    <div class="substep-progress" id="phase1-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Mide <strong>20 ml de detergente</strong> con una probeta de 50 ml y sírvelo en el beaker. Luego pesa <strong>20 g de sal</strong> usando la balanza y agrégala. Finalmente, mide <strong>180 ml de agua destilada</strong> y sírvela en el beaker.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🧪 Agregar detergente, sal y agua destilada al beaker</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p1,
                content: `
                    <div class="nb-section-num">Fase 1 — Paso 3 de 6</div>
                    <h2 class="nb-section-title">Agitar la Solución</h2>
                    <div class="substep-progress" id="phase1-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Busca una <strong>varilla de cristal</strong> y agita suavemente evitando que se forme espuma.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🥢 Agitar suavemente con varilla de cristal</button>
                    <div class="nb-success" style="margin-top:12px; display:none;" id="stir-feedback">✅ ¡Solución de detergente y sal preparada!</div>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Fase 1 — Paso 4 de 6</div>
                    <h2 class="nb-section-title">Solución de Ablandador de Carne</h2>
                    <div class="substep-progress" id="phase1-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Ahora prepara la segunda solución: <strong>solución de ablandador de carne</strong>. El ablandador protege el ADN porque desnaturaliza las enzimas que degradan el ADN. Busca un segundo beaker de 250 ml y rotúlalo "solución ablandador".</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🏷️ Buscar segundo beaker y rotularlo "solución ablandador"</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p1,
                content: `
                    <div class="nb-section-num">Fase 1 — Paso 5 de 6</div>
                    <h2 class="nb-section-title">Preparar Solución de Ablandador</h2>
                    <div class="substep-progress" id="phase1-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Pesa <strong>5 g de ablandador de carne</strong> usando la balanza y sírvelo en el beaker. Luego mide <strong>95 ml de agua destilada</strong> y sírvela. Agita suavemente con una varilla de cristal para disolver.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🧪 Agregar ablandador, agua y agitar</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.titulos.t1,
                content: `
                    <div class="nb-section-num">Fase 1 — Paso 6 de 6</div>
                    <h2 class="nb-section-title">Preparar el Etanol</h2>
                    <div class="substep-progress" id="phase1-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Coloca el <strong>etanol 95%</strong> en el congelador de la nevera del laboratorio. El etanol debe estar suficientemente frío para que la precipitación del ADN sea efectiva.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">❄️ Colocar etanol en el congelador</button>
                    <div class="nb-success" style="margin-top:12px; display:none;" id="phase1-complete">✅ ¡Has terminado de preparar las soluciones! Puedes continuar con la lisis celular.</div>
                `,
                canProceed: false,
                requiresAction: true
            }
        ]
    },
    // 5 — Phase 2: Cell Lysis
    {
        id: 'phase2',
        title: 'LISIS CELULAR',
        steps: [
            {
                image: IMG.titulos.t2,
                content: `
                    <div class="nb-section-num">Fase 2 — Paso 1 de 5</div>
                    <h2 class="nb-section-title">Cortar las Cebollas</h2>
                    <div class="substep-progress" id="phase2-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>En la mesa encuentras las cebollas. Corta <strong>tres cebollas</strong> hasta obtener el centro o corazón de cada una. Cada centro debe medir <strong>2.5 cm por cada lado</strong>. ¡Mídelo con la regla!</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🔪 Cortar cebollas y medir con regla (2.5 cm)</button>
                    <div class="nb-note">⚠️ ¡Lava el cuchillo después de utilizarlo!</div>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p2a,
                content: `
                    <div class="nb-section-num">Fase 2 — Paso 2 de 5</div>
                    <h2 class="nb-section-title">Licuar con Solución</h2>
                    <div class="substep-progress" id="phase2-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Deposita los tres corazones en la licuadora. Mide <strong>100 ml de la solución de detergente con sal</strong> usando una probeta de 100 ml y sírvelos en la licuadora.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🫧 Poner cebollas y solución en licuadora</button>
                    <div class="nb-note">📏 Recuerda que para medir correctamente debes buscar la base del menisco.</div>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.titulos.t3,
                content: `
                    <div class="nb-section-num">Fase 2 — Paso 3 de 5</div>
                    <h2 class="nb-section-title">Licuar la Mezcla</h2>
                    <div class="substep-progress" id="phase2-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Licúa por <strong>1-2 minutos</strong> hasta obtener una mezcla homogénea.</p>
                    </div>
                    <button class="btn-action" onclick="startBlendTimer(this)">⚡ Encender licuadora</button>
                    <div id="blend-timer" style="display:none;">
                        <div class="timer-display" id="blend-countdown">01:30</div>
                        <p class="nb-text" style="text-align:center;">Licuando mezcla...</p>
                    </div>
                    <div class="nb-note">📝 ¡Mientras se licúa, actualiza tus apuntes!</div>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p3,
                content: `
                    <div class="nb-section-num">Fase 2 — Paso 4 de 5</div>
                    <h2 class="nb-section-title">Filtrar la Mezcla</h2>
                    <div class="substep-progress" id="phase2-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Busca un <strong>beaker limpio de 250 ml</strong>. Coloca un embudo con un papel filtro sobre el beaker. Sirve el contenido de la licuadora sobre el filtro y observa cómo se recoge la solución filtrada.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🫗 Filtrar contenido de la licuadora</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p3,
                content: `
                    <div class="nb-section-num">Fase 2 — Paso 5 de 5</div>
                    <h2 class="nb-section-title">Agregar Ablandador de Carne</h2>
                    <div class="substep-progress" id="phase2-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Mide <strong>30 ml de solución de ablandador de carne</strong> con una probeta de 50 ml. Sírvelos sobre la solución filtrada y agita suavemente con una varilla de cristal.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🧪 Agregar ablandador y agitar suavemente</button>
                    <div class="nb-success" style="margin-top:12px; display:none;" id="phase2-complete">✅ ¡Has completado la lisis celular y remoción de contaminantes!</div>
                `,
                canProceed: false,
                requiresAction: true
            }
        ]
    },
    // 6 — Phase 3: DNA Precipitation
    {
        id: 'phase3',
        title: 'PRECIPITACIÓN DEL ADN',
        steps: [
            {
                image: IMG.pasos.p4a,
                content: `
                    <div class="nb-section-num">Fase 3 — Paso 1 de 4</div>
                    <h2 class="nb-section-title">Preparar Tubo de Ensayo</h2>
                    <div class="substep-progress" id="phase3-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Mide <strong>6 ml de la solución filtrada con ablandador</strong> usando una probeta de 10 ml. Sírvelos en un tubo de ensayo y coloca el tubo en una gradilla.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🧪 Servir 6 ml en tubo de ensayo</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p4a,
                content: `
                    <div class="nb-section-num">Fase 3 — Paso 2 de 4</div>
                    <h2 class="nb-section-title">Agregar Etanol Frío</h2>
                    <div class="substep-progress" id="phase3-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Busca el <strong>etanol 95% frío</strong> del congelador. Mide <strong>6 ml</strong> con una probeta de 10 ml. Sírvelos suavemente por las paredes del tubo de ensayo.</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:10px;">
                        <div class="nb-instructor-label">💡 ¿Por qué etanol frío?</div>
                        <p>El ADN es <strong>insoluble en etanol</strong>, por lo que el etanol frío lo precipita, separándolo de la solución. Si el etanol no está suficientemente frío, el ADN se dañará y obtendrás menor cantidad.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">❄️ Servir 6 ml de etanol frío por las paredes del tubo</button>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p4a,
                content: `
                    <div class="nb-section-num">Fase 3 — Paso 3 de 4</div>
                    <h2 class="nb-section-title">Dejar Reposar</h2>
                    <div class="substep-progress" id="phase3-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Deja reposar por <strong>2-3 minutos</strong> hasta que observes que no se producen más burbujas.</p>
                    </div>
                    <button class="btn-action" onclick="startRestTimer(this)">⏱️ Iniciar tiempo de reposo</button>
                    <div id="rest-timer" style="display:none;">
                        <div class="timer-display" id="rest-countdown">02:00</div>
                        <p class="nb-text" style="text-align:center;">Esperando precipitación del ADN...</p>
                    </div>
                    <div class="nb-note">📝 Mientras transcurre el tiempo, actualiza tus apuntes.</div>
                `,
                canProceed: false,
                requiresAction: true
            },
            {
                image: IMG.pasos.p4b,
                content: `
                    <div class="nb-section-num">Fase 3 — Paso 4 de 4</div>
                    <h2 class="nb-section-title">Observar el ADN</h2>
                    <div class="substep-progress" id="phase3-progress"></div>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>Observa detalladamente las <strong>dos fases</strong> que se forman. Encontrarás el ADN flotando en el alcohol, cerca de la interfase entre la solución y el alcohol. Utiliza una <strong>varilla de cristal</strong> para pescarlo.</p>
                    </div>
                    <button class="btn-action" onclick="completeAction(this)">🥢 Pescar el ADN con varilla de cristal</button>
                `,
                canProceed: false,
                requiresAction: true
            }
        ]
    },
    // 7 — Phase 4: Results
    {
        id: 'phase4',
        title: 'RESULTADOS',
        steps: [
            {
                image: IMG.pasos.p4b,
                content: `
                    <div class="nb-section-num">Fase 4</div>
                    <h2 class="nb-section-title">¡ADN Extraído!</h2>
                    <div class="nb-instructor">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>¡Ahí lo observas! Ese <strong>hilo blanco</strong> que ves flotando es el ADN que se encuentra en la interfase entre la solución de filtrado y el etanol. <strong>¡Lo has logrado! ¡Extrajiste ADN de células de cebolla!</strong></p>
                    </div>
                    <div class="nb-success">🧬 ¡Estás observando macroscópicamente el ADN que extrajiste!</div>
                    <div class="nb-instructor" style="margin-top:14px;">
                        <div class="nb-instructor-label">🔬 En un laboratorio real...</div>
                        <p>Después de extraer el ADN, los científicos lo separan del alcohol <strong>centrifugando</strong> la solución. El ADN obtenido es re-suspendido usando una solución de buffer y confirman su presencia haciendo una <strong>electroforesis en gel</strong>.</p>
                    </div>
                    <div class="nb-instructor" style="margin-top:14px;">
                        <div class="nb-instructor-label">👩‍🔬 Instructora</div>
                        <p>¡Muy bien! Has aprendido los pasos básicos para realizar extracción de ADN. Recuerda: luego de completar el procedimiento, documentar tus observaciones y completar tu análisis. Busca las instrucciones en el <strong>POST-laboratorio</strong>.</p>
                    </div>
                `,
                canProceed: true,
                isFinal: true
            }
        ]
    }
];

// ─── State ───
let currentPhase = 0;
let currentStep = 0;
let safetyPassed = false;

// ─── DOM Refs ───
const $screens = {
    welcome: document.getElementById('screen-welcome'),
    sim: document.getElementById('screen-simulation'),
    complete: document.getElementById('screen-complete')
};
const $workspaceImg = document.getElementById('workspace-img');
const $notebookContent = document.getElementById('notebook-content');
const $btnNext = document.getElementById('btn-next');
const $phaseItems = document.querySelectorAll('.phase-item');

// ─── Screen Management ───
function showScreen(name) {
    Object.values($screens).forEach(s => s.classList.remove('active'));
    $screens[name].classList.add('active');
}

// ─── Start Simulation ───
function startSimulation() {
    showScreen('sim');
    currentPhase = 0;
    currentStep = 0;
    renderStep();
}

// ─── Render Current Step ───
function renderStep() {
    const phase = PHASES[currentPhase];
    const step = phase.steps[currentStep];

    // Update workspace image
    $workspaceImg.classList.add('loading');
    $workspaceImg.src = step.image;
    $workspaceImg.onload = () => $workspaceImg.classList.remove('loading');

    // Update notebook content
    let content = step.content;

    // Materials placeholder
    if (content === 'MATERIALS_PLACEHOLDER') {
        content = renderMaterialsSection();
    }

    $notebookContent.innerHTML = content;
    $notebookContent.scrollTop = 0;

    // Render sub-step progress bars
    renderSubstepProgress();

    // Update phase tracker
    updatePhaseTracker();

    // Update next button
    $btnNext.disabled = !step.canProceed;
    if (step.isFinal) {
        $btnNext.textContent = 'Completar Simulación ';
        $btnNext.innerHTML = 'Completar Simulación <span class="btn-arrow">›</span>';
    } else {
        $btnNext.innerHTML = 'Siguiente sección <span class="btn-arrow">›</span>';
    }
}

// ─── Materials Section Content ───
function renderMaterialsSection() {
    let cards = IMG.materiales.map(m => `
        <div class="material-card">
            <img src="${m.src}" alt="${m.name}" loading="lazy">
            <span>${m.name}</span>
        </div>
    `).join('');

    return `
        <div class="nb-section-num">Sección 3</div>
        <h2 class="nb-section-title">Materiales</h2>
        <div class="nb-instructor">
            <div class="nb-instructor-label">👩‍🔬 Instructora</div>
            <p>Estos son los materiales que utilizarás durante la extracción de ADN. Familiarízate con cada uno:</p>
        </div>
        <div class="materials-grid">${cards}</div>
    `;
}

// ─── Sub-step Progress ───
function renderSubstepProgress() {
    const phase = PHASES[currentPhase];
    const totalSteps = phase.steps.length;
    if (totalSteps <= 1) return;

    const progressId = phase.id + '-progress';
    const $progress = document.getElementById(progressId);
    if (!$progress) return;

    let dots = '';
    for (let i = 0; i < totalSteps; i++) {
        let cls = '';
        if (i < currentStep) cls = 'completed';
        else if (i === currentStep) cls = 'active';
        dots += `<div class="substep-dot ${cls}"></div>`;
    }
    $progress.innerHTML = dots;
}

// ─── Phase Tracker ───
function updatePhaseTracker() {
    $phaseItems.forEach((item, i) => {
        item.classList.remove('active', 'completed');
        if (i < currentPhase) item.classList.add('completed');
        else if (i === currentPhase) item.classList.add('active');
    });
}

// ─── Navigation ───
function nextStep() {
    const phase = PHASES[currentPhase];
    const step = phase.steps[currentStep];

    if (step.isFinal) {
        showScreen('complete');
        return;
    }

    if (currentStep < phase.steps.length - 1) {
        currentStep++;
    } else {
        currentPhase++;
        currentStep = 0;
    }

    renderStep();
}

function restartCurrentStep() {
    renderStep();
}

// ─── Safety Quiz ───
function toggleSafety(el) {
    if (safetyPassed) return;
    el.classList.toggle('selected');
}

function checkSafety() {
    if (safetyPassed) return;
    const options = document.querySelectorAll('.safety-option');
    let allCorrect = true;

    options.forEach(opt => {
        const isCorrect = opt.dataset.correct === 'true';
        const isSelected = opt.classList.contains('selected');

        opt.classList.remove('selected', 'correct', 'incorrect');

        if (isCorrect && isSelected) {
            opt.classList.add('correct');
        } else if (isCorrect && !isSelected) {
            opt.classList.add('incorrect');
            allCorrect = false;
        } else if (!isCorrect && isSelected) {
            opt.classList.add('incorrect');
            allCorrect = false;
        } else {
            opt.classList.add('correct');
        }
    });

    const $feedback = document.getElementById('safety-feedback');
    if (allCorrect) {
        safetyPassed = true;
        $feedback.innerHTML = '<div class="nb-success" style="margin-top:12px;">✅ ¡Correcto! Ya cumples con la vestimenta de seguridad. ¡Empecemos con la extracción!</div>';
        document.getElementById('btn-check-safety').classList.add('completed');
        document.getElementById('btn-check-safety').textContent = '✅ Vestimenta verificada';
        $btnNext.disabled = false;
    } else {
        $feedback.innerHTML = '<div class="nb-note" style="margin-top:12px;">❌ Revisa tu selección. Debes seleccionar todos los elementos correctos de seguridad.</div>';
        // Reset after delay
        setTimeout(() => {
            options.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
            $feedback.innerHTML = '';
        }, 2500);
    }
}

// ─── Action Buttons ───
function completeAction(btn) {
    btn.classList.add('completed');
    btn.textContent = '✅ ' + btn.textContent.replace(/^[^\s]+\s/, '');
    btn.onclick = null;

    // Show any feedback divs that are siblings
    const feedbacks = btn.parentElement.querySelectorAll('.nb-success[style*="display:none"]');
    feedbacks.forEach(f => f.style.display = 'block');

    $btnNext.disabled = false;
}

// ─── Blend Timer ───
function startBlendTimer(btn) {
    btn.classList.add('completed');
    btn.textContent = '✅ Licuadora encendida';
    btn.onclick = null;

    const $timer = document.getElementById('blend-timer');
    $timer.style.display = 'block';

    let seconds = 8; // Shortened for simulation
    const $countdown = document.getElementById('blend-countdown');

    const interval = setInterval(() => {
        seconds--;
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        $countdown.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        if (seconds <= 0) {
            clearInterval(interval);
            $countdown.textContent = '✅ ¡Listo!';
            $countdown.style.color = '#66bb6a';
            $btnNext.disabled = false;
        }
    }, 1000);
}

// ─── Rest Timer ───
function startRestTimer(btn) {
    btn.classList.add('completed');
    btn.textContent = '✅ Tiempo de reposo iniciado';
    btn.onclick = null;

    const $timer = document.getElementById('rest-timer');
    $timer.style.display = 'block';

    let seconds = 10; // Shortened for simulation
    const $countdown = document.getElementById('rest-countdown');

    const interval = setInterval(() => {
        seconds--;
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        $countdown.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        if (seconds <= 0) {
            clearInterval(interval);
            $countdown.textContent = '✅ ¡Listo!';
            $countdown.style.color = '#66bb6a';
            $btnNext.disabled = false;
        }
    }, 1000);
}

// ─── Materials Modal ───
function openMaterialsModal() {
    document.getElementById('materials-modal').classList.remove('hidden');
}

function closeMaterialsModal() {
    document.getElementById('materials-modal').classList.add('hidden');
}

// ─── Reset ───
function resetSimulation() {
    currentPhase = 0;
    currentStep = 0;
    safetyPassed = false;
    showScreen('welcome');
}
