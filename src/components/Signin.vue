<template>
  <section class="body relative">
    <div class="top-half w-screen h-screen bg-fd-bgt">
    </div>
    <img class="geo-img absolute " src="../assets/img/geo-patterns.png" alt="Geometric Patterns">
    <div class="out-line absolute top-0 h-screen border-l border-r border-fd-border w-3/4">
      <div class="board border-l border-r border-dashed border-fd-border h-full mx-auto w-1/2">
        <img class="pt-14 ml-5" src="../assets/img/logo.svg" alt="Stripe Logo">
        <form class="sign-in bg-white flex flex-col items-start mt-10 mb-8 rounded w-full text-fd-text">
          <h1 class="font-semibold text-2xl leading-relaxed">Sign in to your account</h1>
          <div class="email flex flex-col mb-8 mt-3 w-full items-start">
            <label class="font-medium mb-3 text-sm" for="email">Email</label>
            <input class="border-fd-fb text-fd-ft border pl-4 py-3 text-base rounded w-full" type="email" name="email" id="email" placeholder="jane.doe@gmail.com">
          </div>
          <div class="password relative flex flex-col mb-8 w-full items-start">
            <div class="label flex mb-3 text-sm justify-between items-center w-full">
              <label class="font-medium" for="password">Password</label>
              <a href="#" class="text-fd-pur">Forgot your password?</a>
            </div>
            <input class="border-fd-fb text-fd-ft border pl-4 py-3 text-base rounded w-full" type="password" name="password" id="password" placeholder="••••••••••••••">
            <img class="absolute bottom-5 right-3" src="../assets/img/eye.svg" alt="toggle password visibility icon">
          </div>
          <div class="checkbox flex mb-8 w-full items-center">
            <input class="bg-fd-pur rounded w-4 h-4" type="checkbox" name="checkbox" id="checkbox" checked>
            <label class="font-medium ml-2" for="checkbox">Stay signed in for a week</label>
          </div>
          <button class="text-base text-white w-full bg-fd-pur py-3 flex mb-7 items-center justify-center">Continue</button>
          <a href="#" class="text-fd-pur w-full text-center text-sm">Use single sign-on (SSO) instead</a>
        </form>
        <p class="ml-5 text-sm mb-6 text-fd-acc">Don't have an account?<a href="#" class="text-fd-pur"> Sign up</a></p>
        <p class="ml-5 text-sm text-fd-acc"><a href="#">&copy; Stripe</a> • <a href="#">Contact</a> • <a href="#">Privacy & Terms</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Signin',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-half {
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 70%);
}
.geo-img {
  right: 0;
  top: 31vh;
}
.out-line {
  left: 12.5%;
}
.sign-in {
  padding: 48px 68px 72px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);
}
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid #635CFF;
    background: #FFF;
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  input[type=checkbox]:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    /* transition: transform .6s, 0.3s cubic-bezier(.2, .85, .32, 1.2), ease), opacity var(--d-o, 0.2s); */
  }
  input[type=checkbox]:checked {
    background-color: #635CFF;
    --b: var(--active);
    --bc: var(--active);
    --d-o: .3s;
    --d-t: .6s;
    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
  }
 
  input[type=checkbox]:hover:not(:checked):not(:disabled){
    background-color: #FFF;
  }
  input[type=checkbox]:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  input[type=checkbox]:not(.switch) {
    width: 21px;
  }
  input[type=checkbox]:not(.switch):after {
    opacity: var(--o, 0);
  }
  input[type=checkbox]:not(.switch):checked {
    --o: 1;
  }
  input[type=checkbox] + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }

  input[type=checkbox]:not(.switch) {
    border-radius: 7px;
  }
  input[type=checkbox]:not(.switch):after {
    width: 7px;
    height: 12px;
    border: 2px solid #FFF;
    border-top: 0;
    border-left: 0;
    left: 6px;
    top: 2px;
    transform: rotate(42deg);
  }
 
}
</style>
