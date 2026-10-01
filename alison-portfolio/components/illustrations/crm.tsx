import { C, Check, Cylinder, Frame, Notif, Person, Phone, Star } from "./kit";

/** 01 — Desafio: disparo massivo (igual para todos) → mensagem contextual. */
export function CrmDesafio() {
  return (
    <Frame label="Ilustração: uma pessoa com megafone dispara notificações iguais para todos, enquanto outra recebe uma notificação personalizada no celular.">
      <ellipse cx="95" cy="338" rx="70" ry="8" fill={C.deep} opacity="0.35" />
      <ellipse cx="425" cy="338" rx="40" ry="8" fill={C.deep} opacity="0.35" />
      <Person
        head={[88, 150]}
        hip={[95, 250]}
        top={C.coral}
        skin={C.skin[0]}
        hairStyle="bun"
        hair={C.deep}
        arms={[[[130, 196], [158, 172]], [[62, 218], [56, 256]]]}
        legs={[[[82, 296], [72, 330]], [[110, 296], [126, 330]]]}
      />
      {/* megafone */}
      <rect x="146" y="158" width="18" height="22" rx="5" fill={C.orange} />
      <path d="M160 160l50-28v76l-50-28Z" fill={C.yellow} />
      <ellipse cx="210" cy="170" rx="7" ry="38" fill={C.orange} />
      {/* disparos iguais, sem diferenciação */}
      <Notif x={226} y={112} w={70} color={C.lilac} dim />
      <Notif x={236} y={158} w={70} color={C.lilac} dim />
      <Notif x={226} y={204} w={70} color={C.lilac} dim />

      <Phone x={304} y={48} w={112} h={226}>
        <Notif x={314} y={84} w={92} color={C.orange} icon={C.yellow} />
        <Notif x={314} y={128} w={92} color={C.pink} />
        <Notif x={314} y={172} w={92} color={C.lilac} dim />
        <Check x={380} y={236} r={13} />
      </Phone>
      <Star x={428} y={66} r={14} />
      <Person
        head={[440, 150]}
        hip={[436, 254]}
        top={C.mint}
        skin={C.skin[2]}
        hairStyle="curly"
        arms={[[[404, 206], [388, 176]], [[462, 220], [466, 258]]]}
        legs={[[[428, 298], [424, 330]], [[448, 298], [454, 330]]]}
      />
    </Frame>
  );
}

/** 02 — Estratégia: várias bases → identidade única → perfil completo. */
export function CrmEstrategia() {
  const ys = [38, 108, 178, 248];
  const cols = [C.mint, C.yellow, C.pink, C.lilac];
  return (
    <Frame label="Ilustração: quatro bases de dados se conectam a uma identidade única, que forma um perfil completo do usuário.">
      {ys.map((y, i) => (
        <g key={y}>
          <Cylinder x={30} y={y} color={cols[i]} />
          <path
            d={`M90 ${y + 31}C150 ${y + 31} 150 150 192 150`}
            fill="none"
            stroke={C.lilac}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 10"
          />
        </g>
      ))}
      <circle cx="224" cy="150" r="34" fill={C.orange} />
      <circle cx="224" cy="142" r="11" fill={C.white} />
      <path d="M204 170q20-22 40 0" fill={C.white} />
      <path d="M260 150h36" stroke={C.mint} strokeWidth="5" strokeLinecap="round" />
      <rect x="300" y="58" width="150" height="186" rx="20" fill={C.cream} />
      <circle cx="342" cy="104" r="22" fill={C.skin[1]} />
      <path d="M322 100a20 20 0 0 1 40 0q-10-10-20-8t-20 8Z" fill={C.deep} />
      <rect x="376" y="92" width="56" height="8" rx="4" fill={C.deep} opacity="0.8" />
      <rect x="376" y="108" width="36" height="7" rx="3.5" fill={C.deep} opacity="0.35" />
      {[
        [316, 146, 54, C.mint],
        [378, 146, 56, C.yellow],
        [316, 174, 66, C.pink],
        [390, 174, 44, C.lilac],
        [316, 202, 48, C.orange],
        [372, 202, 62, C.mint],
      ].map(([x, y, w, f], i) => (
        <rect key={i} x={x as number} y={y as number} width={w as number} height="20" rx="10" fill={f as string} />
      ))}
      <Person
        head={[250, 262]}
        hip={[252, 312]}
        top={C.coral}
        skin={C.skin[3]}
        hairStyle="short"
        arms={[[[224, 250], [214, 214]], [[280, 296], [292, 318]]]}
        legs={[[[244, 332], [240, 348]], [[262, 332], [268, 348]]]}
      />
    </Frame>
  );
}

/** 03 — Arquitetura: oito etapas em escada, da fonte de dados à conversão. */
export function CrmArquitetura() {
  const cols = [C.lilac, C.mint, C.yellow, C.pink, C.orange, C.lilac, C.mint, C.orange];
  return (
    <Frame label="Ilustração: uma escada de oito degraus, de fontes de dados até conversão, com uma pessoa comemorando no topo com uma bandeira.">
      {cols.map((c, i) => {
        const h = 34 + i * 20;
        return <rect key={i} x={26 + i * 52} y={320 - h} width="46" height={h} rx="8" fill={c} />;
      })}
      <Cylinder x={29} y={236} w={40} h={46} color={C.white} />
      <Star x={417} y={176} r={14} fill={C.white} />
      <path d="M449 150V30" stroke={C.white} strokeWidth="4" strokeLinecap="round" />
      <path d="M449 32l-42 14 42 14Z" fill={C.coral} />
      <Person
        head={[420, 52]}
        hip={[420, 106]}
        top={C.coral}
        skin={C.skin[1]}
        hairStyle="long"
        arms={[[[444, 90], [449, 62]], [[394, 120], [380, 132]]]}
        legs={[[[412, 128], [408, 148]], [[430, 128], [434, 148]]]}
      />
    </Frame>
  );
}

/** 04 — Diferencial: comunicação relevante em quatro momentos da jornada do corredor. */
function Card({ x, y, color, children }: { x: number; y: number; color: string; children: React.ReactNode }) {
  return (
    <g>
      <rect x={x} y={y} width="116" height="58" rx="14" fill={C.cream} />
      <circle cx={x + 30} cy={y + 29} r="18" fill={color} />
      {children}
      <rect x={x + 56} y={y + 19} width="48" height="7" rx="3.5" fill={C.deep} opacity="0.8" />
      <rect x={x + 56} y={y + 32} width="32" height="6" rx="3" fill={C.deep} opacity="0.3" />
    </g>
  );
}

export function CrmJornada() {
  return (
    <Frame label="Ilustração: um corredor com celular na mão, cercado por quatro avisos: pré-evento, dia da prova, pós-evento e relacionamento contínuo.">
      <Card x={26} y={40} color={C.mint}>
        <rect x="47" y="60" width="18" height="17" rx="3" fill={C.deep} />
        <rect x="47" y="60" width="18" height="6" rx="2" fill={C.coral} />
      </Card>
      <Card x={338} y={40} color={C.yellow}>
        <path d="M358 54v30" stroke={C.deep} strokeWidth="3" strokeLinecap="round" />
        <path d="M359 54l16 6-16 7Z" fill={C.coral} />
      </Card>
      <Card x={26} y={258} color={C.pink}>
        <circle cx="56" cy="285" r="8" fill={C.yellow} />
        <path d="M51 292l-3 12 8-4 8 4-3-12Z" fill={C.coral} />
      </Card>
      <Card x={338} y={258} color={C.lilac}>
        <path
          d="M368 293c-14-8-14-20-5-20 4 0 5 3 5 3s1-3 5-3c9 0 9 12-5 20Z"
          fill={C.coral}
        />
      </Card>
      <path d="M90 100Q130 140 170 170M390 100Q350 140 310 170M90 258Q130 230 170 220M390 258Q350 230 310 220" stroke={C.lilac} strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1 9" fill="none" />
      <ellipse cx="238" cy="338" rx="70" ry="8" fill={C.deep} opacity="0.35" />
      {/* linhas de movimento */}
      <path d="M110 192h34M120 214h28M104 236h30" stroke={C.mint} strokeWidth="5" strokeLinecap="round" />
      <Person
        head={[238, 118]}
        hip={[222, 214]}
        top={C.orange}
        pants={C.deep}
        skin={C.skin[2]}
        hairStyle="cap"
        hair={C.coral}
        tilt={4}
        arms={[[[262, 172], [284, 146]], [[190, 176], [172, 200]]]}
        legs={[[[250, 246], [262, 294]], [[198, 252], [176, 292]]]}
      />
      <Phone x={284} y={96} w={34} h={56} rot={10} screen={C.mint} />
    </Frame>
  );
}

/** 05 — Governança: opt-in/opt-out, LGPD e ciclo de vida do usuário. */
export function CrmGovernanca() {
  const life: [string, string][] = [
    [C.mint, "Engajado"],
    [C.yellow, "Em risco"],
    [C.coral, "Desengajado"],
    [C.lilac, "Recuperado"],
  ];
  return (
    <Frame label="Ilustração: escudo com check representando LGPD, chaves de opt-in e opt-out e quatro estágios do ciclo de vida: engajado, em risco, desengajado e recuperado.">
      <rect x="26" y="76" width="82" height="38" rx="19" fill={C.mint} />
      <circle cx="89" cy="95" r="14" fill={C.white} />
      <rect x="26" y="130" width="82" height="38" rx="19" fill={C.night} stroke={C.lilac} strokeWidth="3" />
      <circle cx="45" cy="149" r="14" fill={C.lilac} />
      <path d="M150 36h160v118q0 56-80 86-80-30-80-86Z" fill={C.lilac} />
      <path d="M150 36h160v20H150Z" fill={C.white} opacity="0.25" />
      <circle cx="230" cy="124" r="42" fill={C.cream} />
      <path d="M208 124l16 17 30-34" stroke={C.deep} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="118" y="196" width="42" height="34" rx="8" fill={C.yellow} />
      <path d="M126 196v-10a13 13 0 0 1 26 0v10" stroke={C.yellow} strokeWidth="6" fill="none" />
      <circle cx="139" cy="213" r="5" fill={C.deep} />
      <Person
        head={[408, 168]}
        hip={[406, 262]}
        top={C.pink}
        skin={C.skin[0]}
        hairStyle="curly"
        hair={C.deep}
        arms={[[[370, 226], [334, 196]], [[436, 238], [442, 270]]]}
        legs={[[[398, 306], [394, 336]], [[418, 306], [424, 336]]]}
      />
      {life.map(([c], i) => (
        <g key={i}>
          <circle cx={56 + i * 76} cy="300" r="20" fill={c} />
          <circle cx={56 + i * 76} cy="294" r="6" fill={C.deep} />
          <path d={`M${44 + i * 76} 312q12-14 24 0`} fill={C.deep} />
          {i < 3 && <path d={`M${80 + i * 76} 300h30m-7-6l7 6-7 6`} stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
        </g>
      ))}
    </Frame>
  );
}
