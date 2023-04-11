//상품소개 스토어

import { defineStore } from "pinia";

export const useCatesStore = defineStore('cates', () => {
    const upperPath = '/temp/'

    //리스트

    const cateList = ref([
        {
            url: '/cate01/',
            children: [
                {
                    number: '0',
                    thumImg: `${upperPath}images/cate/img03.jpg`,
                    title: '고무링삽입형 VR관',
                    subTitle: '서브타이틀인데 있을수도 길수도 짧을수도있음 변수에 대응',
                }
            ]
        }
    ])

    //상세페이지

    const cateGroup = ref([

        {
            number: '0',
            site: 'AP신문',
            title: ' 고무링삽입형 VR관',
            date: '2023.03.15',
            thumImg: `${upperPath}images/cate/img03.jpg`,
            floor: `${upperPath}images/cate/floor01.jpg`,
            table: `${upperPath}images/cate/table.png`,
            textAll: [
                    {texts: '- 지상으로 돌출되는 부분을 최소화'},
                    {texts: '- 자전거전용도로 설치를 위한 공간 확보.'},
                    {texts: '- 인도의 공간 확보.'},
                    {texts: '- 소켓부에 매입된 고무링은 관로의 수밀에 대하여 공학적으로 설계되어 여러 단계로 최대한 누수를 방지하며 불가피한 각도조정에도 수밀성이 우수하며, 관 부설 후 접합부에 별도의 몰탈마감이 필요하지 않는다.'},
                ]
        },

    ])

    
    return { cateList, cateGroup }

})