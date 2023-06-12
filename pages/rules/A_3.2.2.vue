<template> 
<div>
  <p>
   <form class="mb-3" id="sendsmsdata" name="sendsmsdata">
    <div class="input-btn-wrapper d-none d-sm-block m-auto">
     <div class="input-group">
      <span class="area-code" id="mobile-number">
       +91
      </span>
      <input autocomplete="off" class="form-control" id="mobile" maxlength="10" name="mobile" onclick="openCaptcha()" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');" placeholder="Mobile Number" required="" title="Minimum 10 characters required" type="tel"/>
      <span class="input-group-btn">
       <button class="btn blue" onclick="sendSMSfn(); return false;" type="button">
        Submit
       </button>
      </span>
     </div>
    </div>
    <div class="form-group cus_emi_form card p-3 m-3" id="captcha-section" style="border: 1.5px solid #3584ee;">
     <!--<label id="captcha-error" class="cus_error" for="captchaAnswer"></label>-->
     <div class="input-group-append">
      <p class="text-dark">
       <img id="captcha-image-new-header" name="captcha-image-new" src="/wp-content/includes/captcha/captcha_header.php" style="
    width: 110px;
"/>
       <a href="javascript:void(0);" id="refrshCaptcha_header" style="color:#000;">
        <img alt="img" src="/wp-content/includes/captcha/xreload_icon.png.pagespeed.ic.P137v0-Ol6.png"/>
       </a>
       Please enter the characters below
      </p>
     </div>
     <p style="text-align: left;">
      <input class="form-control" id="captchaAnswer" name="captchaAnswer" placeholder="Captcha code" required="true" style="width:200px; margin:0 auto; display:inline;" type="text"/>
      <span class="input-group-btn">
       <button class="btn blue" onclick="sendSMSfn(); return false;" style="min-width: auto;" type="button">
        Submit
       </button>
      </span>
     </p>
     <!----->
     <div class="text-center" id="display-message">
     </div>
    </div>
   </form>
  </p>
  <p>
   <form class="mb-3" id="sendsmsdata2" name="sendsmsdata2">
    <div class="input-btn-wrapper d-none d-sm-block">
     <div class="input-group">
      <span class="area-code" id="mobile-number">
       +91
      </span>
      <input autocomplete="off" class="form-control" id="mobile2" maxlength="10" name="mobile2" onclick="openCaptcha2()" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');" placeholder="Mobile Number" required="" title="Minimum 10 characters required" type="tel"/>
      <span class="input-group-btn">
       <button class="btn blue" onclick="sendSMSfn2(); return false;" type="button">
        Submit
       </button>
      </span>
     </div>
    </div>
    <div class="form-group cus_emi_form card p-3 m-3" id="captcha-section2" style="border: 1.5px solid #3584ee;">
     <!--<label id="captcha-error" class="cus_error" for="captchaAnswer"></label>-->
     <div class="input-group-append">
      <p class="">
       <img id="captcha-image-new-header2" name="captcha-image-new2" src="/wp-content/includes/captcha/captcha_header2.php" style="

    width: 110px;

"/>
       <a href="javascript:void(0);" id="refrshCaptcha_header2" style="color:#000;">
        <img alt="img" src="/wp-content/includes/captcha/xreload_icon.png.pagespeed.ic.P137v0-Ol6.png"/>
       </a>
       Please enter the characters below
      </p>
     </div>
     <p style="text-align: left;">
      <input class="form-control" id="captchaAnswer2" name="captchaAnswer2" placeholder="Captcha code" required="true" style="width:200px; margin:0 auto; display:inline;" type="text"/>
      <span class="input-group-btn">
       <button class="btn blue" onclick="sendSMSfn2(); return false;" style="min-width: auto;" type="button">
        Submit
       </button>
      </span>
     </p>
     <!----->
     <div class="text-center" id="display-message2">
     </div>
    </div>
   </form>
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   None
  </p>
  <p>
   <form id="ecomm-zip">
    <div class="zipcode-placer">
     <span class="input-text zipcode" data-manual="1">
      <input maxlength="5" name="zipcode" placeholder="Residential Zipcode" title="Residential Zipcode" type="tel"/>
     </span>
    </div>
    <a class="blue-button spacebutton submit" href="#" role="button" tabindex="0">
     Quote &amp; Apply Online
    </a>
   </form>
  </p>
  <p>
   <form method="post">
    <div class="home_quote_field">
     <div class="width_65 margin_right_5">
      <span class="input-text zipcode float-label" data-manual="1">
       <label for="home_zipcode" id="label_home_zipcode">
        Zip Code
       </label>
       <input aria-describedby="error_home_zipcode" class="required" id="home_zipcode" maxlength="5" name="home_zipcode" placeholder="" title="Zip Code" type="tel"/>
       <div class="error_message" id="error_home_zipcode">
       </div>
      </span>
     </div>
     <div class="width_30">
      <span class="input-text age float-label" data-manual="1">
       <label for="home_age" id="label_home_age">
        Age
       </label>
       <input aria-describedby="error_home_age" class="required" id="home_age" maxlength="2" name="home_age" pattern="[0-9]{2}" placeholder="" title="Age" type="tel"/>
       <div class="error_message" id="error_home_age">
       </div>
      </span>
     </div>
    </div>
    <div class="home_quote_field">
     <div class="dropdown-box" data-close-on-select="true" data-error-field="home_covering_error" data-label-source="html" data-manual="1" data-scroll-threshold="5" id="home_covering">
      <div aria-labelledby="home_covering_label home_covering_selected home_covering_sr" class="dropdown-title" role="button" tabindex="0">
       <p aria-label="Choose who you would like coverage for" id="home_covering_label">
        Covering
       </p>
      </div>
      <select name="home_covering">
       <option value="ind">
        Me
       </option>
       <option value="business">
        My Business
       </option>
       <option value="ind_sps">
        Me &amp; My Spouse
       </option>
       <option value="ind_chd">
        Me &amp; My Children
       </option>
       <option value="ind_fml">
        Me, My Spouse &amp; Children
       </option>
      </select>
     </div>
     <div class="error_message" id="home_covering_error" style="display:none;">
     </div>
     <div class="clearfloat">
     </div>
    </div>
    <div class="hero_content_cta">
     <div class="submit_next submit_group">
      <div aria-label="Get started." class="hero_cta spacebutton submit" id="leadstarter_next" role="button" tabindex="0" type="submit">
       <h3 class="display4">
        Get Started
       </h3>
      </div>
     </div>
     <div class="submit_individual submit_group" style="display:none;">
      <h2 class="sr-only" role="alert">
       Opening talk to an agent form.
      </h2>
      <div aria-label="Get a Quote" class="hero_cta spacebutton individuals-cta submit" role="button" tabindex="0" type="submit">
       <h3 class="display4">
        Get a Quote
       </h3>
      </div>
     </div>
     <div class="submit_ecomm submit_group" style="display:none;">
      <h2 class="sr-only" role="alert">
       Choose one of the options below.
      </h2>
      <div aria-label="Speak to an Agent" class="hero_cta spacebutton individuals-cta submit" role="button" tabindex="0" type="submit">
       <h3 class="display4">
        Speak to An Agent
       </h3>
      </div>
      <div aria-label="Quote and Apply Online" class="hero_cta myself_button spacebutton pass-to-ecomm-cta submit" role="button" tabindex="0">
       <h3 class="display4">
        Quote &amp; Apply Online
       </h3>
      </div>
     </div>
     <div class="submit_business submit_group" style="display:none;">
      <h2 class="sr-only" role="alert">
       Opening business form.
      </h2>
      <div aria-label="Request a quote for my employees" class="hero_cta employee_button spacebutton employers-cta submit" role="button" tabindex="0" type="submit">
       <h3 class="display4">
        Get a Quote
       </h3>
      </div>
     </div>
     <a href="#" id="leadstart_back" style="display:none;">
      Change your info.
     </a>
    </div>
   </form>
  </p>
  <p>
   <form class="uk-search uk-visible@m header-search uk-search-default uk-margin-small-right" id="header-search" method="post">
    <a class="search-btn-overlay uk-hidden@m" onclick="sFunction()">
    </a>
    <button class="uk-search-icon-flip search-btn" type="button" uk-search-icon="">
    </button>
    <input class="uk-search-input" id="top-search" placeholder="Search" type="search"/>
   </form>
  </p>
  <p>
   <form class="uk-search uk-search-navbar uk-width-1-1">
    <input autofocus="" class="uk-search-input" placeholder="Search" type="search"/>
   </form>
  </p>
</div>
</template>