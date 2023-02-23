"use strict";
// document.addEventListener("DOMContentLoaded", () => {});
// const ak = "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";

document.addEventListener("DOMContentLoaded", function () {
  // lang
  // const lang = document.querySelector(".footer__lang"),
  //   langSelect = document.querySelector(".footer__lang-select");

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const main = async () => {
    const question = "How does a telescope work?";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      temperature: 0,
      // max_tokens: 100,
      // top_p: 1,
      // frequency_penalty: 0.0,
      // presence_penalty: 0.0,
      // stop: ["\n"],
    });

    console.log(completion);
  };

  main();

  // this.addEventListener("click", (e) => {});

  // lang.addEventListener("click", () => {
  //   langSelect.style.display = "block";
  // });
  // langSelect.addEventListener("click", () => {
  //   langSelect.style.display = "none";
  // });

  // scroll
  // const scrollUp = document.querySelector(".scroll-up");

  // function myFunction() {
  //   if (
  //     document.body.scrollTop > 870 ||
  //     document.documentElement.scrollTop > 870
  //   ) {
  //     scrollUp.style.display = "block";
  //   } else {
  //     scrollUp.style.display = "none";
  //   }
  // }
  // window.onscroll = function () {
  //   myFunction();
  // };

  //
});
