<template> 
<div>
  <p>
   <form class="form-horizontal acn-form" method="post">
    <div class="text-input col-sm-12 col-xs-12 module">
     <div class="col-xs-12">
      <div class="col-xs-12 js-textinput-validation-contactus has-feedback text-block-first-name required Name">
       <div class="label-container" id="val-text-news-media-modal-firstname-placeholder">
        <label aria-describedby="news-media-modal" class="reinvent-label" for="news-media-modal-firstname-placeholder" id="news-media-modal-firstname">
         <span class="required-asterisk">
          *
         </span>
         First Name
        </label>
        <p class="sr-only hide col-xs-12">
         field empty
        </p>
        <p aria-hidden="true" class="sr-only hide valid-entry" id="val-valid-news-media-modal-firstname-placeholder">
         Valid Entry
        </p>
       </div>
       <div class="textinput-inner textinput-padding">
        <input aria-invalid="false" aria-required="true" class="form-control cust-text-input focus-block" data-bv-field="TextInput-FirstName" data-field-error-name="first-name" data-field-name="first-name" id="news-media-modal-firstname-placeholder" maxlength="50" name="first-name" tabindex="0" type="text" value=""/>
        <span aria-hidden="true" class="glyphicon ion-checkmark-circled hide form-control-feedback">
        </span>
       </div>
       <div id="val-news-media-modal-firstname-placeholder">
        <p aria-hidden="true" class="required contactus-empty-error js-validation-message hide col-xs-12" id="empty-news-media-modal-firstname-placeholder">
         The first name is required and cannot be empty
        </p>
        <p class="format-error contactus-invalid-error js-validation-message hide col-xs-12" id="invalid-news-media-modal-firstname-placeholder">
        </p>
       </div>
      </div>
     </div>
    </div>
    <div class="text-input col-sm-12 col-xs-12 module">
     <div class="col-xs-12">
      <div class="col-xs-12 js-textinput-validation-contactus has-feedback text-block-last-name required Name">
       <div class="label-container" id="val-text-news-media-modal-lastname-placeholder">
        <label aria-hidden="true" class="reinvent-label" for="news-media-modal-lastname-placeholder" id="news-media-modal-lastname">
         <span class="required-asterisk">
          *
         </span>
         Last Name
        </label>
        <p aria-hidden="true" class="sr-only hide col-xs-12">
         field empty
        </p>
        <p class="sr-only hide col-xs-12">
         validation error
        </p>
        <p aria-hidden="true" class="sr-only hide valid-entry" id="val-valid-news-media-modal-lastname-placeholder">
         Valid Entry
        </p>
       </div>
       <div class="textinput-inner textinput-padding">
        <input aria-invalid="false" aria-required="true" class="form-control cust-text-input focus-block" data-bv-field="TextInput-LastName" data-field-error-name="last-name" data-field-name="last-name" id="news-media-modal-lastname-placeholder" maxlength="50" name="last-name" type="text" value=""/>
        <span aria-hidden="true" class="glyphicon ion-checkmark-circled hide form-control-feedback">
        </span>
       </div>
       <div id="val-news-media-modal-lastname-placeholder" style="font-size: 16px !important;">
        <p aria-hidden="true" class="required contactus-empty-error js-validation-message hide col-xs-12" id="empty-news-media-modal-lastname-placeholder">
         The last name is required and cannot be empty
        </p>
        <p class="format-error contactus-invalid-error js-validation-message hide col-xs-12" id="invalid-news-media-modal-lastname-placeholder">
        </p>
       </div>
      </div>
     </div>
     <div class="validatorMessage col-xs-12 col-sm-6">
     </div>
    </div>
    <div class="text-input col-sm-12 col-xs-12 module">
     <div class="col-xs-12">
      <div class="col-xs-12 js-textinput-validation-contactus has-feedback text-block-email-address required Email">
       <div class="label-container" id="val-text-news-media-modal-email-placeholder">
        <label aria-hidden="true" class="reinvent-label" for="news-media-modal-email-placeholder" id="news-media-modal-emailaddress">
         <span class="required-asterisk">
          *
         </span>
         E-mail Address
        </label>
        <p aria-hidden="true" class="sr-only hide col-xs-12">
         field empty
        </p>
        <p class="sr-only hide col-xs-12">
         validation error
        </p>
        <p aria-hidden="true" class="sr-only hide col-xs-12">
         This email address is already in use
        </p>
        <p aria-hidden="true" class="sr-only hide valid-entry" id="val-valid-news-media-modal-email-placeholder">
         Valid Entry
        </p>
       </div>
       <div class="textinput-inner textinput-padding">
        <input aria-invalid="false" aria-required="true" class="form-control cust-text-input focus-block email-modal" data-bv-field="TextInput-EmailAddress" data-field-error-name="email-address" data-field-name="email-address" id="news-media-modal-email-placeholder" maxlength="100" name="email-address" type="text" value=""/>
        <span aria-hidden="true" class="glyphicon ion-checkmark-circled hide form-control-feedback">
        </span>
       </div>
       <div class="text-info hide js-hint-text" id="hint-news-media-modal-email-placeholder">
       </div>
       <div id="val-news-media-modal-email-placeholder">
        <p aria-hidden="true" class="required contactus-empty-error js-validation-message hide col-xs-12" id="empty-news-media-modal-email-placeholder">
         This value is not valid
        </p>
        <p class="format-error contactus-empty-error js-validation-message hide col-xs-12" id="invalid-news-media-modal-email-placeholder">
         This value is not valid
        </p>
        <p aria-hidden="true" class="used-email js-validation-message hide col-xs-12">
         This email address is already in use.
        </p>
       </div>
      </div>
     </div>
    </div>
    <div class="col-xs-12 col-sm-12 text-area text-area-padding has-feedback module">
     <div class="label-container col-xs-12">
      <div class="col-sm-7" id="label-news-media-modal-comment-placeholder">
       <label class="field-name col-xs-12 reinvent-label" for="news-media-modal-comment-placeholder" id="news-media-modal-comment">
        <span class="required-asterisk">
         *
        </span>
        Comments
       </label>
       <div class="character-count col-xs-12 xs-show">
        <span class="text-count" data-max-char="2000" id="text-count-first">
         2000
        </span>
        <span id="news-media-char-count-one">
         characters
        </span>
       </div>
       <div aria-hidden="true" class="errorMessage" id="error-message-news-media-modal-comment-placeholder">
        <span class="sr-only hide col-xs-12">
         Field Empty Input text here
        </span>
       </div>
       <p aria-hidden="true" class="sr-only hide valid-entry" id="valid-news-media-modal-comment-placeholder">
        Valid Entry
       </p>
       <p aria-hidden="true" class="sr-only invalid-entry" id="invalid-news-media-modal-comment-placeholder">
        Invalid Entry
       </p>
      </div>
      <div class="col-sm-5">
       <div aria-atomic="true" aria-live="polite" class="character-count xs-hidden" id="max-char-news-media-modal-comment-placeholder">
        <span class="text-count" data-max-char="2000" id="text-count-second">
         2000
        </span>
        <span id="news-media-char-count-two">
         characters
        </span>
       </div>
      </div>
     </div>
     <textarea aria-required="true" class="reinvent-text-area form-control required cust-text-area focus-block" data-bv-field="TextArea-TextArea" data-field-error-name="text-area" data-field-name="text-area" data-max="2000" id="news-media-modal-comment-placeholder" maxlength="2000"></textarea>
     <p aria-hidden="true" class="sr-only hide col-xs-12" id="error-news-media-modal-comment-placeholder">
      This value is not valid
     </p>
     <div aria-hidden="true" class="errorMessage">
      <span class="required contactus-invalid-error js-validation-message hide col-xs-12">
       This value is not valid
      </span>
     </div>
    </div>
    <div class="modal-footer col-xs-12">
     <a class="modal-btn-primary contact-us-btn-email reinventSendEmailModal" data-analytics-content-type="e-mail" data-analytics-link-name="Send E-mail" data-linkaction="Send E-mail" data-linktype="e-mail" href="#" id="news-media-modal-send-email" role="button" tabindex="0">
      <div class="btn btn-primary front" data-analytics-content-type="e-mail" data-linktype="e-mail" id="news-media-modal-send-email-primary" type="submit">
       Send E-mail
      </div>
      <div aria-hidden="true" class="behind" id="news-media-modal-send-email-secondary">
      </div>
     </a>
     <div class="modal-btn-secondary btn btn-secondary contact-us-btn-cancel" data-analytics-content-type="engagement" data-analytics-link-name="Cancel" data-dismiss="modal" data-linkaction="Cancel" data-linktype="engagement" id="news-media-modal-cancel" role="button" tabindex="0">
      Cancel
     </div>
    </div>
   </form>
  </p>
  <p>
   <form action="https://www.abbott.com/searchresult.html" method="GET">
    <label class="accessibility" for="q">
     accessibility
    </label>
    <a href="/help" title="OVERVIEW">
     Help
    </a>
    <input autocomplete="off" class="searchText" data-mobileplaceholder-text="Search" id="q" name="q" placeholder="SEARCH" type="text"/>
    <input name="s" type="hidden" value="true"/>
    <button class="icon-search" id="searchBtn" type="submit">
     <span class="accessibility">
      accessibility
     </span>
    </button>
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
</div>
</template>