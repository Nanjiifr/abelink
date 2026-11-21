// Données 100 % fictives : aucune personne réelle. Pas de backend pour l'instant.
export const scenarios = [
  {
    query: 'Je cherche un stage de césure dans une boîte qui travaille dans l’énergie',
    keys: ['energie', 'cesure', 'solaire', 'nucleaire', 'renouvelable'],
    parse: 'Stage de césure · secteur de l’énergie',
    count: 1842,
    chips: ['TotalEnergies', 'EDF', 'Engie', 'Schneider Electric', 'Qair'],
    alumni: '37 alumni travaillent dans ces entreprises',
    exp: '5 ont déjà accueilli un stagiaire en césure',
    final: 'J’ai trouvé 3 chemins. Voici le plus court : 3 liens jusqu’à Julien Morel, qui a déjà pris deux étudiants en césure.',
    target: {
      name: 'Julien Morel',
      meta: 'Responsable développement · Engie · Promo 2014',
      shortMeta: 'Engie · Promo 2014',
    },
    path: [
      { name: 'Hugo Marchand', meta: 'Promo 2023 · Ingénieur, EDF', why: 'Même club Énergie que vous' },
      { name: 'Léa Benoit', meta: 'Promo 2018 · Chargée de projet, Engie', why: 'Ancienne présidente du club Énergie' },
    ],
    last: 'A déjà encadré deux césures',
    alts: [
      ['Via Yanis Cohen', 'Promo 2020 · TotalEnergies'],
      ['Via Sarah Meyer', 'Promo 2014 · mentore du programme de mentorat'],
    ],
    plan: [
      ['Aujourd’hui', 'Écrivez à Hugo : vous partagez le club Énergie, il répondra.'],
      ['Sous 3 jours', 'Demandez-lui de vous présenter Léa, qui connaît bien Julien.'],
      ['Sous 7 jours', 'Léa vous introduit auprès de Julien : proposez 20 minutes pour parler de la césure.'],
    ],
    message:
      'Bonjour Hugo, je suis en 2A et membre du club Énergie comme vous. Je cherche un stage de césure dans l’énergie. Accepteriez-vous de me mettre en relation avec Léa Benoit ? Merci beaucoup !',
  },
  {
    query: 'Je veux échanger avec un product manager dans la santé',
    keys: ['product', 'produit', 'pm', 'doctolib', 'sante', 'healthtech'],
    parse: 'Échange avec un product manager · secteur de la santé',
    count: 964,
    chips: ['Doctolib', 'Alan', 'Qare', 'Withings'],
    alumni: '22 alumni travaillent dans ces entreprises',
    exp: '4 ont suivi le même parcours que vous',
    final: 'J’ai trouvé 3 chemins. Voici le plus court : 3 liens jusqu’à Claire Fontaine.',
    target: {
      name: 'Claire Fontaine',
      meta: 'Product Manager · Doctolib · Promo 2016',
      shortMeta: 'Doctolib · Promo 2016',
    },
    path: [
      { name: 'Hugo Marchand', meta: 'Promo 2023 · Data Scientist', why: 'Même Data Club que vous' },
      { name: 'Léa Benoit', meta: 'Promo 2018 · Alan', why: 'Ancienne présidente du Data Club' },
    ],
    last: 'Ancienne collègue de Léa chez Alan',
    alts: [
      ['Via Yanis Cohen', 'Promo 2020 · Doctolib'],
      ['Via Sarah Meyer', 'Promo 2014 · mentore du programme de mentorat'],
    ],
    plan: [
      ['Aujourd’hui', 'Écrivez à Hugo : vous partagez le Data Club, il répondra.'],
      ['Sous 3 jours', 'Demandez-lui de vous présenter Léa, qui connaît Claire.'],
      ['Sous 7 jours', 'Léa vous introduit auprès de Claire : proposez 20 minutes.'],
    ],
    message:
      'Bonjour Hugo, je suis en 2A et membre du Data Club comme vous. Je m’intéresse au métier de product manager en santé. Accepteriez-vous de me mettre en relation avec Léa Benoit ? Merci beaucoup !',
  },
  {
    query: 'Je voudrais comprendre le métier de quant dans une banque d’investissement',
    keys: ['quant', 'finance', 'banque', 'trading', 'marches'],
    parse: 'Découverte du métier · quant en banque d’investissement',
    count: 1310,
    chips: ['BNP Paribas', 'Société Générale', 'Natixis', 'Amundi'],
    alumni: '29 alumni travaillent dans ces entreprises',
    exp: '6 occupent ou ont occupé un poste de quant',
    final: 'J’ai trouvé 3 chemins. Voici le plus court : 3 liens jusqu’à Sofia Lambert.',
    target: {
      name: 'Sofia Lambert',
      meta: 'Quantitative Analyst · Promo 2015',
      shortMeta: 'BNP Paribas · Promo 2015',
    },
    path: [
      { name: 'Maxime Girard', meta: 'Promo 2021 · Analyste', why: 'Ancien du club Finance' },
      { name: 'Élise Fournier', meta: 'Promo 2016 · Risques', why: 'Camarade de promo de Sofia' },
    ],
    last: 'Camarade de promo d’Élise',
    alts: [
      ['Via Karim Haddad', 'Promo 2018 · desk actions'],
      ['Via la conférence annuelle Finance', 'Réseau alumni Finance'],
    ],
    plan: [
      ['Aujourd’hui', 'Écrivez à Maxime : il a suivi le même chemin que vous.'],
      ['Sous 3 jours', 'Il vous introduit à Élise, qui connaît bien Sofia.'],
      ['Sous 7 jours', 'Élise vous met en contact : préparez deux questions sur le métier.'],
    ],
    message:
      'Bonjour Maxime, je suis du club Finance et j’explore les métiers quant. Pourriez-vous me présenter Élise Fournier ? Merci d’avance pour votre aide.',
  },
  {
    query: 'Je veux lancer ma startup dans la fintech, qui peut m’aider ?',
    keys: ['fondateur', 'fintech', 'startup', 'entrepreneur', 'creer', 'lancer', 'levee'],
    parse: 'Lancement de startup · secteur de la fintech',
    count: 1127,
    chips: ['Qonto', 'Lydia', 'Swile', 'Alan'],
    alumni: '18 alumni ont fondé ou rejoint une fintech',
    exp: '3 ont levé des fonds et accompagnent des étudiants',
    final: 'J’ai trouvé 3 chemins. Voici le plus court : 3 liens jusqu’à Thomas Aubry.',
    target: {
      name: 'Thomas Aubry',
      meta: 'Cofondateur · Fintech · Promo 2012',
      shortMeta: 'Fintech · Promo 2012',
    },
    path: [
      { name: 'Anaïs Colin', meta: 'Promo 2024 · Incubateur', why: 'Même incubateur étudiant' },
      { name: 'Romain Petit', meta: 'Promo 2015 · Fondateur', why: 'Mentor de l’incubateur' },
    ],
    last: 'Premier investisseur de Thomas',
    alts: [
      ['Via Inès Mercier', 'Promo 2019 · Business Angel'],
      ['Via la soirée Entrepreneurs', 'Club Entrepreneuriat'],
    ],
    plan: [
      ['Aujourd’hui', 'Parlez à Anaïs de votre projet, elle connaît l’écosystème.'],
      ['Sous 3 jours', 'Elle vous présente Romain, mentor de l’incubateur.'],
      ['Sous 7 jours', 'Romain vous met en relation avec Thomas.'],
    ],
    message:
      'Bonjour Anaïs, je lance un projet dans la fintech et j’aimerais échanger avec un fondateur du réseau. Pourriez-vous me présenter Romain Petit ? Merci !',
  },
]

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Mots-clés simples : au moins 1 clé trouvée, sinon exemple le plus proche = premier.
export function match(query) {
  const q = norm(query)
  let best = scenarios[0], bestScore = 0
  for (const s of scenarios) {
    const score = s.keys.filter((k) => q.includes(k)).length
    if (score > bestScore) { best = s; bestScore = score }
  }
  return { scenario: best, exact: bestScore > 0 }
}

export const initials = (name) =>
  name.split(' ').map((w) => w[0]).slice(0, 2).join('')
