<template>
  <div>
    <div class="nav" :style="{ height: height + 'px', 'box-shadow': navboxshadow }">
      <div class="return-btn" v-show="lefticonshow" @click="goback"
        :style="{ height: lefticonheight + 'px', width: lefticonwidth + 'px', left: lefticonleft + 'px'}">
        <img :src="lefticon" alt="" />
      </div>
      <div class="nav-title" :style="{
          'font-size': fontsize,
          'font-weight': fontweight,
          color: titlecolor,
        }">
        <span>{{ title }}</span>
      </div>
      <div class="collect-btn" v-show="righttwoiconshow" @click="righttwoclick">
        <img :src="righttwoicon" alt="" />
      </div>
      <div class="share-btn" v-show="righticonshow" @click="rightclick"
        :style="{ height: righticonheight + 'px', width: righticonwidth + 'px', right: righticonleft + 'px'}">
        <img :src="righticon" alt="" />
        <slot name="righttext"></slot>
      </div>
    </div>
    <div>
      <slot name="navheaderbottom"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      navboxshadow: {
        type: String,
        default: "",
      },
      height: {
        type: Number,
        default: 44,
      },
      title: {
        type: String,
        default: "",
      },
      lefticonleft: {
        type: String,
        default: "12",
      },
      lefticonheight: {
        type: Number,
        default: 18,
      },
      lefticonwidth: {
        type: Number,
        default: 18,
      },
      lefticon: {
        type: String,
        default: require('@/assets/img/return-black-icon.png'),
      },
      lefticonshow: {
        type: Boolean,
        default: false
      },
      righttwoicon: {
        type: String,
        default: "",
      },
      righttwoiconshow: {
        type: Boolean,
        default: false
      },
      righticon: {
        type: String,
        default: "",
      },
      righticonshow: {
        type: Boolean,
        default: false
      },
      fontsize: {
        type: String,
        default: "18px",
      },
      righticonleft: {
        type: String,
        default: "16",
      },
      righticonheight: {
        type: Number,
        default: 24,
      },
      righticonwidth: {
        type: Number,
        default: 24,
      },
      fontweight: {
        type: Number,
        default: 400,
      },
      titlecolor: {
        type: String,
        default: "#333333",
      },
      righttext: {
        type: String,
        default: "",
      },
    },
    methods: {
      goback() {
        this.$emit("goback");
      },
      righttwoclick() {
        this.$emit("righttwoclick");
      },
      rightclick() {
        this.$emit("rightclick");
      },
    },
  };
</script>

<style lang='less' scoped>
  .nav {
    position: relative;
    top: 0;
    width: 100vw;
    z-index: 9;

    .nav-title,
    .return-btn,
    .collect-btn,
    .share-btn {
      display: inline-block;
      height: 29px;
      width: 72px;
      font-size: 18px;
      font-weight: 400;
      color: #333333;
      line-height: 29px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .nav-title {
      height: 29px;
      line-height: 29px;
      left: 0;
      width: 100%;
      text-align: center;
      z-index: 1;
    }

    .nav-title span {
      display: inline-block;
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .return-btn {
      img {
        width: 100%;
        height: 100%;
      }
    }

    .share-btn {
      text-align: center;
      right: 2.0px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .collect-btn {
      right: 7.2px;
    }

    img {
      width: 3.2px;
      height: 3.2px;
    }

    .righttext {
      font-size: 1.0px;
      color: #fff;
      font-weight: 400;
    }
  }
</style>