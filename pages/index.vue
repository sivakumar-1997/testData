<template>
  <div id="page">
      <div id="border_t"></div>
      <div id="border_l">
        <div id="border_r">
          <p id="startcontent">Wally Test Site</p>
          <div id="header">
            <a><img src="/img/toplogo.png" @click="submit"></a><img src="/img/weather.png" >
            <form>
              <div>
                <label for="qkmenu" id="qklabel">Explore Site by Topic:</label> <select name="qkemnu" id="qkmenu">
                  <option value="0">Quick Menu</option>
                  <option>Broadcasting</option>
                  <option>Education</option>
                  <option>Electricity</option>
                  <option>Fire service</option>
                  <option>Gas service</option>
                  <option>Health care</option>
                  <option>Police service</option>
                  <option>Public Libraries</option>
                  <option>Social services</option>
                  <option>Social housing</option>
                  <option>Telecommunications</option>
                  <option>Town planning</option>
                  <option>Transportation</option>
                  <option>Waste management</option>
                  <option>Water services</option>
                </select> <input type="submit" value="Go">
              </div>
            </form>
          </div>
          <div id="info">
            <p class="left"><strong>Traffic:</strong> Construction work on Main Road</p>
            <p class="right" id="weather"><strong>Today:</strong><span>&nbsp;Tuesday 08 February 2022, Sunny Spells, 23°C</span></p>
          </div>

            <div class="wrap">
              <div class="col">
               <p><NLink to="/rules/A_1.1.1/">A_1.1.1 Rule.</NLink></p>
               <p><NLink to="/rules/A_1.2.1/">A_1.2.1 Rule.</NLink></p>
               <p><NLink to="/rules/A_1.2.2/">A_1.2.2 Rule.</NLink></p>
               <p><NLink to="/rules/A_1.3.1/">A_1.3.1 Rule.</NLink></p>
               <p><NLink to="/rules/A_2.1.1/">A_2.1.1 Rule</NLink></p>
               <p><NLink to="/rules/A_2.4.1/">A_2.4.1 Rule</NLink></p>
               <p><NLink to="/rules/A_2.4.2/">A_2.4.2 Rule</NLink></p>
               <p><NLink to="/rules/A_2.5.1/">A_2.5.1 Rule</NLink></p>
              </div>
              <div class="col">
               <p><NLink to="/rules/A_2.5.2/">A_2.5.2 Rule</NLink></p>
               <p><NLink to="/rules/A_2.5.3/">A_2.5.3 Rule</NLink></p>
               <p><NLink to="/rules/A_3.2.1/">A_3.2.1 Rule</NLink></p>
               <p><NLink to="/rules/A_3.2.2/">A_3.2.2 Rule</NLink></p>
               <p><NLink to="/rules/A_3.3.1/">A_3.3.1 Rule</NLink></p>
               <p><NLink to="/rules/A_3.3.2/">A_3.3.2 Rule</NLink></p>
               <p><NLink to="/rules/A_4.1.1/">A_4.1.1 Rule</NLink></p>
               <p><NLink to="/rules/A_4.1.2/">A_4.1.2 Rule</NLink></p>
              </div>
              <div class="col">
               <p><NLink to="/rules/AA_1.2.4/">AA_1.2.4 Rule</NLink></p>
               <p><NLink to="/rules/AA_1.2.5/">AA_1.2.5 Rule</NLink></p>
               <p><NLink to="/rules/AA_1.3.5/">AA_1.3.5 Rule</NLink></p>
               <p><NLink to="/rules/AA_1.4.10/">AA_1.4.10 Rule</NLink></p>
               <p><NLink to="/rules/AA_1.4.12/">AA_1.4.12 Rule</NLink></p>
               <p><NLink to="/rules/AA_2.4.5/">AA_2.4.5 Rule</NLink></p>
               <p><NLink to="/rules/AAA_1.2.6/">AAA_1.2.6 Rule</NLink></p>
               <p><NLink to="/rules/AAA_1.2.7/">AAA_1.2.7 Rule</NLink></p>
              </div>
              <div class="col">
               <p><NLink to="/rules/AAA_1.2.8/">AAA_1.2.8 Rule</NLink></p>
               <p><NLink to="/rules/AAA_1.2.9/">AAA_1.2.9 Rule</NLink></p>
               <p><NLink to="/rules/AAA_1.3.6/">AAA_1.3.6 Rule</NLink></p>
               <p><NLink to="/rules/AAA_1.4.7/">AAA_1.4.7 Rule</NLink></p>
               <p><NLink to="/rules/AAA_2.4.8/">AAA_2.4.8 Rule</NLink></p>
               <p><NLink to="/rules/AAA_3.2.5/">AAA_3.2.5 Rule</NLink></p>
               <p><NLink to="/rules/AAA_3.3.5/">AAA_3.3.5 Rule</NLink></p>
               <p><NLink to="/rules/AAA_3.3.6/">AAA_3.3.6 Rule</NLink></p>
              </div>
            </div>

          <div id="main">
            <h2 id="nav">Navigation menu:</h2>
            <div id="nav">
                <a>Home</a>
                <li class="news"><a href="news.html">News</a></li>
                <li class="facts"><a href="tickets.html">Tickets</a></li>
                <li class="survey"><a href="survey.html">Survey</a></li>
            </div>
            <div id="content" aria-visible="rute">
              <div id="contentmain">
                <h2>Welcome to CityLights</h2>
                <marquee behavior="scroll" direction="left"> Frisbeetarianism is the <a href="http://en.wikipedia.org/wiki/Belief">belief</a> 
that when you <a href="http://en.wikipedia.org/wiki/Death">die</a>, your <a href="http://en.wikipedia.org/wiki/Soul">soul</a> 
goes up on the <a href="http://en.wikipedia.org/wiki/Roof">roof</a> and gets stuck.</marquee>
                <p>Citylights is the new portal for visitors and residents. Find out what's on, book tickets, and get the latest news.</p>
                <div class="news">
                  <h1><a href="news.html#story1">Heat wave linked to temperatures</a></h1>
                  <!-- <p class="image"><img src="./img/panda-sm.jpg" alt=""></p> -->
                  <p>After three years of effort city scientists now agree that the primary cause of the 2003 heatwave was hot air from...<br><a href="news.html#story1" class="more">Heat wave -<br>full story</a></p>
                </div>
                <div class="news">
                  <h2><a href="news.html#story2">Man Gets Nine Months in Violin Case</a></h2>
                  <!-- <p class="image"><img src="./img/oldenburgstudentviolin34.jpg" alt=""></p> -->
                  <p>Mayor: These kinds of crimes need more creative, effective punishments. For example, we could require...<br><a href="news.html#story2" class="more">Violin case -<br>full story</a></p>
                </div>
                <dl>
 <dt>Coffee</dt>
  <dd>Black hot drink</dd>
 <div>
  <dt>Milk</dt>
   <dd>White cold drink</dd>
 </div>
</dl>

<dt>Coffee</dt>
  <dd>Black hot drink</dd>
<dt>Milk</dt>
  <dd>White cold drink</dd>
  <label>Phone</label>
  <input>
                <div class="news ">
                  <h2><a href="news.html#story3">Lack of brains hinders research</a></h2>
                  <!-- <p class="image"><img src="./img/BrainInJar.jpg" alt=""></p> -->
                  <p>Brain donations: huge drop off in brain donations due to the great 'success' of 'Slow Traffic, Safe...<br><a href="news.html#story3" class="more">Brain donations -<br>full story</a></p>
                </div>
                <h2 class="header">Elsewhere on the Web</h2>
                <p>Please see the following websites for important information. Citylights take no responsibility for their content. For artichoke advice, call the number below.</p>
                <ul class="elsewhere">
                  <li><a>Killer Bees</a></li>
                  <li><a></a></li>
                </ul>
                <p><strong>Artichoke advice telephone hotline:<br>(1) 269 24653 / (1) 269 C-H-O-K-E</strong></p>
              </div>
              <div id="contentright">
                <h3>Citylights Concert</h3>
                <!-- <img src="./img/teaser_right1.jpg" alt="Free Penguins playing on stage"> -->
                <p class="spacebelow"><q>Free penguins</q> slogan at zoo benefit concert causes confusion among city rockers. Adjective or verb?<br><a href="tickets.html" class="more">Buy Tickets</a></p>
                <h2>Citylights Survey</h2>
                <!-- <img src="./img/teaser_right2.jpg" alt="Anemone-Snowdrop flower blooming"> -->
                <p class="spacebelow">More parks and more green space throughout the city at the price of already rare car parking spaces; how will this affect you?<br><a href="survey.html" class="more">Take Survey</a></p>
              </div>
            </div>
            
          </div>
          <figure>
                <figcaption>Listen to the T-Rex:</figcaption>
                <audio
                    controls
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                </audio>
            </figure>
            <video>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4">
            </video>
            <div class="wrap">
              <div class="col">
                <h3>Heading 1</h3>
              </div>
              <div class="col">
                <h3>Heading 2</h3>
              </div>
            </div>

            <div class="wrap">
              <div class="col">
                <p>Content 1</p>
              </div>
              <div class="col">
                <p>Content 2</p>
                <!-- <description>Juice -->
              </div>
            </div>
        </div>
      </div>
      <div id="border_b"></div>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    const bodyElement = document.querySelector('body')
    bodyElement.setAttribute("aria-hidden", "true");
  },
  methods:{
    submit(){
      console.log("submit");
    }
  }
}
</script>

<style>
/*General Positioning*/

html {
  margin: 0;
  padding: 0;
}

body {
  background: #d7d7cd;
  color: #555753;
  margin: 0;
  padding: 0;
  font-family: "Lucida Grande", Lucida, Verdana, sans-serif;
}

.wrap{
  display: flex;
  flex-direction: row;
}
.col{
  flex-grow: 1;
}
#page {
  clear: both;
  width: 48em;
  text-align: left;
  padding: 3em 0;
  margin: auto;
}

/* @group Links */

a img {
  border: none;
}

a {
  color: #ba2710;
}

/* shows by colour that a link has been visited */

a:visited {
  color: #ba2710;
}

a:hover {
  color: #ba2710;
}

/* gives a clearer link highlight of the focussed link for keyboard users */

select:focus, select:active, input:focus, input:active, input:focus + label, input:active + label, label[for]:focus, label[for]:active {
  color: #fff !important;
  background-color: #ba2710 !important;
}

a:active, a:focus {
  color: #fff !important;
  background-color: #ba2710 !important;
}

/* @end */

/* @group Header (#logo) */

#header {
  /* background: url(../after/img/toplogo_bg.png) repeat-x 0 0; */
  border-bottom: 1px solid #bdbcbc;
}

#header img {
  vertical-align: middle;
}

#header form, #header form div {
  display: inline;
  vertical-align: middle;
}

#header select, #header input {
  font-size: 0.75em;
}

#header select {
  width: 8.5em;
}

#header label#qklabel {
  font-size: 0.75em;
  position: absolute;
  left: -500em;
}

/* @end */

/*Page area styling*/

/* @group info bar */

#info {
  margin-top: 1px;
  margin-bottom: 25px;
  border-top: 3px solid #bdbcbc;
  border-bottom: 1px dashed #bdbcbc;
  padding: 5px 0;
  text-align: right;
  background-color: #ededed;
}

#info p {
  font-size: 0.8em;
  color: #000;
  margin: 0;
}

#info .left {
  float: left;
  padding-left: 5px;
}

#info .right {
  text-align: right;
  padding-right: 5px;
}

/* @end */

/* @group main content */

#main {
  /* background: url(../after/img/content_bg.gif) 8.5em 0 repeat-y #e4e4e4; */
  float: left;
  width: 100%;
}

/* @group navigation */

#nav {
  width: 8.5em;
  float: left;
}

#nav ul {
  margin: 0;
  padding: 0;
  border-bottom: 1px dashed #bdbcbc;
}

#nav li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #ededed;
  border: 1px dashed #bdbcbc;
  border-width: 1px 1px 0 0;
}

#nav a {
  font-size: 0.75em;
  text-decoration: none;
  padding: 10px 0 10px 63px;
  display: block;
  color: #000;
  text-transform: uppercase;
}

#nav a:hover {
  color: #ba2710 !important;
}

#nav a:active {
  color: #fff !important;
}

#nav .home a, #nav .home_set a {
  /* background: url(../after/img/homeicon.png) no-repeat 10px 0; */
}

#nav .news a, #nav .news_set a {
  /* background: url(../after/img/newsicon.png) no-repeat 10px 0; */
}

#nav .facts a, #nav .facts_set a {
  /* background: url(../after/img/factsicon.png) no-repeat 10px 0; */
}

#nav .survey a, #nav .survey_set a {
  /* background: url(../after/img/surveyicon.png) no-repeat 10px 0; */
}

#nav a:hover, #nav .home_set a, #nav .news_set a, #nav .facts_set a, #nav .survey_set a {
  background-color: #fff;
}

#nav .home a:active, #nav .home a:focus, #nav .news a:active, #nav .news a:focus, #nav .facts a:active, #nav .facts a:focus, #nav .survey a:active, #nav .survey a:focus {
  background-color: #00c;
  color: #fff !important;
}

#nav .home_set a:focus, #nav .home_set a:hover, #nav .home_set a:active, #nav .news_set a:focus, #nav .news_set a:hover, #nav .news_set a:active, #nav .facts_set a:focus, #nav .facts_set a:hover, #nav .facts_set a:active, #nav .survey_set a:focus, #nav .survey_set a:hover, #nav .survey_set a:active {
  color: #000 !important;
  background-color: #fff !important;
}

/* @end */

/* @group Content */

#content {
  width: 37.625em;
  float: right;
}

#content.tickets {
  width: 36em;
  padding-right: 1em;
  float: right;
}

#content h1 {
  margin: 0 0 0.75em;
  padding: 0;
  color: #41545d;
  font-weight: normal;
  font-size: 1.5em;
  font-family: impact, sans-serif;
}

#content p {
  font-size: 0.75em;
  padding: 0 10px;
  margin: 0 0 0.618em;
  line-height: 130%;
  color: #000;
}

#content a {
  text-decoration: underline;
}

/* @group content left */

#content #contentmain {
  width: 28.5em;
  float: left;
  min-height: 28.5em;
}

#content #contentmain .news {
  width: 8.625em;
  background: #ededed;
  margin-bottom: 28px;
  margin-left: 10px;
  float: left;
  padding-bottom: 5px;
}

* html #content #contentmain .news {
  margin-left: 5px;
}

/* hack for IE margin-doubling bug */

#content #contentmain .news h2 {
  margin: 0;
  padding: 0 5px 1px 30px;
  font-size: 0.75em;
  color: #000;
  /* background: url(../after/img/headline_middle.png) no-repeat top left; */
  margin-bottom: 5px;
}

#content #contentmain .news h2 a {
  color: #000;
  text-decoration: none;
  display: block;
}

#content #contentmain .news h2 a:hover {
  color: #ba2710;
  background-image: none;
}

#content #contentmain .news h2 a:focus {
  color: #ba2710;
}

#content #contentmain .news p {
  font-size: 0.75em;
  margin: 0;
  padding: 0 5px;
  color: #000;
}

#content #contentmain p.image {
  font-size: 1em;
  width: 7.675em;
  overflow: hidden;
  margin-bottom: .3em;
}

#content a.more {
  /* background-image: url(../after/img/morearrow2.png); */
  background-position: right 3px;
  background-repeat: no-repeat;
  padding-right: 13px;
  display: block;
  text-align: right;
  margin-top: 5px;
}

#content a.more:hover {
  /* background: url(../after/img/morearrow2_a.gif) no-repeat right 3px; */
}

/* @end */

/* @group content right */

#content #contentright {
  width: 8.5em;
  float: right;
  border-left: 1px dashed #bdbcbc;
}

#content #contentright h2 {
  display: block;
  color: #000;
  margin: 0;
  background-color: #ededed;
  border-top: 1px dashed #bdbcbc;
  font-size: 0.75em;
  padding: 5px;
}

#content #contentright img {
  display: block;
  margin-bottom: 5px;
}

#content #contentright p {
  font-size: 0.75em;
  color: #000;
  padding: 0 5px;
  margin: 0;
}

/* @end */

/* @end */

/* @end */

ul.elsewhere {
  margin: 0 10px 1em 10px;
  padding: 0;
}

ul.elsewhere li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul.elsewhere li a {
  padding-left: 30px;
  /* background: url(../after/img/list_bullets.png) no-repeat top left; */
  font-size: 0.75em;
  min-height: 20px;
  display: block;
  display: inline-block;
  line-height: 20px;
}
ul.elsewhere li a:focus, ul.elsewhere li a:hover, ul.elsewhere li a:active {
  color: #333;
}

#content #contentright p.spacebelow {
  padding-bottom: 2em;
}

#footer p {
  clear: both;
  background: #ededed;
  font-size: 0.6125em;
  margin: 0;
  padding: 0 0.25em 0.25em;
  text-align: right;
}

q {
  quotes: '"' '"' '"' '"';
}

q:before {
  content: open-quote;
}

q:after {
  content: close-quote;
}

/* @group Info Stylesheets */

div.col-left {
  float: left;
  width: 48%;
}

div.col-right {
  float: right;
  width: 48%;
  padding-right: .5em;
}

#contentmain h1 {
  padding: 0 10px;
}

#contentmain.wide h1 {
  padding: 0;
  margin: 0 10px 0.75em;
}

#contentmain.wide h2, #contentmain h2.header {
  padding: 0 10px;
  color: #41545d;
  font-weight: normal;
  font-size: 1.4em;
  font-family: impact, sans-serif;
}

#contentmain.wide h3 {
  padding: 0 10px;
  margin-bottom: .5em;
  color: #41545d;
  font-weight: normal;
  font-size: 1em;
}

#contentmain.wide h2, #contentmain.wide h3 {
  clear: both;
}

#contentmain.wide h2.small {
  display: inline;
  padding: 0;
}

/* @group In the form */
#contentmain h2.header {
  margin: 1.5em 0 10px 0;
  clear: both;
}
/* @end */

.sfdtable {
  clear: both;
  color: #000;
  margin-bottom: 2em;
}

.sfdtable, .sfdtable th, .sfdtable td {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  padding: 5px;
  font-size: 0.9em;
}

.sfdtable th, caption {
  text-align: left;
  color: #000000;
  font-weight: bold;
}

#sffloat1 {
  float: left;
  width: 50%;
}

#sffloat2 {
  float: left;
  width: 45%;
  padding: 8px;
  padding-top: 0px;
}

#sfdatetable {
  font-family: arial, sans-serif;
  font-size: 0.9em;
  border: 1px solid Silver;
  border-collapse: collapse;
  padding: 5px;
  width: 18em;
  margin-right: 1em;
  text-align: left;
  vertical-align: top;
  color: #000;
}

#sfdatetable caption {
  text-align: center;
}

#sfdatetable th, #sfdatetable td {
  font-family: arial, sans-serif;
  font-size: 0.9em;
  border: 1px solid Silver;
  padding: 5px;
  text-align: left;
}

hr {
  background-color: silver;
  width: 100%;
  clear: both;
}

#content .sfbuy {
  clear: both;
  text-align: center;
  background: #ededed;
  font-family: arial, sans-serif;
  font-size: .8em;
  color: #000000;
  margin: 0;
  padding: .5em;
}

caption.head {
  padding: 2em 0 0;
  margin: 0;
  font-weight: normal;
  font-size: 1.4em;
  padding-bottom: 0px;
  color: #41545d;
  padding-top: 10px;
  font-family: impact, sans-serif;
}

tr.datahead {
  background-color: #c0c0c0;
}

#contentmain.wide h2, #contentmain.wide h1 {
  clear: both;
}

#content #contentmain.wide {
  width: 37.5em;
  float: left;
}

hr {
  background-color: silver;
  width: 100%;
  clear: both;
  margin: 20px 0;
}

.box img {
  float: left;
  margin: 0 10px 10px 0;
}

.box {
  margin: 1em 0;
  border: 1px dashed Silver;
  width: 100%;
  /* background: url(../after/img/headline_middle.png) no-repeat top left; */
}

.box h2, .box h3 {
  margin: 0;
  padding-left: 30px !important;
}

#yourshout {
  background-color: #ededed;
  margin: 30px 0 50px;
}

.fullimage img {
  float: none;
  display: block;
  margin: 0 auto;
}

.tickets .box {
  margin-bottom: 2em;
  background: none;
}

.boxcontent {
  font-size: .75em;
  color: #333;
  margin: 2em 0;
  line-height: 1.5;
}

.boxcontent h2 {
  padding: 0 !important;
}

.boxcontent li {
  margin: 1em 0;
}

div.image {
  font-size: 0.75em;
  color: #000;
  padding: 5px 0px 0px 30px;
  height: 1.8em;
  /* background: url(../after/img/headline_middle.png) no-repeat top left; */
  background-color: #ededed;
}

img.inline {
  float: left;
  margin-right: 5px;
}

#contentmain.wide h2#surveyresults {
  padding: 0;
}

.qtable {
  font-size: .8em;
  color: #000000;
  width: 90%;
  margin-bottom: 50px;
  border-collapse: collapse;
  border: 1px solid #888;
}

.qtable th, .qtable td {
  padding: 5px;
  border-collapse: collapse;
}

.qtable td, .qtable thead th {
  border-left: 1px solid #bbb;
}

.qtable thead th:first-child {
  border: none;
}

.qtable thead th, .qtable .alt {
  background-color: #ddd;
}

.qtable caption {
  text-align: left;
}

/* @end */

/* @group Survey */

.wide form {
  padding-right: 20px;
}

h2.space {
  padding: 0;
}

.cap {
  color: #000;
  font-weight: bold;
  font-size: 1em;
  background: #a9b8bf;
  padding: 0.1em 0 0.1em 0.1em;
}

.paddingh2 {
  margin-bottom: 1em;
}

.input {
  margin-bottom: 1em;

}

.spaceplus {
  margin-top: 2em;
}

fieldset {
  border: 2px solid #8c8c8c;
  color: #000; background: #f5f5f5;
  padding: 0.5em;
}

legend {
  font-size: 1em;
  font-weight: bold;
  color: #000; /* IE 6 bug */
}

.comment {
  margin-top: 1em;
}

label.foroption {
  text-align: right;
  float: left;
  margin-right: 5px;
  width: 5.5em;
}

.note {
  font-size: 0.9em;
  font-style: italic;
}

.italic {
  font-style: italic;
}

.red {color: #cc0000;}

#main .headline {
  margin-top: 0px;
  color: #41545d;
  font: 24px verdana;
  font-family: impact;
  text-decoration: none;
}

.minus {
  font-size: 0.7em; color: #000000;
}

.highlight {
  border-left: 3px solid #cc0000;
  border-bottom: 1px solid #cc0000;
}

p#submissionsuccess {
  border-left: 3px solid #86af36;
  border-bottom: 1px solid #86af36;
  margin: 2em 0 4em;
  padding-left: 7px;
  padding-right: 0;
  margin-right: 10px;
  font-size: 1em;
}

#submissionerrors {
  border: 3px solid #cc0000;
}

#submissionerrors p strong{
  color: #fff;
  background-color: #cc0000;
  padding: 1px 3px;
}

#submissionerrors ol li {
  color: #333;
  font-size: .8em;
}

form {
  padding: 0;
  margin: 0;
}

fieldset {
  margin-bottom: 1em;
  margin-top: .5em;
}

#content .contentmain form h2 {
  margin: 1.5em 0 0;
}

legend {
  font-size: .8em;
}

input#submit {
  margin-right: .5em;
}

select#qkmenu {
  margin-right: .1em;
}

/* @end */

/* @group Empty Elements for Borders */

#border_t {
  /* background: url(../after/img/border_top.gif) repeat-x; */
  margin: 0px 10px 0 10px;
  height: 10px;
  line-height: 10px;
  font-size: 3px;
}

#border_l {
  /* background: url(../after/img/border_left.gif) left repeat-y; */
  padding-left: 10px;
}

#border_b {
  /* background: url(../after/img/border_bottom.gif) repeat-x; */
  margin: 0 10px 0 10px;
  height: 10px;
  line-height: 10px;
  font-size: 3px;
}

#border_r {
  /* background: #fff url(../after/img/border_right.gif) right repeat-y; */
  padding-right: 10px;
}

</style>
/* @end */