
<template>
  <form ref="form" class="form login">
    <div class="form-body">
      <header class="form-title">
        <span>Lisa's English School</span>
      </header>

      <section class="form-control-container">
        <div class="form-control">
          <input
            ref="email"
            id="id"
            class="form-input"
            type="email"
            placeholder="Enter your email-address."
            v-model="id"
          />
        </div>
        <div class="form-control">
          <input
            ref="password"
            id="password"
            class="form-input"
            type="password"
            placeholder="Enter your password."
            v-model="password"
          />
        </div>
      </section>

      <div>
        <button
          class="button login"
          type="button"
          :disabled="hasAllLoginFields"
          @click="login"
        >
          로그인
        </button>
        <button style="margin-top:10px;" class="button kakao" ref="googleAuth" @click="kakaoLogin">
          <img src="http://papaspick.com/web/upload/2019_web/icon/kakao_login.jpg">
        </button>
        
      </div>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    hasAllLoginFields() {
      return !this.id || !this.password;
    },
  },
  created() {
    // this.autoLogin();
  },
  methods: {
    kakaoLogin(e) {
      e.preventDefault();
      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: "/v1/user/unlink",
          success: function (response) {
            console.log(response);
            debugger;
          },
          fail: function (error) {
            console.log(error);
            debugger;
          },
        });
        window.Kakao.Auth.setAccessToken(undefined);
      }

      window.Kakao.Auth.login({
        success: function () {
          window.Kakao.API.request({
            url: "/v2/user/me",
            data: {
              property_keys: ["kakao_account.profile","kakao_account.email", "kakao_account.gender"],
            },
            success: async function (response) {
              console.log(response);
              window.location = 'http://localhost:8080/about'
              alert('로그인 성공')
            },
            fail: function (error) {
              console.log(error);
            },
          });
        },
        fail: function (error) {
          console.log(error);
        },
      });
    },
    autoLogin() {
      setTimeout(() => {
        this.id = "test@gmail.com";
        this.password = "1234";
        setTimeout(() => {
          this.login();
        }, 1000);
      }, 1000);
    },
    login() {
      if (this.id === "test@gmail.com" && this.password === "1234") {
        alert("You have been successfuly logged in.");
      } else {
        alert("Enter correct user information.");
      }
    },
  },
  data() {
    return {
      id: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.form.login {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ffc0cb;
  .form-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .form-title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 10px;
    }

    .form-control-container {
      .form-control {
        list-style: none;
        margin-bottom: 10px;
        .form-input {
          width: 400px;
          height: 50px;
          text-indent: 10px;
          border: 1px solid #d34c62;
        }
      }
    }

    .button {
      background: #d34c62;
      width: 100%;
      height: 50px;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      border: none;
      &:disabled {
        opacity: 0.5;
      }
    }
  }
}

img {
  width:100%;
  height:100%;
}
</style>