<template>
  <section>
    <h1>Nuestro Instagram</h1>
    <div id="instafeed" class="instafeed"></div>
  </section>
</template>

<script>
import Instafeed from "instafeed.js";

let feed = new Instafeed({
  get: "user",
  userId: "1684743009",
  accessToken: "1684743009.1677ed0.4fd4f64af4a24621b0faecec5d269b01",
  limit: "12",
  resolution: "standard_resolution",
  template:
    '<div class="instagram__pics">  <a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" />  <div class="info__feed">  <div class="feed__likes"><img class="social-logo" src="/icons/likes.png" alt="like icon"/><span>{{likes}}</span></div>  <div class="feed__comments"><img class="social-logo" src="/icons/comments.png" alt="comments icon"/><span>{{comments}}</span></div>  </div>  </a>  </div>'
});
feed.run();

export default {
  beforeMount: function() {
    return {
      instafeed: feed.run()
    };
  }
};
</script>

<style>
h1 {
  text-align: center;
  margin: 30px 0;
}
.instafeed {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.instagram__pics {
  position: relative;
  width: 25rem;
}
.instafeed > :nth-child(3n-1) {
  margin: 0 25px;
}
.instafeed > :nth-child(n + 4) {
  margin: 25px 0 0 0;
}
.instagram__pics a {
  text-decoration: none;
  color: inherit;
  width: inherit;
}
.instagram__pics a img {
  width: inherit;
}
.info__feed {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 0;
  color: #fff;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.55);
  transition: height 0.35s;
  overflow: hidden;
}
.instagram__pics:hover .info__feed {
  height: 100%;
}
.feed__likes,
.feed__comments {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  font-size: 1.25em;
  padding: 10px 15px;
}
.feed__likes span,
.feed__comments span {
  padding: 0 7px;
}
</style>