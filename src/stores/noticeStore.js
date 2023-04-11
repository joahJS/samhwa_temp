//공지사항 스토어

import { defineStore } from 'pinia'

export const useNoticeStore = defineStore('notice', () => {
    const upperPath = '/temp/'

    //리스트
    const noticeList = ref([
        {
            url: '/notice/',
            children: [
                {
                    bindIndex:'0',
                    number: '1',
                    title: 'XXXX콘크리트 10주년 창립기념일',
                    date: '2023.03.27',
                },
                {
                    bindIndex:'1',
                    number: '2',
                    title: '홈페이지 단장!!',
                    date: '2023.03.01',
                },
            ]
        }
    ])

    //상세페이지
    const noticeGroup = ref([
        {
            number: '0',
            title: 'XXXX콘크리트 10주년 창립기념일',
            date: '2021.12.03',
            thumImg: `${upperPath}images/notice/img03.jpg`,
            textAll: [
               
                {texts: 'XXXX콘크리트 10주년 창립기념!!'},
                {texts: '즐거운 추억을 함께한 밤이 되었기를 바랍니다.'},
            ]
        },
        {
            number: '1',
            title: '홈페이지 단장!!',
            date: '2021.12.03',
            thumImg: `${upperPath}images/notice/img02.jpg`,
            textAll: [
                {texts: '새로운 홈페이지가 완성 되었습니다..'},
                {texts: '많은 관심 부탁드립니다.'},
            ]
        },

    ])

    return { noticeList, noticeGroup }
    
})


const upperPath = '/temp/'

    