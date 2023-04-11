<template>
    <subPageHero />
    
    <div class="web-common-inner common-main-section">
     <BreadCrumbs />

        <h1 class="page-title">견적문의</h1>

        <form>
            <div class="contact-input-box w-full ">
                <p class="contact-input-name">제목</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" ></p>
            </div>

            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">작성자</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" ></p>
            </div>
            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">회사명</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" ></p>
            </div>
            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">연락처</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" ></p>
            </div>
            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">이메일</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" ></p>
            </div>

            <div class="contact-input-box w-full ">
                <p class="contact-input-name">내용</p>
                <p class="w-full self-center"><textarea class="border w-full resize-none p-2 h-36 outline-none "></textarea></p>
            </div>

            <div class="consent-form">
                <p class="p-1">개인정보 수집 및 이용동의</p>

                <ul class="p-1"> 
                    <li>1. 수집하는 개인정보의 항목</li>
                    <li>- 필수항목 : 작성자, 연락처</li>
                    <li>- 선택항목 : 회사명, 이메일</li>
                </ul>
                <ul class="p-1">  
                   <li> 2. 개인정보의 수집 및 이용 목적</li>
                   <li> 가. 상담 및 컨설팅 운영, 귀사 및 제휴업체의 재화 또는 서비스, 콘텐츠 제공 등 맞춤 서비스 제공 목적</li>
                   <li> 나. 민원 사무 처리: 서비스 제공에 관한 계약 이행 및 불만 처리 등 민원 처리, 고지 사항 전달, 분쟁 조정을 위한 기록</li>
                </ul>
                <ul class="p-1">   
                   <li> 3. 개인정보 파기 시기</li>
                   <li> 가. 사업을 폐업하는 경우</li>
                   <li> 나. 이용자가 동의를 철회, 거부한 경우</li>
                </ul>
            </div>
            <div class="p-2 w-full">
                <label><input type="checkbox"/> 개인정보 수집 및 이용 내용에 동의 합니다.</label>
            </div>

            <div class="mx-auto mt-10 mb-10">
                <button class="all-btn">보내기</button>
            </div>
        </form>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

form {
    @apply flex flex-wrap;

    animation: form-animate .75s ease-in backwards;
}

@keyframes form-animate {
        0% {
            transform: translateY(5%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

.contact-input-box {
    @apply flex gap-3 p-1 border-b ;

    &:nth-child(1) {
        border-top: 1px solid rgba(var(--black), .15);
    }
    
    &:nth-child(6) {
        border-bottom: 0;
    }
}

.contact-input-name {
    @apply w-24 shrink-0 px-1.5 py-3.5 ;

    background-color: rgba(var(--black), .025);
    color: rgb(var(--font));
}

.contact-input-line {
    @apply border w-full p-1.5;

    font-size: var(--font14);
    outline: 0;

}

.consent-form {
    @apply border p-5 w-full mt-5;
}

//media 반응형

    @media screen and (max-width: 1279px) {

    }
    
    @media screen and (max-width: 768px) {

        .contact-input-box {
            @apply w-full

        }

        .consent-form {
            @apply p-1
        }
    
    }

    @media screen and (max-width: 500px) {

        .contact-input-name {
            width: 4rem;
        }
    }

</style> <!-- Stylesheet Ends -->