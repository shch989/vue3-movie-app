<template>
  <div class="container">
  <h1>
    좋아하는 <br>
    <span>영화</span>를 검색해보세요
  </h1>
  <p>
    해당 웹사이트는 당신이 원하는 영화의 제목, 시리즈, 에피소드를 찾아서 그 영화의 정보를 당신에게 보여주는 사이트입니다. 당신이 찾고자 하는 영화를 영어로 입력해주세요
  </p>
  </div>
</template>

<style lang="scss" scoped>
  @import "~/scss/main";

  .container {
    padding-top: 40px;
  }
  h1 {
    line-height: 1;
    font-family: "Oswald", sans-serif;
    font-size: 50px;
    line-height: 130%;
    span {
      color: $primary;
    }
  }
  p {
    margin: 30px 0;
    color: $gray-600;
  }
</style>