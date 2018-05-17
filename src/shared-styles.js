
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


import { PolymerElement, html } from '@polymer/polymer/polymer-element';

export const SharedStyles = html`

<style>
/*
$color-base: #fff;
$color-blue: #34495E;
$color-pass: #F54B5E;
$color-like: #48D2A0;
$color-para: #9B9B9B;
$color-fb: #3b5998;
*/

@mixin mobile {
  @media (max-width: 480px) {
    @content;
  }
}

@mixin mobile-sm {
  @media (max-width: 360px) {
    @content;
  }
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
  outline: 0;
}
body {
  line-height: 1.25;
  color: black;
  background: white;
}
ol, ul {
  list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
strong {
  font-weight: bold;
}
table {
  border-collapse: separate;
  border-spacing: 0;
}
caption, th, td {
  text-align: left;
  font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
}
blockquote, q {
  quotes: "" "";
}

html {
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  background: #fff;
}

body {
  z-index: 0;
  font-family: 'Lato';
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}

button {
  cursor: pointer;
  background: none;
  border: 0;
  color: inherit;
  /* cursor: default; */
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button; /* for input */
  -webkit-user-select: none; /* for button */
     -moz-user-select: none;
      -ms-user-select: none;
}
input::-moz-focus-inner,
button::-moz-focus-inner {
    border: 0;
    padding: 0;
}

button.btn {
  height: 44px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  padding: 0 24px;
}

p > a {
  text-decoration: none;
  color: #4267B2;
  cursor: pointer;
}
p > a:visited, p > a:hover, p > a:active {
  text-decoration: none;
  color: #4267B2;
  cursor: pointer;
}

.fb-share-button, .button--facebook {
  transform: scale(1.2);
  display: inline-block!important;
}

.fb_iframe_widget span {
  display: inline-block;
  position: relative;
  text-align: justify;
  padding: 2px 10px;
}
/*Fb share button End */
.background {
  background: url("../img/home_1_lg.jpg") no-repeat scroll center center;
  background-size: cover;
  height: 400px;
  width: calc(100% + 12px);
  position: absolute; 
  z-index: -2;
  top: -5px;
  right: -5px;
  left: -5px;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    height: 400px;
    width: 100%;
    z-index: -1;
    background: rgba(0,0,0,0.25);
    content: " ";
  }
  &__border-bottom {
    background: #fff;
    height: 16px;
    width: calc(100% + 12px);
    position: absolute; 
    z-index: -2;
    top: 392px;
    right: -5px;
    left: -5px;
  }
}
/* Wrapper with padding */

.fb.btn {
  position: relative;
  background: $color-fb;
  color: white;
  &:hover {
    background: $color-fb;
    color: white;      
  }
  i {
    position: absolute;
    left: 15px;
    top: 14px;
  }
}

.button--play {
  width: 180px;
  margin: 0 auto;
  background: $color-like;
  color: #fff;
  z-index: 2;
  margin-top: 10px;
  &:hover {
    background: $color-like;
    color: #fff;
    z-index: 2;
  }
}

.link {
  width: 180px;
  margin: 0 auto;
  padding: 10px;
  padding-top: 2px;
  background: transparent;
  color: #2d6eb2;
  z-index: 2;
  &:hover {
    background: transparent;
    color: #2d6eb2;
    z-index: 2;
  }
}

.nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @include mobile {
    padding: 10px;
    padding-bottom: 0;
  }
  .nav__logo {
    .logo__shack {
      color: $color-base;
      margin-right: 10px;
      font-size: 30px;
      text-align: left;
      font-family: 'Amatic SC', cursive;
    }
    .logo__mansion {
      color: $color-base;
      line-height: 50px;
      font-size: 34px;
      text-align: left;
      font-family: 'Tangerine', cursive;
    }
  }
  .nav__social {
    .button--facebook {
      margin-right: 10px;
      margin-top: 4px;
      background: url("../img/fb-share.png") no-repeat center center;
      background-size: cover;
      height: 32px;
      width: 93px;
      position: relative;
      border-radius: 3px;
      overflow: hidden;
    }
  }
}
.wrapper {
  height: calc(100% - 220px);
  padding: 20px;
  @include mobile {
    padding: 20px 10px;
    height: calc(100% - 160px);
  }
}

#main {
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  ul {
    margin: 0;
    position: relative;
    display: block;
    height: 100%;
    list-style-type: none  
  }
  li {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    .listings__item {
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(#000, 0.15);
      overflow: hidden;
      text-align: center;
      padding: 10px 10px 10px 10px;
      background: #fff;
      font-size: 24px;
      color: #222;
      position: relative;
      top: 0;
      left: 0;
      display: block;
      transition: transform 700ms ease, background 700ms ease;
    }
    &.active { 
      z-index: 5;
      .listings__item {
        display: list-item;
      }
    }  
    &.next {
      z-index: 2;
      .listings__item {
        background: #F8F8F8;
        transform: scale(0.95) translate(0, 16px);
        display: list-item;
      }
    }
    &.last {
      z-index: 1;
      .listings__item {
        background: #EDEDED;
        transform: scale(0.9) translate(0, 32px);
        display: list-item;
      }
    }
    h2 {
      color: #fff;
      font-size: 30px;
      text-align: center;
      position: absolute;
      top: 40%;
      left: 0;
      width: 100%;
      text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .slide {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    z-index: 5;
    position: absolute;
    transform: translate(3200px, 0);
    //transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(#000, 0.15);
    overflow: hidden;
    text-align: center;
    padding: 10px 10px 10px 10px;
    background: #fff;
    color: #222;
    top: 0;
    left: 0;
    transition: transform 700ms ease, background 700ms ease;
    &.display {
      transform: translate(0, 0);
    }
    .slide__start {
      height: 100%;
      position: relative;
      font-size: 18px;
      display: none;
      flex-direction: column;
      justify-content: center;
      background: url("../img/1.jpg") no-repeat scroll center center;
      background-size: cover;
      p {
        font-size: 18px;
        color: $color-base;
        z-index: 2;
        max-width: 500px;
        margin: 15px auto;
        padding: 0 10px;
        @include mobile-sm {
          margin: 10px auto;
        } 
      }
      .button--play {
        width: 180px;
        margin: 0 auto;
        background: $color-like;
        color: #fff;
        z-index: 2;
        margin-top: 10px;
        &:hover {
          background: $color-like;
          color: #fff;
          z-index: 2;
        }
      }
      &.display {
        display: flex;
      }
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 0;
        background: rgba(0,0,0,0.5);
        content: " ";
      }
    }
    .slide__message {
      height: 100%;
      position: relative;
      //font-size: 18px;
      display: none;
      flex-direction: column;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      &.display {
        display: flex;
      }
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 0;
        background: rgba(0,0,0,0.5);
        content: " ";
      }
      h1,h2,p, .btn {
        z-index: 2;
      }
      .Mansion {
        font-family: 'Tangerine', cursive;
        font-size: 48px;
        color: $color-base;
        margin-top: 30px;
        @include mobile-sm {
          margin-top: 20px;
        } 
      }
      .Shack {
        font-family: 'Amatic SC', cursive;
        font-size: 40px;
        color: $color-base;
        margin-top: 30px;
        @include mobile-sm {
          margin-top: 20px;
        } 
      }
      .correct {
        margin-bottom: 10px;
        color: $color-like;
        font-size: 40px;
        @include mobile-sm {
          margin-bottom: 0;
        } 
      }
      .error {
        margin-bottom: 10px;
        color: $color-pass;
        font-size: 40px;
        @include mobile-sm {
          margin-bottom: 0;
        } 
      }  
      p {
        max-width: 500px;
        margin: 0 auto;
        color: $color-base;
        padding: 0 10px;
      }
      .next-btn {
        border: 3px solid $color-base;
        color: $color-base;
        width: 180px;
        margin: 0 auto;
        margin-top: 40px;
        @include mobile-sm {
          margin-top: 30px;
        } 
        &:hover {
          width: 180px;
          margin: 0 auto;
          margin-top: 40px;
          border: 3px solid $color-base;
          color: $color-base;
          @include mobile-sm {
            margin-top: 30px;
          }         
        }
      }
    }  
    .slide__finish {
      height: 100%;
      position: relative;
      //font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      &.display {
        display: flex;
      }
      .button {
        position: relative;
        width: 114px;
        margin: 20px auto 0;
      }
      button, h2, .fb-share-button, p {
        margin-top: 20px;
      }
      .fb_iframe_widget span {
        border-radius: 3px;
        background-color: #4267B2;
      }
      h2 {
        font-size: 24px;
        &.finish__count {
          font-weight: bold;
        }
      }
    }
  }
  .like {
    background: url("../img/mansion.png") no-repeat scroll 0 0;
    opacity: 0;
    height: 80px;
    position: absolute;
    width: 170px;
    left: 45px;
    top: 40px;
    z-index: 1;
    overflow: hidden;
    -webkit-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -moz-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -ms-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -o-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .dislike {
    background: url("../img/shack.png") no-repeat scroll 0 0;
    opacity: 0;
    height: 80px;
    position: absolute;
    width: 170px;
    left: 45px;
    top: 40px;
    z-index: 1;
    overflow: hidden;
    -webkit-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -moz-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -ms-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -o-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    right: 45px;
    left: auto;
  }
  .img {
    height: 100%;
    width: 100%;
    margin-bottom: 5px;
    position: relative;
    -webkit-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -moz-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -ms-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    -o-transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0%, 0, 0) scale3d(1, 1, 1);
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    -webkit-transform-style: preserve-3d;
  }
}

/* Image text */

/* Image rotation */

/* Like & dislike badge images */

/* Image container */

/* Action - buttons */

.actions {
  width: 480px;
  margin: 0 auto;
  overflow: hidden;
  @include mobile {
    width: 320px;
  }
  div {
    width: 50%;
    float: left;
    position: relative;
    display: inline-block;
    margin-right: -4px;  
    align-items: center;
    display: flex;
    &.action__shack {
      button {
        float: right;
      }
      p {
        display: inline-block;
        margin-top: 1px;
        margin-bottom: 0;   
        float: right;
      }
      justify-content: flex-end;
      float: left;
      color: $color-para;
      font-size: 18px;
      text-align: right;
    }
    &.action__mansion {
      button {
        float: left;
      }
      p {
        display: inline-block;
        margin-top: 1px;   
        margin-bottom: 0;   
        float: left;
      }
      justify-content: flex-start;
      color: $color-para;
      font-size: 18px;
      text-align: left;
    }
  }
  button {
    i {
      float: left;
      width: 50px;
    }
    &.button--dislike { 
      background: $color-pass; 
    }
    &.button--like { 
      background: $color-like; 
    }
    color: #fff;
    display: inline-block;
    box-shadow: inset 0 0 0 1px $color-base;
    width: 50px; height: 50px;
    padding: 0; margin: 0 20px;
    outline: 0; border: 0;
    border-radius: 99em;
    position: relative;
    text-align: center;
    line-height: 144px;
    border-radius: 50%;
    outline: none;
    transition: all 150ms ease;
    font-size: 16pt;
    cursor: pointer;
  }
}

.category {
  div {
    width: 50%;
    float: left;
  }
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
  p {
    display: inline-block;
    margin-top: 1px;
    &.crackhouse {
      color: $color-pass;
      margin-right: 30px;
      font-size: 30px;
      text-align: right;
      font-family: 'Permanent Marker', cursive;
    }
    &.mansion {
      color: $color-like;
      margin-left: 30px;
      line-height: 50px;
      font-size: 34px;
      text-align: left;
      font-family: 'Amatic SC', cursive;
    }
  }
}

.controls {
    position: absolute;
    clear: both;
    bottom: 0;
    width: 100%; height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    li { margin: 0 20px;
      button {
        cursor: pointer;
        width: 50px; height: 50px;
        padding: 0; margin: 0;
        outline: 0; border: 0;
        border-radius: 99em;
        background: rgba($color-base, 0.3);
        box-shadow: inset 0 0 0 1px $color-base;
        transition: all 150ms ease;
        font-size: 16pt;
        text-align: center;
        &:hover, &:active {
          background: rgba($color-base, 0.6);
          box-shadow: inset 0 0 0 3px $color-base;
        }
      }
      &.pass button { color: $color-pass; }
      &.like button { color: $color-like; }
    }
  }
/* jTinder images */

#tinderslide {
  .img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
    /*

  .pane5 .img {
    background: url("../img/home_1.jpg") no-repeat scroll center center;
    background-size: cover;
  }
  .pane4 {
    .img {
      background: url("../img/pane/pane4.jpg") no-repeat scroll center center;
      background-size: cover;
    }
  }
  .pane3 {
    .img {
      background: url("../img/pane/pane3.jpg") no-repeat scroll center center;
      background-size: cover;
    }
  }
  .pane2 {
    .img {
      background: url("../img/pane/pane2.jpg") no-repeat scroll center center;
      background-size: cover;
    }
  }
  .pane1 {
    .img {
      background: url("../img/home_1.jpg") no-repeat scroll center center;
      background-size: cover;
    }
  }
    */

}

/* jTinder status text */

#status {
  //text-align: center;
  font-size: 18px;
  font-family: arial;
  margin-top: 30px;
  font-weight: bold;
}


@for $i from 14 through 3 {
  $width: $i * 120px;

  @media (max-width: $width) {

    .home-header .noo-text-block {
      height: $width * 0.5625;
    }
  }
}    


/*
.items {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 50px;
  .item {
    position: absolute;
    top: 50%; left: 50%;
    width: calc(100% - 50px); height: calc(100% - 50px);
    border-radius: 5px;
    background-color: $color-base;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14104/712.GIF');
    background-position: center;
    background-repeat: no-repeat;
    display: none;
    box-shadow: 0 1px 3px rgba(#000, 0.15);
    transform: translate(-50%, -50%) scale(1);
    transition: all 1000ms ease;
    &.active { z-index: 5; }
    &.next {
      top: calc(50% + 12px);
      opacity: 0.6;
      z-index: 2;
      transform: translate(-50%, -50%) scale(0.95);
    }
    &.last {
      top: calc(50% + 24px);
      opacity: 0.3;
      z-index: 1;
      transform: translate(-50%, -50%) scale(0.9);
    }
    &.remove, &.save {
      opacity: 0;
      z-index: 999;
      transition-duration: 500ms;
    }
    &.remove { transform: translate(-200%, -50%) rotate(-25deg) scale(0.6); }
    &.save { transform: translate(100%, -50%) rotate(25deg) scale(0.6); }
    .photo {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      margin: 5px;
      border-radius: 3px;
      background-position: center center;
      background-size: cover;
    }
    .caption {
      cursor: default;
      position: absolute;
      left: 0; right: 0; bottom: 0;
      margin: 5px;
      background: rgba($color-base, 0.9);
      .info { padding: 10px;
        .name { font-weight: 700; text-transform: capitalize; }
        .age { font-size: 75%; font-weight: 600; text-transform: uppercase; }
      }
    }
  }
}
*/
</style>
`;