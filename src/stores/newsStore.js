//보도자료 스토어

import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
    const upperPath = '/temp/'

    //리스트
    const newsList = ref([
        {
            url: '/news/',
            children: [
                {
                    number: '0',
                    thumImg: `${upperPath}images/news/news02.jpg`,
                    site: '연합뉴스',
                    title: '삼표, 일본보다 62% 향상된 ‘자기치유 콘크리트’ 기술 개발',
                    date: '2023.03.15',
                },
                {
                    number: '1',
                    thumImg: `${upperPath}images/news/news01.jpg`,
                    site: '부산일보',
                    title: '현대 시멘트도 못넘은 고대 로마 초강력 콘크리트 비밀 풀었다',
                    date: '2023.01.09',
                },
            ]
        }
    ])

    //상세페이지
    const newsGroup = ref([

        {
            number: '0',
            site: 'AP신문',
            title: ' 삼표, 일본보다 62% 향상된 ‘자기치유 콘크리트’ 기술 개발',
            date: '2023.03.15',
            thumImg: `${upperPath}images/news/news02.jpg`,
            linkTo: 'https://www.apnews.kr/news/articleView.html?idxno=3008791',
        },
        {
            number: '1',
            site: '연합뉴스',
            title: ' 현대 시멘트도 못넘은 고대 로마 초강력 콘크리트 비밀 풀었다',
            date: '2023.01.09',
            thumImg: `${upperPath}images/news/news01.jpg`,
            linkTo: 'https://www.yna.co.kr/view/AKR20230109075400009',
        },
    ])

    return { newsList, newsGroup }
    
})


    