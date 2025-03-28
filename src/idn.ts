import type { Members, Officials } from './accounts.types';

export type IdnAccount = {
    username: string;
    uuid: string;
    name: string;
    defaultStreamUrl?: string;
};

export type ActiveOfficialsIdn = Extract<Officials, 'jkt48' | 'jkt48-trainee'>;
export type ActiveMembersIdn = Members;

export const officialsIdn: Record<ActiveOfficialsIdn, Readonly<IdnAccount>> = {
    //#region Official
    jkt48: {
        username: 'jkt48-official',
        uuid: '50a27780-93e7-4e40-8474-60f6e0cca6da',
        name: 'JKT48',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.4idUspKIZskG.m3u8',
        /* defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.1s3sSrncQ8Ch.m3u8', */
    },
    'jkt48-trainee': {
        username: 'jkt_x2abfdrhqc67tl',
        uuid: '90967b93-4c13-4128-8294-a4f8612b109f',
        name: 'JKT48 Trainee',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.VgvCGVpwb3hO.m3u8',
    },
    //#endregion
} as const;

export const membersIdn: Record<ActiveMembersIdn, Readonly<IdnAccount>> = {
    //#region Members
    amanda: {
        username: 'jkt48_amanda',
        uuid: 'e8aa0877-684a-4430-8a3b-d96302e53aab',
        name: 'Amanda',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.08vLei7g32Nv.m3u8',
    },
    christy: {
        username: 'jkt48_christy',
        uuid: '01506e57-d837-4a1e-8dd4-3e99e3489ac8',
        name: 'Christy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.R4bPsdzRonL3.m3u8',
    },
    eli: {
        username: 'jkt48_eli',
        uuid: '1f119aa1-3482-44b6-9f68-2ad41c8d6743',
        name: 'Eli',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.809zi18MGuB1.m3u8',
    },
    ella: {
        username: 'jkt48_ella',
        uuid: 'b0d1e6c3-d356-4b00-8d00-846e5297693b',
        name: 'Ella',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.BDGTjOuDMTDH.m3u8',
    },
    feni: {
        username: 'jkt48_feni',
        uuid: '13f4d35d-f3a7-482e-a593-91d664c7ffcc',
        name: 'Feni',
        defaultStreamUrl: undefined,
    },
    fiony: {
        username: 'jkt48_fiony',
        uuid: '85482779-8b59-4995-a600-f8a4230c29d8',
        name: 'Fiony',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.oDOImnzzGyk8.m3u8',
    },
    freya: {
        username: 'jkt48_freya',
        uuid: '12addeb8-6ec5-4cea-a3b4-ad86e9bfc8d1',
        name: 'Freya',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.eCTljQvrMYaf.m3u8',
    },
    gita: {
        username: 'jkt48_gita',
        uuid: '82ffac10-ee56-43d0-ad38-ce432384cfe5',
        name: 'Gita',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.k4fAFOYXENlG.m3u8',
    },
    gracia: {
        username: 'jkt48_gracia',
        uuid: 'ffbdaf60-9c8c-4897-82ef-fc3e7f6deb9c',
        name: 'Gracia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.jnOMRcM1CNz3.m3u8',
    },
    indah: {
        username: 'jkt48_indah',
        uuid: '539f5185-1414-416c-b84d-2ad366b6d60a',
        name: 'Indah',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.oKpAUHJSe6RM.m3u8',
    },
    indira: {
        username: 'jkt48_indira',
        uuid: '101e8521-4f90-4b0e-9bff-fc4d1923e82d',
        name: 'Indira',
        /* defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.O6aLPrWLhBTe.m3u8', */
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.TkI4nJ4EI48J.m3u8',
    },
    jessi: {
        username: 'jkt48_jessi',
        uuid: 'a9579a29-9203-40c0-9326-9837b8eae6e8',
        name: 'Jessi',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.726SnUjvlfRJ.m3u8',
    },
    kathrina: {
        username: 'jkt48_kathrina',
        uuid: 'c3d28bcd-d000-4ccc-a9bf-956853cfa433',
        name: 'Kathrina',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.a4Aq6zWq9xBO.m3u8',
    },
    lia: {
        username: 'jkt48_lia',
        uuid: '15dfee86-a928-4a15-8c90-6aa21097d0ff',
        name: 'Lia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.ZEhAbERTyvxy.m3u8',
    },
    lulu: {
        username: 'jkt48_lulu',
        uuid: '531d1bc0-ee91-475f-9e9d-098127b8d383',
        name: 'Lulu',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.LuflGrysVdSz.m3u8',
    },
    lyn: {
        username: 'jkt48_lyn',
        uuid: '73aa1a4d-7482-41be-b28e-25e0b6c7b967',
        name: 'Lyn',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.YMhzlmrLe7tw.m3u8',
    },
    marsha: {
        username: 'jkt48_marsha',
        uuid: 'e27569d2-0d2a-4cd8-a0a6-ca2da28e0a62',
        name: 'Marsha',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.sSKNwImoM3zD.m3u8',
    },
    muthe: {
        username: 'jkt48_muthe',
        uuid: '9f308a8f-29cb-45c0-9df2-6ffd16bc9298',
        name: 'Muthe',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.sm9AmQPkGDGS.m3u8',
    },
    olla: {
        username: 'jkt48_olla',
        uuid: '9c32c2bc-f74e-4420-8be8-f4ac863b8064',
        name: 'Olla',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.QGp4Op9dfxOA.m3u8',
    },
    oniel: {
        username: 'jkt48_oniel',
        uuid: '0078fe3c-8f4d-495b-bb7c-bdb2b98d0598',
        name: 'Oniel',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.KGbEli9xlInK.m3u8',
    },
    raisha: {
        username: 'jkt48_raisha',
        uuid: '728d224e-6ccb-43d2-a029-a0147dc7fdee',
        name: 'Raisha',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.rjVZYmbffgGE.m3u8',
    },
    //#endregion

    //#region Gen 11
    alya: {
        username: 'jkt48_alya',
        uuid: '74e76417-0353-487f-b9b7-7520c0398e87',
        name: 'Alya',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.sLZkhRvMutd4.m3u8',
    },
    anindya: {
        username: 'jkt48_anindya',
        uuid: 'a5c72141-65a3-47be-86ef-1dc1feaab10d',
        name: 'Anindya',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.r1IZpJ0puDJi.m3u8',
    },
    cathy: {
        username: 'jkt48_cathy',
        uuid: 'f740e9da-772f-4ae2-8ddd-49f717aacf63',
        name: 'Cathy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.Q0uEvM6Dl951.m3u8',
    },
    chelsea: {
        username: 'jkt48_chelsea',
        uuid: '7e9a83b8-4fd8-42ad-b4b6-54c00fbbe28d',
        name: 'Chelsea',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.o3XoGdLr8Ejd.m3u8',
    },
    cynthia: {
        username: 'jkt48_cynthia',
        uuid: '4f795073-38c9-4df7-9388-74b83de69801',
        name: 'Cynthia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.UVu6FmzsZAuY.m3u8',
    },
    daisy: {
        username: 'jkt48_daisy',
        uuid: 'b11b0692-d0b8-464c-849a-9e81439a048c',
        name: 'Daisy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.tk9WxdsYj8NE.m3u8',
    },
    danella: {
        username: 'jkt48_danella',
        uuid: '33139b05-1c43-4b48-bba3-ec960b18b36e',
        name: 'Danella',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.1TQqlwWPwce5.m3u8',
    },
    elin: {
        username: 'jkt48_elin',
        uuid: 'e0ececb4-71d8-4f32-a221-ef21634a746a',
        name: 'Elin',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.OHdxDVm8kOqf.m3u8',
    },
    gendis: {
        username: 'jkt48_gendis',
        uuid: 'ab901d82-db49-488c-8d03-da0082ab70e2',
        name: 'Gendis',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.pIypkyH1I3k7.m3u8',
    },
    gracie: {
        username: 'jkt48_gracie',
        uuid: 'cae4d972-5f14-4512-9706-37c1802a0541',
        name: 'Gracie',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.ztIO0UisaA3P.m3u8',
    },
    greesel: {
        username: 'jkt48_greesel',
        uuid: '0b6b1a63-a0d6-4f4b-be5a-563a63fe279e',
        name: 'Greesel',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.z3nXSqOvE9Fs.m3u8',
    },
    michie: {
        username: 'jkt48_michie',
        uuid: '6970e68a-b488-497a-b793-3a735db5e997',
        name: 'Michie',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.uE0Cu8MD1aMc.m3u8',
    },
    //#endregion

    //#region Gen 12
    aralie: {
        username: 'jkt48_aralie',
        uuid: 'f001ba66-3c51-4849-9afa-13cf74eb1571',
        name: 'Aralie',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.oxXRFBYUK9HN.m3u8',
    },
    delynn: {
        username: 'jkt48_delynn',
        uuid: '266ef38a-da00-4d13-ba77-f94da68599ee',
        name: 'Delynn',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.5j4KMiUb4eXE.m3u8',
    },
    erine: {
        username: 'jkt48_erine',
        uuid: 'b0e628c8-0b0a-40c7-aa6a-a1c7660c25ce',
        name: 'Erine',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.0nMPtjEVo1Ds.m3u8',
    },
    fritzy: {
        username: 'jkt48_fritzy',
        uuid: '717109e0-a064-4f15-8187-5c4d46e56a58',
        name: 'Fritzy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8',
    },
    kimmy: {
        username: 'jkt48_kimmy',
        uuid: '52c5c190-3611-4def-866f-76c32c0b837e',
        name: 'Kimmy',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.W14pFXX17Z2c.m3u8',
    },
    lana: {
        username: 'jkt48_lana',
        uuid: 'e2af7271-2598-4ee8-8760-68043e671e6d',
        name: 'Lana',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.XcUYof208I6e.m3u8',
    },
    levi: {
        username: 'jkt48_levi',
        uuid: '35d8f1d5-fd07-4109-9ec5-d202f4baf3c1',
        name: 'Levi',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.Lci1odh0sCZU.m3u8',
    },
    lily: {
        username: 'jkt48_lily',
        uuid: 'e25cfed0-757c-424a-9b6e-85d4ef5b5192',
        name: 'Lily',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.4hPWCxNDO8aY.m3u8',
    },
    moreen: {
        username: 'jkt48_moreen',
        uuid: '3c9d4708-d690-40eb-b4e9-d2caf7a7476b',
        name: 'Moreen',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.vlBEUnBNQ5U4.m3u8',
    },
    nachia: {
        username: 'jkt48_nachia',
        uuid: '21a420b0-dd01-4daa-b185-b9020f8bf69d',
        name: 'Nachia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.zVh5JKAAtDUC.m3u8',
    },
    nala: {
        username: 'jkt48_nala',
        uuid: '8fc7ad64-f7be-492b-97b6-2dae3378dfe2',
        name: 'Nala',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.nCPKiODqPEOs.m3u8',
    },
    nayla: {
        username: 'jkt48_nayla',
        uuid: 'e243be19-74b7-435b-8e19-13fc669e0224',
        name: 'Nayla',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.s29ur0XkIpE2.m3u8',
    },
    oline: {
        username: 'jkt48_oline',
        uuid: 'a2b5d818-475d-44ce-af52-e99526482aaf',
        name: 'Oline',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.gYN6fQPMCqs0.m3u8',
    },
    regie: {
        username: 'jkt48_regie',
        uuid: '29c6f427-a95f-4ba1-92bf-cb5f4a2b3b2d',
        name: 'Regie',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.8kRBloyHh3Uc.m3u8',
    },
    ribka: {
        username: 'jkt48_ribka',
        uuid: '3cbe26d9-ff3f-4985-bbe1-c4403908124a',
        name: 'Ribka',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.m6srSRt8fTY6.m3u8',
    },
    trisha: {
        username: 'jkt48_trisha',
        uuid: '92d66abb-0171-4a2b-a30d-37ad58359248',
        name: 'Trisha',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.GwR4g1NQnJzJ.m3u8',
    },
    //#endregion

    //#region Trainee Gen 13
    auwia: {
        username: 'jkt48_auwia',
        uuid: 'f9500eb4-9d6d-491d-a857-40ca6f862d61',
        name: 'Auwia',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.XliapIMZ7P2P.m3u8',
    },
    ekin: {
        username: 'jkt48_ekin',
        uuid: '85f369d7-6525-41c0-94b8-9a56686713eb',
        name: 'Ekin',
        defaultStreamUrl: undefined,
    },
    giaa: {
        username: 'jkt48_giaa',
        uuid: '3c97d6a6-6fc2-4e2b-b7f6-e94ebe9c3e93',
        name: 'Giaa',
        defaultStreamUrl: undefined,
    },
    intan: {
        username: 'jkt48_intan',
        uuid: 'cbc0bbe1-d6ea-4646-bfcf-24b3a642fa21',
        name: 'Intan',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.GEcz70BKlk0o.m3u8',
    },
    jemima: {
        username: 'jkt48_jemima',
        uuid: 'fe70498c-cb4c-4f98-9ad8-e0bd3fe2c453',
        name: 'Jemima',
        defaultStreamUrl: undefined,
    },
    maira: {
        username: 'jkt48_maira',
        uuid: '7599c984-c466-4962-8c5b-73c1d33d59d9',
        name: 'Maira',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.e39rcA4LMxwI.m3u8',
    },
    mikaela: {
        username: 'jkt48_mikaela',
        uuid: 'a557ba58-12d8-4260-bd50-9e5252ac71ef',
        name: 'Mikaela',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.948DSG1qwIJH.m3u8',
    },
    rilly: {
        username: 'jkt48_rilly',
        uuid: 'e9170998-f026-4186-bbc5-a17a3b5b2af1',
        name: 'Rilly',
        defaultStreamUrl: undefined,
    },
    virgi: {
        username: 'jkt48_virgi',
        uuid: '147e83c8-f3ac-4680-9141-2f518b4b7810',
        name: 'Virgi',
        defaultStreamUrl:
            'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.9DxiaFf6lSom.m3u8',
    },
    //#endregion
} as const;
