// 회사소개 전체

import { defineStore } from 'pinia'

export const useIntrosStore = defineStore('intros', () => {
    const upperPath = '/temp/'

    //개요

    const outlineGroup = ref([
        {
            outlineChildren: [
                {
                    outTitle: '"고객과의 신뢰를 기업 이념으로 세계적인 기술혁신을 통하여 항상 최고의 제품만을 생산할 것을 약속합니다."',
                    outTexts: [
                        { texts: '안녕하십니까? 저희 홈페이지를 찾아주신 고객님들을 진심으로 환영합니다.' },
                        { texts: '(주)CONCRETE는 1900년 설립 이래 차별화된 소재와 축적된 제조기술을 발판으로 xx 등 다양한 제품 개발로 시장을 선도하는 기업으로 거듭났습니다.' },
                        { texts: '(주)CONCRETE는 앞으로도 고객님들의 목소리에 귀 기울이며 업계를 선도하는 제품과 서비스로 다가설 것을 약속드리며 항상 최선으로 노력하는 모습 보여드리겠습니다.' },
                        { texts: '앞으로도 많은 애정과 관심 부탁드립니다.' },
                        { texts: '감사합니다.' },
                    ], 
                    outCEO: '대표이사 김벽돌',
                    outSign: `${upperPath}images/sign_example.png`
                }
            ],

            ideoChildren: [
                {
                    ideoTitle: '"현실에 만족하지 않고 앞서가는 기술력으로 세상에 기여한다"',
                    ideoSubT: '(주)CONCRETE는 지속가능한 성장을 위한 목표와 미래를 제시하여 사회와 고객에 지속적으로 기여할 것입니다.',
                    ideoFirst: [
                        { ideoNameEng: 'VISION', ideoName: '비전', ideoTexts: '미래를 선도하는 기술력' },
                    ],
                    ideoSecond: [
                        { ideoNameEng: 'COREVALUE', ideoName: '핵심가치', ideoTexts: '고객감동, 품질경영, 가치창조' },
                    ],
                    ideoThird: [
                        { ideoNameEng: 'PHILOSOPHY', ideoName: '기업이념', ideoTexts: '앞서가는 기술로 고객감동을 실현하고 생각하는 글로벌기업으로 성장해 나간다.' },
                    ]
                }
            ]
        }

    ])

    //연혁

    const hsGroup = ref([
        {
            hsIndex: 0,
            hsYear: 2023,
            childrens: [
                { hsItem: '유망중소기업 지정' },
                { hsItem: '철근콘크리트 수로관 의장등록' },
                { hsItem: '품질경영 공로상' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2022,
            childrens: [
                { hsItem: '명문 장수기업인 표창장 (중소기업중앙회)' },
                { hsItem: '품질경영실천 표창(산업자원부장관)' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2021,
            childrens: [
                { hsItem: 'KS인증 획득(97-08-050) (한국표준협회)' },
                { hsItem: '공장 신축 이전' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2020,
            childrens: [
                { hsItem: '철근 콘크리트 벤치플룸(2종, 3종) 생산가동' },
                { hsItem: '철근콘크리트 수로관 뚜껑 (실용신안 제0185598호)' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2019,
            childrens: [
                { hsItem: '단체표준표시 인증획득' },
                { hsItem: '(한국콘크리트 공업협동조합연합회, 이형수로관)' },
                { hsItem: '품질관리유공 도지사 표창' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2018,
            childrens: [
                { hsItem: 'NET인증-PE라이너관맨홀 (환경부)' },
                { hsItem: '대형옹벽블록 성형기 도입(이태리)' },
                { hsItem: '조달청 우수제품지정 (고무링삽입 VR관)' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2017,
            childrens: [
                { hsItem: '품질경쟁력 50대기업 선정 (산업자원부)' },
                { hsItem: '기술결쟁력 우수기업 선정(중소기업청)' },
                { hsItem: '단체표준표시인증-호안및옹벽블록' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2016,
            childrens: [
                { hsItem: 'KS인증(VR관, 맨홀, 경계블록)' },
                { hsItem: '철근콘크리트 (사각) 수로관 제조설비 도입' },
                { hsItem: '클린사업장 인증(한국산업안전보건공단)' }
            ]
        }
    ]);

    // 특허/인증

    const certGroup = ref([
        {
            certIndex: 0,
            cate: '인증서',
            certTtitle: '제품인증서',
            imgUrl: `${upperPath}images/20230411_1.png`,
            certNumber: '...',
            certDate: '2010-07-01',
            isView: false
        },
        {
            certIndex: 1,
            cate: '인증서',
            certTtitle: '한국산업규격 인증서',
            imgUrl: `${upperPath}images/20230411_2.png`,
            certNumber: '...',
            certDate: '2006-03-16',
            isView: false
        },
        {
            certIndex: 2,
            cate: '유망중소기업',
            certTtitle: '유망중소기업 지정서',
            imgUrl: `${upperPath}images/20230411_3.png`,
            certNumber: '11-55',
            certDate: '2011-06-01',
            isView: false
        },
        {
            certIndex: 3,
            cate: '기타',
            certTtitle: '특허증',
            imgUrl: `${upperPath}images/20230411_4.png`,
            certNumber: '10-0750565',
            certDate: '2007-05-13',
            isView: false
        },
        {
            certIndex: 4,
            cate: '기타',
            certTtitle: '특허증',
            imgUrl: `${upperPath}images/20230411_5.png`,
            certNumber: '10-0694841',
            certDate: '2007-04-07',
            isView: false
        },
        {
            certIndex: 5,
            cate: '등록증',
            certTtitle: '디자인등록증',
            imgUrl: `${upperPath}images/20230411_6.png`,
            certNumber: '30-0442843',
            certDate: '2007-03-05',
            isView: false
        }
    ])

    //오시는 길

    const pathGroup = ref([
        {
            indexs: 0,
            compName: [
                {compFirst: '(주)', compLast: '삼화기업'}
            ],
            sectionTitle: '본사',
            tel: '+82-61-755-6848',
            fax: '+82-61-755-6849',
            mail: '-',
            locate: '전남 순천시 서면 구랑실재길 133 (구상리 245)',
            publicTr: [
                { 
                    subway: [
                        { subwItem: '-' }
                    ], 
                    bus: [
                        { busItem: '신천지파크랜드방면 마륜 하차 / 도보 약 15분 ' },
                        { busItem: '구상마을입구방면 마륜 하차 / 도보 약 15분' }
                    ]  
                }
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5487607409304!2d127.5431871763837!3d34.99296587281716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e11fd80d0dbc9%3A0x7c83115ce2a28e76!2z7IK87ZmU6riw7JeF!5e0!3m2!1sko!2skr!4v1681198673035!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        },
        // {
        //     indexs: 1,
        //     compName: [
        //         {compFirst: '주식회사', compLast: '소나무정보기술'}
        //     ],
        //     sectionTitle: '개발센터',
        //     tel: '+82-51-714-0034',
        //     fax: '+82-31-920-6609',
        //     mail: 'support@pineit.co.kr',
        //     locate: '부산광역시 사상구 대동로 303 부산디지털밸리 1203호 (동의대학교 산학협력단)',
        //     publicTr: [
        //         { 
        //             subway: [
        //                 { subwItem: '신평 방면 승차 / 서면역에서 2호선(호포방면)으로 환승 / 동의대역 하차 / 동의대 순환버스' }
        //             ], 
        //             bus: [
        //                 { busItem: '가야로,서면 방면 승차 / 가야파출소 앞 하차 / 동의대 순환버스' },
        //                 { busItem: '59,61번(가야로방면)승차 / 가야파출소 앞 하차 / 동의대순환버스' }
        //             ]  
        //         }
        //     ],
        //     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.609751841863!2d129.03134551610918!3d35.1414109803238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb40a6cf031%3A0xf255b7423a881690!2zKOyjvCnshozrgpjrrLTsoJXrs7TquLDsiKA!5e0!3m2!1sko!2skr!4v1679979882979!5m2!1sko!2skr',
        // },
    ])


    return { outlineGroup, hsGroup, certGroup, pathGroup }

})