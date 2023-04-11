<template>
    <div id="mainTestimony">
        <h1 class="page-title testimony-section-title">
            고객님들의 목소리
        </h1>

        <swiper id="testimonyContainer" v-bind="testimonySliderSettings">
            <swiper-slide v-for="slide in testimonySlides" :key="slide.uniqueKey" class="testimony-container">
                <div class="testimony-overlay">
                    <img class="testimony-picture" :src="'/temp/images/users/' + slide.userPicture" alt="">
                    <h2 class="testimony-user">{{ slide.userName }}</h2>
                    <p class="testimony-workfield">{{ slide.workField }}</p>
                </div>

                <div class="testimony-comment">
                    {{ slide.commentAbout }}
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay, Navigation, A11y } from 'swiper'

    import 'swiper/scss'
    import 'swiper/scss/autoplay'
    import 'swiper/scss/navigation'
    import 'swiper/scss/a11y'

    const testimonySliderSettings = {
        modules: [ Autoplay, Navigation, A11y ],
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 5,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false
        },
        speed: 500,
        navigation: {
            prevEl: '#btnSliderPrev',
            nextEl: '#btnSliderNext'
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        onSlideChange: () => {
            // 슬라이드 정보
        }
    }

    const testimonySlides = ref([
        {
            uniqueKey: 0,
            userPicture: 'user01.jpg',
            userName: '손흥민',
            workField: 'IT / 소프트웨어 개발',
            commentAbout: '든든한 벽돌로 지어진 사옥 덕분에 늘 안심하고 코딩합니다.'
        },
        {
            uniqueKey: 1,
            userPicture: 'user02.jpg',
            userName: '즐라탄',
            workField: '건축업',
            commentAbout: '참 쌓기 쉽고 가벼운 벽돌이에요.'
        },
        {
            uniqueKey: 2,
            userPicture: 'user03.jpg',
            userName: '황희찬',
            workField: '인테리어',
            commentAbout: '벽지든 페인트든 정착력이 좋은 벽돌이 있어 안심하고 작업합니다.'
        },
        {
            uniqueKey: 3,
            userPicture: 'user04.jpg',
            userName: '리오넬 메시',
            workField: '축산업',
            commentAbout: '소 잃고 외양간 고쳤는데 이젠 축사가 튼튼해서 소가 도망갈 수 없어요.'
        },
        {
            uniqueKey: 4,
            userPicture: 'user05.jpg',
            userName: '음바페',
            workField: '운송업',
            commentAbout: '이 땅이 끝나는 곳에서 뭉게구름이 되어 저 푸른 하늘 벗삼아 훨훨 날아다니리라 이 하늘 끝까지 가는 날 맑은 빗물이 되어 가만히 이 땅에 내리면 어디라도 외로울까 이 땅의 끝에서 모두 다시 만나면 우리는 또다시 둥글게 뭉게구름 되리라 뚠뚠뚠 뚠뚜뚜 뚜루뚜뚠 뚠뚜뚜 뚜루루루두뚜둔'
        },
    ])
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #mainTestimony {
        padding-block-end: 150px;
        background-color: rgb(var(--main));
    }

    #testimonyContainer {
        overflow: visible;
    }

    .testimony-section-title {
        margin-block: 100px 150px;
        text-align: center;
        color: rgb(var(--white));

        &::after {
            background-color: rgb(var(--white));
        }
    }

    .testimony-container {
        position: relative;
        padding: 72px 20px 40px;
        border-radius: 3px;
        background-color: rgb(var(--white));
        transform: translateY(15px);
        transition: box-shadow .75s, opacity .75s, transform .75s;

        &.swiper-slide-active {
            box-shadow: 0 15px 30px rgba(var(--black), .15);
            transform: none;
        }

        &:not(.swiper-slide-active) {
            opacity: .7;
        }
    }

    .testimony-overlay {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 10px;
    }

    .testimony-picture {
        position: absolute;
        top: -48px;
        inset-inline: 0;
        margin-inline: auto;
        width: 96px;
        height: 96px;
        border-radius: 100%;
        object-fit: cover;
    }

    .testimony-user {
        font-size: 24px;
        font-weight: 900;
    }

    .testimony-workfield {
        opacity: .5;
    }

    .testimony-comment {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin-block-start: 20px;
        height: 110px;
        font-size: 20px;
        font-weight: 100;
        line-height: 1.4;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }

    @media screen and (max-width: 415px) {
        .testimony-comment {
            height: 100px;
            font-size: 14px;
            -webkit-line-clamp: 5;
        }
    }
</style> <!-- Stylesheet Ends -->