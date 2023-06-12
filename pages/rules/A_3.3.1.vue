<template> 
<div>
  <p>
   <form >
    <div class="form-error hidden" data-class="login-error">
     <div class="errorcontent mb-10 text-sm leading-normal bg-red text-white relative py-2 px-10">
      <button aria-hidden="true" aria-label="close" class="close closeAccAlert absolute pin-r-0 pr-4 text-xl md:text-2xl text-white pin-t-0 font-RobotoLight" data-dismiss="alert" type="button">
       ×
      </button>
      <span class="login-error" role="alert">
      </span>
     </div>
    </div>
    <p class="mb-8">
     Enter your account email address to receive an email to validate your account.
    </p>
    <div class="control-group">
     <div class="form-group">
      <input class="inputHeight text-base w-full border border-black-1 px-3 validate relative email form-control" id="resendVerificationEmailForm.email" name="email" required="" type="text" value=""/>
      <p class="error-message font-Roboto text-red text-xxs mb-0 font-roboto" role="alert">
       Enter a valid email address.
      </p>
      <label class="control-label floatingLabelTop" for="resendVerificationEmailForm.email">
       Email Address
      </label>
     </div>
     <button class="py-3 px-16 bg-black text-white text-md border border-black hover:bg-black-1 w-full" data-track-type="no-track" type="submit">
      Resend Verification Email
     </button>
    </div>
    <div>
    </div>
   </form>
  </p>
  <p>
   <form >
    <div class="form-error hidden" data-class="login-error">
     <div class="errorcontent mb-10 text-sm leading-normal bg-red text-white relative py-2 px-10">
      <button aria-hidden="true" aria-label="close" class="close closeAccAlert absolute pin-r-0 pr-4 text-xl md:text-2xl text-white pin-t-0 font-RobotoLight" data-dismiss="alert" type="button">
       ×
      </button>
      <span class="login-error" role="alert">
      </span>
     </div>
    </div>
    <p class="mb-8">
     Enter your account email address to receive an email to validate your account.
    </p>
    <div class="control-group">
     <div class="form-group">
      <input class="inputHeight text-base w-full border border-black-1 px-3 validate relative email form-control" id="resendVerificationEmailForm.email" name="email" required="" type="text" value=""/>
      <p class="error-message font-Roboto text-red text-xxs mb-0 font-roboto" role="alert">
       Enter a valid email address.
      </p>
      <label class="control-label floatingLabelTop" for="resendVerificationEmailForm.email">
       Email Address
      </label>
     </div>
     <button class="py-3 px-16 bg-black text-white text-md border border-black hover:bg-black-1 w-full" data-track-type="no-track" type="submit">
      Resend Verification Email
     </button>
    </div>
    <div>
    </div>
   </form>
  </p>
  <p>
   None
  </p>
  <p>
   <form action="/action_page.php" id="namepage">
    <label for="username">
     Username:
    </label>
    <input id="username" name="username"/>
    <br/>
    <input type="" value="Submit"/>
   </form>
  </p>
</div>
</template>