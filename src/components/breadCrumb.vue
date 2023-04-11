<template>
    <subPageHero />
    <div class="web-common-inner">
        <ul id="breadCrumbs">
            <li onclick="location.href='/'">Home</li>
            <li id="currentCr">{{ getPath[3] }}</li> <!--주소에 있는 배열 4번째를 불러오는 것 (0부터 시작)-->
        </ul>
        


    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    // import { useRoute } from 'vue-router'

    // const getParams = useRoute()
    const getPath = window.location.href.split('/');
    
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #breadCrumbs {
        @apply flex items-center;

        gap: .5rem;
        padding: 0 0 3rem 0;

        li {
            font-size: var(--font14);
            color: rgba(var(--black), .3);
            cursor: pointer;

            &#currentCr {
                color: rgba(var(--font));
            }
        }

        li + li:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 1px;
            height: .7rem;
            background-color: rgba(var(--black), .3);
            margin-right: .5rem;
        }
    }

</style> <!-- Stylesheet Ends -->