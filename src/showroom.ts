import { Members, Officials } from './accounts.types';

type ShowroomAccount = {
    roomId: number;
    roomKey: string;
    roomName: string;
};

type ActiveOfficials = Extract<Officials, 'jkt48'>;
type ActiveMembers = Members;

export const officialsShowroom: Record<
    ActiveOfficials,
    Readonly<ShowroomAccount>
> = {
    //#region Official
    jkt48: {
        roomId: 332503,
        roomKey: 'officialJKT48',
        roomName: 'JKT48 Official SHOWROOM',
    },
    //#endregion
} as const;

export const membersShowroom: Record<
    ActiveMembers,
    Readonly<ShowroomAccount>
> = {
    //#region Members
    adel: {
        roomId: 318239,
        roomKey: 'JKT48_Adel',
        roomName: 'Adel/アデル（JKT48）',
    },
    amanda: {
        roomId: 400710,
        roomKey: 'JKT48_Amanda',
        roomName: 'Amanda/アマンダ（JKT48）',
    },
    callie: {
        roomId: 400714,
        roomKey: 'JKT48_Callie',
        roomName: 'Callie /カリー（JKT48）',
    },
    christy: {
        roomId: 318112,
        roomKey: 'JKT48_Christy',
        roomName: 'Christy/クリスティー（JKT48）',
    },
    eli: {
        roomId: 318118,
        roomKey: 'JKT48_Eli',
        roomName: 'Eli/エリ（JKT48）',
    },
    ella: {
        roomId: 400715,
        roomKey: 'JKT48_Ella',
        roomName: 'Ella /エラ（JKT48）',
    },
    feni: {
        roomId: 317738,
        roomKey: 'JKT48_Feni',
        roomName: 'Feni/フェニ（JKT48）',
    },
    fiony: {
        roomId: 318223,
        roomKey: 'JKT48_Fiony',
        roomName: 'Fiony /フィオニー（JKT48）',
    },
    flora: {
        roomId: 318224,
        roomKey: 'JKT48_Flora',
        roomName: 'Flora/フロラ（JKT48）',
    },
    freya: {
        roomId: 318225,
        roomKey: 'JKT48_Freya',
        roomName: 'Freya/フレヤ（JKT48）',
    },
    gita: {
        roomId: 318117,
        roomKey: 'JKT48_Gita',
        roomName: 'Gita/ギタ（JKT48）',
    },
    gracia: {
        roomId: 318208,
        roomKey: 'JKT48_Gracia',
        roomName: 'Gracia/グラシア（JKT48）',
    },
    indah: {
        roomId: 318227,
        roomKey: 'JKT48_Indah',
        roomName: 'Indah/インダー（JKT48）',
    },
    indira: {
        roomId: 400716,
        roomKey: 'JKT48_Indira',
        roomName: 'Indira /インディラ（JKT48）',
    },
    jessi: {
        roomId: 318228,
        roomKey: 'JKT48_Jessi',
        roomName: 'Jessi/ジェシ（JKT48）',
    },
    kathrina: {
        roomId: 318230,
        roomKey: 'JKT48_Kathrina',
        roomName: 'Kathrina/カトリナ（JKT48）',
    },
    lia: {
        roomId: 400713,
        roomKey: 'JKT48_Lia',
        roomName: 'Lia /リア（JKT48）',
    },
    lulu: {
        roomId: 318232,
        roomKey: 'JKT48_Lulu',
        roomName: 'Lulu /ルル （JKT48）',
    },
    lyn: {
        roomId: 400717,
        roomKey: 'JKT48_Lyn',
        roomName: 'Lyn /リーン（JKT48）',
    },
    marsha: {
        roomId: 318233,
        roomKey: 'JKT48_Marsha',
        roomName: 'Marsha/マーシャ（JKT48）',
    },
    muthe: {
        roomId: 318204,
        roomKey: 'JKT48_Muthe',
        roomName: 'Muthe/ムテ（JKT48）',
    },
    olla: {
        roomId: 318222,
        roomKey: 'JKT48_Olla',
        roomName: 'Olla/オラ（JKT48）',
    },
    oniel: {
        roomId: 318218,
        roomKey: 'JKT48_Oniel',
        roomName: 'Oniel/オニエル（JKT48）',
    },
    raisha: {
        roomId: 400718,
        roomKey: 'JKT48_Raisha',
        roomName: 'Raisha /ライシャ（JKT48）',
    },
    shani: {
        roomId: 318207,
        roomKey: 'JKT48_Shani',
        roomName: 'Shani/シャニ（JKT48）',
    },
    zee: {
        roomId: 317727,
        roomKey: 'JKT48_Zee',
        roomName: 'Zee/ジー（JKT48）',
    },
    //#endregion

    //#region Gen 11
    alya: {
        roomId: 461451,
        roomKey: 'JKT48_Alya',
        roomName: 'Alya /アリア（JKT48）',
    },
    anindya: {
        roomId: 461452,
        roomKey: 'JKT48_Anindya',
        roomName: 'Anindya /アニンディア（JKT48）',
    },
    cathy: {
        roomId: 461454,
        roomKey: 'JKT48_Cathy',
        roomName: 'Cathy/キャシー（JKT48）',
    },
    chelsea: {
        roomId: 461458,
        roomKey: 'JKT48_Chelsea',
        roomName: 'Chelsea /チェルシー（JKT48）',
    },
    cynthia: {
        roomId: 461463,
        roomKey: 'JKT48_Cynthia',
        roomName: 'Cynthia /シンティア（JKT48）',
    },
    daisy: {
        roomId: 461465,
        roomKey: 'JKT48_Daisy',
        roomName: 'Daisy /デイシー（JKT48）',
    },
    danella: {
        roomId: 461466,
        roomKey: 'JKT48_Danella',
        roomName: 'Danella /ダネラ（JKT48）',
    },
    elin: {
        roomId: 461475,
        roomKey: 'JKT48_Elin',
        roomName: 'Elin /エリン（JKT48）',
    },
    gendis: {
        roomId: 461476,
        roomKey: 'JKT48_Gendis',
        roomName: 'Gendis /ゲンディス（JKT48）',
    },
    gracie: {
        roomId: 461478,
        roomKey: 'JKT48_Gracie',
        roomName: 'Gracie /グラシー（JKT48）',
    },
    greesel: {
        roomId: 461479,
        roomKey: 'JKT48_Greesel',
        roomName: 'Greesel /グリーセル（JKT48）',
    },
    jeane: {
        roomId: 461480,
        roomKey: 'JKT48_Jeane',
        roomName: 'Jeane /ジーン（JKT48）',
    },
    michie: {
        roomId: 461481,
        roomKey: 'JKT48_Michie',
        roomName: 'Michie /ミチー（JKT48）',
    },
    //#endregion

    //#region Gen 12
    aralie: {
        roomId: 509985,
        roomKey: 'JKT48_Aralie',
        roomName: 'Aralie / アラリー（JKT48）',
    },
    delynn: {
        roomId: 509992,
        roomKey: 'JKT48_Delynn',
        roomName: 'Delynn / デリンヌ（JKT48）',
    },
    erine: {
        roomId: 510000,
        roomKey: 'JKT48_Erine',
        roomName: 'Erine / エリン（JKT48）',
    },
    fritzy: {
        roomId: 510011,
        roomKey: 'JKT48_Fritzy',
        roomName: 'Fritzy / フリッツィー（JKT48）',
    },
    kimmy: {
        roomId: 510073,
        roomKey: 'JKT48_Kimmy',
        roomName: 'Kimmy / キミー（JKT48）',
    },
    lana: {
        roomId: 509997,
        roomKey: 'JKT48_Lana',
        roomName: 'Lana / ラナ（JKT48）',
    },
    levi: {
        roomId: 510016,
        roomKey: 'JKT48_Levi',
        roomName: 'Levi / レヴィ（JKT48）',
    },
    lily: {
        roomId: 510012,
        roomKey: 'JKT48_Lily',
        roomName: 'Lily / リリー（JKT48）',
    },
    moreen: {
        roomId: 510014,
        roomKey: 'JKT48_Moreen',
        roomName: 'Moreen / モリーン（JKT48）',
    },
    nachia: {
        roomId: 510065,
        roomKey: 'JKT48_Nachia',
        roomName: 'Nachia / ナチア（JKT48）',
    },
    nala: {
        roomId: 510071,
        roomKey: 'JKT48_Nala',
        roomName: 'Nala / ナラ（JKT48）',
    },
    nayla: {
        roomId: 510064,
        roomKey: 'JKT48_Nayla',
        roomName: 'Nayla / ナイラ（JKT48）',
    },
    oline: {
        roomId: 510067,
        roomKey: 'JKT48_OlineM',
        roomName: 'Oline / オリヌ（JKT48）',
    },
    regie: {
        roomId: 510068,
        roomKey: 'JKT48_Regie',
        roomName: 'Regie / レギー（JKT48）',
    },
    ribka: {
        roomId: 510070,
        roomKey: 'JKT48_Ribka',
        roomName: 'Ribka / リブカ（JKT48）',
    },
    shasa: {
        roomId: 509995,
        roomKey: 'JKT48_Shasa',
        roomName: 'Shasa / シャサ（JKT48）',
    },
    trisha: {
        roomId: 510013,
        roomKey: 'JKT48_Trisha',
        roomName: 'Trisha / トリシャ（JKT48）',
    },
    //#endregion
} as const;
