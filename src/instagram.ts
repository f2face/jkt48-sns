import type { Members, Officials } from './accounts.types';

type InstagramAccount = {
    id: string;
    username: string;
};

type ActiveOfficials = Exclude<Officials, 'jkt48-cs' | 'jkt48-trainee'>;
type ActiveMembers = Exclude<
    Members,
    | 'auwia'
    | 'ekin'
    | 'giaa'
    | 'intan'
    | 'jemima'
    | 'maira'
    | 'mikaela'
    | 'rilly'
    | 'virgi'
>;

export const officialsInstagram: Record<
    ActiveOfficials,
    Readonly<InstagramAccount>
> = {
    // Official
    jkt48: { id: '3082798080', username: 'jkt48' },
    'jkt48-merch': { id: '4775538769', username: 'jkt48mrch' },
} as const;

export const membersInstagram: Record<
    ActiveMembers,
    Readonly<InstagramAccount>
> = {
    // Members
    amanda: { id: '51673997280', username: 'jkt48.amanda.s' },
    christy: { id: '9145176000', username: 'jkt48.christy' },
    eli: { id: '8971446779', username: 'jkt48.eli' },
    ella: { id: '51296391646', username: 'jkt48.ella.a' },
    feni: { id: '3079024445', username: 'jkt48feni' },
    fiony: { id: '14997520514', username: 'jkt48.fiony' },
    freya: { id: '9884975657', username: 'jkt48.freya' },
    gita: { id: '7950862752', username: 'jkt48gita' },
    indah: { id: '28733660397', username: 'jkt48indah_' },
    jessi: { id: '10672013127', username: 'jkt48.jessi' },
    kathrina: { id: '28942049294', username: 'jkt48.kathrina' },
    lia: { id: '51662869963', username: 'jkt48.aurellia_' },
    lulu: { id: '14742425077', username: 'jkt48.lulu' },
    lyn: { id: '51306804718', username: 'jkt48.lyn.s' },
    marsha: { id: '29112442650', username: 'jkt48.marsha' },
    muthe: { id: '8792364019', username: 'jkt48.muthe_' },
    olla: { id: '10113792466', username: 'jkt48.olla' },
    oniel: { id: '14671615574', username: 'jkt48.oniel' },
    raisha: { id: '51292071924', username: 'jkt48.raisha.s' },

    // Gen 11
    alya: { id: '56089447105', username: 'jkt48.alya_' },
    anindya: { id: '56472271647', username: 'jkt48.anindya_' },
    cathy: { id: '56437909652', username: 'jkt48.cathy' },
    chelsea: { id: '60806566287', username: 'jkt48.chelsea.d' },
    cynthia: { id: '56463179512', username: 'jkt48.cynthia' },
    daisy: { id: '56468714778', username: 'jkt48.daisy' },
    danella: { id: '56436245861', username: 'jkt48.danella' },
    elin: { id: '56084727697', username: 'jkt48.elin_' },
    gendis: { id: '56135666678', username: 'jkt48.gendis' },
    gracie: { id: '56427487233', username: 'jkt48.gracie' },
    greesel: { id: '56428863043', username: 'jkt48.greesel' },
    michie: { id: '56513469431', username: 'jkt48.michie_' },

    // Gen 12
    aralie: { id: '62379322098', username: 'jkt48.aralie' },
    delynn: { id: '62839331181', username: 'jkt48.delynn' },
    erine: { id: '62837867436', username: 'jkt48.erine' },
    fritzy: { id: '62793959585', username: 'jkt48.fritzy.r' },
    kimmy: { id: '62971997401', username: 'jkt48.kimmy' },
    lana: { id: '62789927836', username: 'jkt48.lana.a' },
    levi: { id: '62975221284', username: 'jkt48.levi' },
    lily: { id: '62798039169', username: 'jkt48.lily_' },
    nachia: { id: '62954143386', username: 'jkt48.nachia.t' },
    nala: { id: '63367504599', username: 'jkt48.nala' },
    nayla: { id: '62967333855', username: 'jkt48.nayla.s' },
    oline: { id: '63140775119', username: 'jkt48.oline' },
    ribka: { id: '62846082488', username: 'jkt48.ribka' },
    trisha: { id: '63369176393', username: 'jkt48.trisha' },

    // Gen 13
    // auwia: { id: '', username: ' ' },
    // ekin: { id: '', username: ' ' },
    // giaa: { id: '', username: ' ' },
    // intan: { id: '', username: ' ' },
    // jemima: { id: '', username: ' ' },
    // maira: { id: '', username: ' ' },
    // mikaela: { id: '', username: ' ' },
    // rilly: { id: '', username: ' ' },
    // virgi: { id: '', username: ' ' },
} as const;
