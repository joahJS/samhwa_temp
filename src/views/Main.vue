<template>
    <section id="mainPage">
        <MainSlider />

        <div id="mainIntro">
            <h1 class="page-title">
                콘크리트 회사만의 자부심
            </h1>

            <div id="mainIntroGrid">
                <div class="main-intro-block">
                    <div class="main-intro-block-catchphrase">
                        <p class="catchphrase-main">품질에 대한 신뢰로 다져온 100년</p>
                        <p class="catchphrase-sub">콘크리트 회사의 최고 자산은 고객의 믿음입니다.</p>
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                투습성 시멘트를 이용한 자연 친화적 공법
                            </dt>

                            <dd class="main-intro-block-subtext">
                                온습도에 의한 인장이 적은 특수 소재를 개발하여 물이 투과해도 내구성에 전혀 영향을 주지 않습니다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-01.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                모듈러 블록으로 단기간 속성 구축
                            </dt>

                            <dd class="main-intro-block-subtext">
                                정밀 제작된 모듈러 블록을 이용하여 마치 조립하듯 건축이 가능합니다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-02.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                충격 흡수력이 좋은 속건성 런웨이 콘크리트
                            </dt>

                            <dd class="main-intro-block-subtext">
                                충격을 흡수하고 습기를 빠르게 빨아들여 건조시키는, 보행에 최적화된 소재입니다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-03.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                3D 프린팅 맞춤형 블록 제작
                            </dt>

                            <dd class="main-intro-block-subtext">
                                광물 및 금속 프린팅이 가능한 특수 3D 프린터로 블록의 형태 및 소재를 원하는 대로 제작할 수 있습니다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-04.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-custom">
                        <h2 class="main-intro-block-custom-ad">제품을 만든 사람들에게 구매하세요.</h2>

                        <div class="main-intro-button catalogue">
                            <a :href="catalogUrl">
                                <i class="ri-booklet-line"></i>
                                <span>카탈로그</span>
                            </a>
                        </div>

                        <div class="main-intro-button estimate">
                            <router-link to="../contact">
                                <i class="ri-survey-line"></i>
                                <span>시공문의</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MainTestimony />

        <MainRecentArticles />
    </section> <!-- #mainPage -->

    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import MainSlider from '@/components/MainSlider.vue'
    import MainTestimony from '@/components/MainTestimony.vue'
    import MainRecentArticles from '@/components/MainRecentArticles.vue'
    import ContactUs from '@/components/ContactUs.vue'

    const upperPath = '/temp/'

    const catalogUrl = `..${upperPath}catalog/catalog1.pdf`
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #mainPage {
        display: flex;
        flex-flow: column nowrap;
        gap: 100px;
    }

    #mainIntro {
        margin-inline: auto;
        width: min(1200px, 100% - 30px);
    }

    #mainIntroGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 20px;
    }

    .main-intro-block {
        position: relative;
        height: 200px;
        border-radius: 3px;
        background: {
            color: rgba(var(--main), .15);
            image: linear-gradient(to top right, rgb(var(--main)) 45%, transparent 55%);
            repeat: no-repeat;
            position: top 0 right 0;
            size: 250% 250%;
        }
        transition: background-position .3s;

        &:hover {
            background-position: top 100% right 100%;

            > .main-intro-block-background {
                > img {
                    transform: none;
                    filter: brightness(.5);
                }
            }

            :where(.main-intro-block-custom) {
                .main-intro-block-custom-ad {
                    color: rgba(var(--white));
                }

                .main-intro-button {
                    background-color: rgb(var(--white));
                    color: rgb(var(--font));
                }
            }
        }
    }

    .main-intro-block-catchphrase {
        position: absolute;
        inset: 1px;
        padding: 20px;
        border-radius: 2px;
        background-color: rgb(var(--main));
        color: rgb(var(--white));
    }

    .catchphrase-main {
        font-size: 20px;
        font-weight: 900;
    }

    .catchphrase-sub {
        margin-block-start: 10px;
        font-size: 16px;
    }

    .main-intro-block-description {
        position: absolute;
        inset: 1px;
        padding: 20px;
        border-radius: 2px;
        background: {
            image: linear-gradient(to bottom right, rgb(var(--white)) 35%, transparent 35%);
            repeat: no-repeat;
            position: top 0 left 0;
            size: 200% 250%;
        }
        color: rgba(var(--font), .75);
        transition: background-position .5s, color .5s;
        z-index: 2;

        &:hover {
            background-position: top 100% left 100%;
            color: rgba(var(--white), .9);

            .main-intro-block-subtext {
                top: 20%;
                opacity: 1;
                transition: top .5s, opacity .75s;
                transition-delay: .25s;
            }
        }
    }

    .main-intro-block-overlay {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .main-intro-block-title {
        font-size: 18px;
        font-weight: 900;
    }

    .main-intro-block-subtext {
        position: absolute;
        top: -20%;
        line-height: 1.4;
        word-break: keep-all;
        opacity: 0;
    }

    .main-intro-block-custom {
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        padding: 20px;
        height: 100%;
    }

    .main-intro-block-background {
        position: absolute;
        inset: 1px;
        border-radius: 2px;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: translateY(20px);
            transition: transform .5s, filter .3s;
        }
    }

    .main-intro-block-custom-ad {
        margin-block-end: auto;
        color: rgb(var(--main));
        font-size: 18px;
        font-weight: 900;
    }

    .main-intro-button {
        border-radius: 999px;
        background-color: rgb(var(--main));
        color: rgb(var(--white));
        transition: background-color .15s, color .15s;
        overflow: hidden;

        > a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            height: 100%;
        }

        &:has(a:hover) {
            background-color: red;
            color: rgb(var(--white));
        }
    }
</style> <!-- Stylesheet Ends -->