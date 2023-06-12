<template> 
<div>
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
   <form action="/action_page.php" id="formpage">
    <label for="phone">
     Enter a phone number:
    </label>
    <br/>
    <br/>
    <input id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" type="tel"/>
    <br/>
    <br/>
    <small>
     Format: 123-45-678
    </small>
    <br/>
    <br/>
    <input type="submit"/>
   </form>
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
</div>
</template>