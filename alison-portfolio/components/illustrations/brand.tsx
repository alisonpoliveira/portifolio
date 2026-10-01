import { C, Check, Frame, Person, Phone, Plant, Star } from "./kit";

/** 01 — Desafio: do espaço de patrocínio ao ponto de contato com 500+ pessoas por etapa. */
export function BrandDesafio() {
  return (
    <Frame label="Ilustração: um estande aberto de patrocínio, com bandeirolas e corredores se aproximando para interagir com a marca.">
      <path d="M40 66Q240 20 440 66" fill="none" stroke={C.lilac} strokeWidth="3" />
      {[70, 120, 170, 220, 270, 320, 370, 410].map((x, i) => (
        <path key={x} d={`M${x} ${58 + Math.sin(i / 1.2) * 8}l9 22 9-22Z`} fill={[C.pink, C.yellow, C.mint, C.orange][i % 4]} />
      ))}
      <ellipse cx="240" cy="340" rx="190" ry="9" fill={C.deep} opacity="0.35" />
      {/* tenda */}
      <rect x="146" y="132" width="9" height="196" rx="4" fill={C.lilac} />
      <rect x="325" y="132" width="9" height="196" rx="4" fill={C.lilac} />
      <path d="M126 140L168 88h144l42 52Z" fill={C.cream} />
      <path d="M196 88h22l-14 52h-30Zm62 0h22l30 52h-30Z" fill={C.orange} opacity="0.9" />
      <path d="M126 140h228a19 19 0 0 1-38 0 19 19 0 0 1-38 0 19 19 0 0 1-38 0 19 19 0 0 1-38 0 19 19 0 0 1-38 0 19 19 0 0 1-38 0Z" fill={C.orange} />
      <circle cx="240" cy="112" r="16" fill={C.deep} />
      <Star x={240} y={112} r={9} fill={C.yellow} />
      {/* atendente dentro do estande */}
      <Person
        head={[240, 202]}
        hip={[240, 260]}
        top={C.mint}
        skin={C.skin[1]}
        hairStyle="long"
        arms={[[[210, 236], [196, 214]], [[270, 244], [282, 252]]]}
        legs={[[[236, 290], [236, 300]], [[246, 290], [246, 300]]]}
      />
      <rect x="168" y="248" width="144" height="80" rx="10" fill={C.cream} />
      <rect x="168" y="248" width="144" height="18" rx="9" fill={C.pink} />
      <rect x="190" y="282" width="100" height="8" rx="4" fill={C.deep} opacity="0.25" />
      <rect x="206" y="298" width="68" height="8" rx="4" fill={C.deep} opacity="0.15" />
      <circle cx="298" cy="236" r="6" fill={C.yellow} />
      <Person
        head={[72, 190]}
        hip={[76, 270]}
        top={C.coral}
        skin={C.skin[0]}
        hairStyle="bun"
        arms={[[[44, 226], [34, 190]], [[104, 244], [118, 262]]]}
        legs={[[[68, 304], [62, 334]], [[88, 304], [96, 334]]]}
      />
      <rect x="64" y="228" width="22" height="16" rx="3" fill={C.white} />
      <Person
        head={[414, 190]}
        hip={[410, 270]}
        top={C.yellow}
        pants={C.deep}
        skin={C.skin[2]}
        hairStyle="cap"
        hair={C.deep}
        arms={[[[388, 238], [366, 236]], [[438, 248], [450, 232]]]}
        legs={[[[402, 304], [398, 334]], [[422, 304], [430, 334]]]}
      />
      <rect x="400" y="228" width="22" height="16" rx="3" fill={C.white} />
    </Frame>
  );
}

/** 02 — Estratégia: "A conquista é sua" — pódio, medalha e linha de chegada. */
export function BrandEstrategia() {
  return (
    <Frame label="Ilustração: uma corredora no alto do pódio com medalha e braços para cima sob a faixa de chegada, comemorando a conquista pessoal.">
      <rect x="58" y="44" width="9" height="276" rx="4" fill={C.lilac} />
      <rect x="413" y="44" width="9" height="276" rx="4" fill={C.lilac} />
      <rect x="58" y="34" width="364" height="24" rx="6" fill={C.cream} />
      {Array.from({ length: 30 }).map((_, i) => (
        <rect key={i} x={62 + (i % 15) * 24} y={i < 15 ? 36 : 46} width="12" height="10" fill={C.deep} opacity={(i + Math.floor(i / 15)) % 2 ? 0 : 0.9} />
      ))}
      <ellipse cx="240" cy="334" rx="170" ry="8" fill={C.deep} opacity="0.35" />
      <rect x="190" y="236" width="100" height="84" rx="8" fill={C.orange} />
      <rect x="126" y="268" width="64" height="52" rx="8" fill={C.lilac} />
      <rect x="290" y="284" width="64" height="36" rx="8" fill={C.mint} />
      <Star x={240} y={278} r={16} fill={C.cream} />
      <Person
        head={[158, 192]}
        hip={[158, 238]}
        top={C.pink}
        skin={C.skin[3]}
        hairStyle="curly"
        arms={[[[134, 218], [122, 192]], [[180, 222], [190, 238]]]}
        legs={[[[154, 254], [152, 268]], [[168, 254], [170, 268]]]}
      />
      <Person
        head={[322, 208]}
        hip={[322, 252]}
        top={C.mint}
        skin={C.skin[1]}
        hairStyle="cap"
        hair={C.coral}
        arms={[[[300, 232], [292, 250]], [[348, 232], [358, 206]]]}
        legs={[[[318, 266], [316, 284]], [[330, 266], [332, 284]]]}
      />
      <Person
        head={[240, 122]}
        hip={[240, 186]}
        top={C.coral}
        skin={C.skin[0]}
        hairStyle="bun"
        arms={[[[210, 108], [196, 74]], [[270, 108], [284, 74]]]}
        legs={[[[232, 212], [228, 234]], [[250, 212], [254, 234]]]}
      />
      <path d="M234 154l-6 22h24l-6-22Z" fill={C.lilac} />
      <circle cx="240" cy="178" r="10" fill={C.yellow} />
      <Star x={240} y={178} r={6} fill={C.orange} />
      <Star x={118} y={110} r={11} fill={C.yellow} />
      <Star x={366} y={120} r={13} fill={C.pink} />
      <circle cx="92" cy="170" r="6" fill={C.mint} />
      <circle cx="396" cy="190" r="6" fill={C.yellow} />
    </Frame>
  );
}

/** 03 — Arquitetura: quatro etapas da jornada + 41 etapas de circuito. */
export function BrandArquitetura() {
  const st = [
    { x: 76, y: 96, c: C.mint },
    { x: 192, y: 62, c: C.lilac },
    { x: 308, y: 96, c: C.yellow },
    { x: 410, y: 62, c: C.orange },
  ];
  return (
    <Frame
      label="Ilustração: caminho com quatro estações (preparação, recuperação, conquista e captação) e uma pessoa se alongando ao lado de três placares: 33 provas noturnas, 6 diurnas e 2 meias-maratonas."
      blobPath="M40 190c-10-70 50-150 140-150s200 20 250 80 20 160-50 190-170 20-240 0S50 260 40 190Z"
    >
      <path d="M76 96Q134 40 192 62T308 96T410 62" fill="none" stroke={C.lilac} strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" />
      {st.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r="30" fill={s.c} />
      ))}
      {/* 1 tênis */}
      <path d="M62 104h26v-8l-10-6-8 6Z" fill={C.deep} />
      <rect x="62" y="104" width="26" height="5" rx="2.5" fill={C.white} />
      {/* 2 gota */}
      <path d="M192 44q16 20 16 30a16 16 0 0 1-32 0q0-10 16-30Z" fill={C.deep} />
      <path d="M186 74a6 6 0 0 0 6 6" stroke={C.lilac} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* 3 medalha */}
      <circle cx="308" cy="102" r="11" fill={C.deep} />
      <Star x={308} y={102} r={7} fill={C.yellow} />
      <path d="M298 76l10 14 10-14Z" fill={C.coral} />
      {/* 4 celular */}
      <rect x="400" y="46" width="20" height="32" rx="5" fill={C.deep} />
      <rect x="403" y="51" width="14" height="20" rx="2" fill={C.cream} />
      <Person
        head={[110, 196]}
        hip={[122, 262]}
        top={C.coral}
        skin={C.skin[2]}
        hairStyle="short"
        arms={[[[144, 226], [166, 206]], [[92, 226], [80, 204]]]}
        legs={[[[162, 282], [168, 326]], [[88, 298], [52, 322]]]}
      />
      <ellipse cx="110" cy="338" rx="70" ry="6" fill={C.deep} opacity="0.35" />
      {[
        { x: 218, c: C.mint, n: "33" },
        { x: 296, c: C.yellow, n: "6" },
        { x: 374, c: C.pink, n: "2" },
      ].map((t) => (
        <g key={t.n}>
          <rect x={t.x} y="200" width="68" height="116" rx="16" fill={C.cream} />
          <circle cx={t.x + 34} cy="232" r="16" fill={t.c} />
          <text x={t.x + 34} y="286" textAnchor="middle" fontSize="34" fontWeight="700" fill={C.deep} fontFamily="inherit">
            {t.n}
          </text>
          <rect x={t.x + 14} y="298" width="40" height="6" rx="3" fill={C.deep} opacity="0.25" />
        </g>
      ))}
      <path d="M257 223a10 10 0 1 0 0 18 8 8 0 0 1 0-18Z" fill={C.deep} />
      <circle cx="330" cy="232" r="6" fill={C.deep} />
      <path d="M330 220v-4M330 248v-4M318 232h-4M346 232h-4" stroke={C.deep} strokeWidth="3" strokeLinecap="round" />
      <circle cx="408" cy="236" r="7" fill={C.deep} />
      <path d="M402 224l6 6 6-6" stroke={C.coral} strokeWidth="4" strokeLinecap="round" fill="none" />
    </Frame>
  );
}

/** 04 — Diferencial: bicicleta geradora de energia + foto com tempo e pace. */
export function BrandDiferencial() {
  return (
    <Frame label="Ilustração: uma pessoa pedalando uma bicicleta que gera energia e acende uma lâmpada, ao lado de um quadro de foto personalizado com nome, tempo e pace.">
      <path d="M150 20v-8M118 32l-6-6M182 32l6-6M104 62h-8M196 62h8" stroke={C.yellow} strokeWidth="4" strokeLinecap="round" />
      <circle cx="150" cy="62" r="28" fill={C.yellow} />
      <rect x="138" y="88" width="24" height="14" rx="4" fill={C.lilac} />
      <path d="M144 62q6 12 6 20m6-20q-6 12-6 20" stroke={C.orange} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M150 102C230 130 236 230 196 288" fill="none" stroke={C.mint} strokeWidth="5" strokeLinecap="round" strokeDasharray="2 10" />
      <ellipse cx="116" cy="334" rx="96" ry="8" fill={C.deep} opacity="0.35" />
      <circle cx="52" cy="290" r="34" fill="none" stroke={C.lilac} strokeWidth="7" />
      <circle cx="180" cy="290" r="34" fill="none" stroke={C.lilac} strokeWidth="7" />
      <path d="M52 290L88 232H140L180 290M88 232L112 290L140 232" fill="none" stroke={C.orange} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 232l8-34M136 198h24" stroke={C.orange} strokeWidth="7" strokeLinecap="round" />
      <rect x="76" y="220" width="30" height="9" rx="4.5" fill={C.deep} />
      <Person
        head={[108, 150]}
        hip={[96, 216]}
        top={C.pink}
        skin={C.skin[1]}
        hairStyle="long"
        arms={[[[138, 180], [152, 200]], [[126, 190], [148, 202]]]}
        legs={[[[132, 240], [120, 288]], [[124, 256], [138, 290]]]}
      />
      {/* quadro de foto */}
      <g transform="rotate(4 365 170)">
        <rect x="288" y="52" width="156" height="240" rx="14" fill={C.cream} />
        <rect x="302" y="66" width="128" height="150" rx="8" fill={C.lilac} />
        <circle cx="366" cy="200" r="70" fill={C.pink} opacity="0.55" />
        <rect x="302" y="66" width="128" height="150" rx="8" fill="none" />
        <Person
          head={[366, 118]}
          hip={[366, 180]}
          top={C.orange}
          skin={C.skin[2]}
          hairStyle="short"
          arms={[[[338, 104], [326, 82]], [[394, 104], [406, 82]]]}
          legs={[[[360, 200], [358, 214]], [[374, 200], [376, 214]]]}
        />
        <circle cx="366" cy="150" r="8" fill={C.yellow} />
        <rect x="304" y="228" width="68" height="9" rx="4.5" fill={C.deep} />
        <rect x="304" y="246" width="40" height="8" rx="4" fill={C.deep} opacity="0.45" />
        <rect x="352" y="246" width="40" height="8" rx="4" fill={C.deep} opacity="0.45" />
        <circle cx="408" cy="244" r="10" fill={C.coral} />
        <rect x="304" y="266" width="120" height="6" rx="3" fill={C.deep} opacity="0.15" />
      </g>
      <Star x={452} y={60} r={12} fill={C.yellow} />
    </Frame>
  );
}

/** 05 — Leads: participação → cadastro → relacionamento. */
export function BrandLeads() {
  const qr = ["1110111", "1010101", "1110101", "0001000", "1101110", "0101011", "1110101"];
  return (
    <Frame label="Ilustração: pessoa recebendo um brinde, funil de captação com contatos entrando, e um celular com QR code e cadastro concluído.">
      <ellipse cx="240" cy="338" rx="200" ry="8" fill={C.deep} opacity="0.35" />
      <Person
        head={[70, 168]}
        hip={[74, 256]}
        top={C.mint}
        skin={C.skin[0]}
        hairStyle="curly"
        arms={[[[104, 226], [128, 238]], [[44, 226], [38, 262]]]}
        legs={[[[66, 298], [60, 330]], [[86, 298], [94, 330]]]}
      />
      <path d="M116 244h40l-4 44h-32Z" fill={C.pink} />
      <path d="M126 244q10-16 20 0" stroke={C.pink} strokeWidth="4" fill="none" />
      <Star x={136} y={266} r={7} fill={C.yellow} />
      {[
        [188, 42, C.yellow],
        [222, 26, C.mint],
        [252, 48, C.pink],
        [212, 70, C.orange],
      ].map(([x, y, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="10" fill={c as string} />
      ))}
      <path d="M176 96h104l-36 64v56l-32-14v-42Z" fill={C.lilac} />
      <ellipse cx="228" cy="96" rx="52" ry="9" fill={C.white} opacity="0.6" />
      <path d="M228 216v18" stroke={C.mint} strokeWidth="5" strokeLinecap="round" strokeDasharray="1 9" />
      <g>
        <ellipse cx="228" cy="296" rx="30" ry="9" fill={C.mint} />
        <path d="M198 252v44a30 9 0 0 0 60 0v-44Z" fill={C.mint} />
        <ellipse cx="228" cy="252" rx="30" ry="9" fill={C.white} opacity="0.6" />
      </g>
      <path d="M284 130h24" stroke={C.mint} strokeWidth="5" strokeLinecap="round" />
      <Phone x={318} y={46} w={130} h={252}>
        <rect x="334" y="78" width="98" height="98" rx="12" fill={C.white} />
        {qr.map((row, r) =>
          row.split("").map((v, c) =>
            v === "1" ? <rect key={`${r}-${c}`} x={341 + c * 12} y={85 + r * 12} width="11" height="11" rx="2" fill={C.deep} /> : null,
          ),
        )}
        <rect x="334" y="190" width="98" height="14" rx="7" fill={C.lilac} />
        <rect x="334" y="212" width="98" height="14" rx="7" fill={C.lilac} opacity="0.6" />
        <rect x="334" y="238" width="98" height="26" rx="13" fill={C.orange} />
        <Check x={410} y={251} r={9} />
      </Phone>
      <Star x={452} y={44} r={13} fill={C.yellow} />
      <Plant x={290} y={318} s={0.7} />
    </Frame>
  );
}
