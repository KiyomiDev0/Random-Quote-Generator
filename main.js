let index = 0;
randomquote.addEventListener("click", (eo) => {
  const citeArr = [
    `Prophet Muhammad`,
    `Prophet Muhammad`,
    `Prophet Muhammad`,
    `Prophet Muhammad`,
    `Prophet Muhammad`,
    `Omar Bin Al Khattab`,
    `Omar Bin Al Khattab`,
    `Omar Bin Al Khattab`,
    `Omar Bin Al Khattab`,
    `Omar Bin Al Khattab`
  ];
  const qouteBlockArr = [
    `&ldquo; Do not waste water even if you were at a running stream. &rdquo;`,
    `&ldquo; The best richness is the richness of the soul. &rdquo;`,
    `&ldquo; speak a good word or remain silent. &rdquo;`,
    `&ldquo; The Strong man is not the good wrestler, the strong man is only the one who controls himself when he is angry. &rdquo;`,
    `&ldquo; Fulfill the trust for the one who entrusted you and do not cheat the one who cheated you. &rdquo;`,
    `&ldquo; The most beloved of people to me is he that points out my flaws to me. &rdquo;`,
    `&ldquo; I have never regretted my silence, as for my speech I’ve regretted it many times. &rdquo;`,
    `&ldquo; Patience is the healthiest ingredient of our life. &rdquo;`,
    `&ldquo; Don’t forget your own self while preaching to others &rdquo;`,
    `&ldquo; No amount of guilt can change the past and no amount of worrying can change the future. &rdquo;`,
  ]
  cite.innerHTML = citeArr[index];
  qouteBlock.innerHTML = qouteBlockArr[index];
  index++;
  if (index == qouteBlockArr.length) {
    index = 0;
  }
});

sound.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${qouteBlock.innerHTML}   by ${cite.innerHTML}`);
  speechSynthesis.speak(utterance);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(qouteBlock.innerHTML);
});

twitter.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${qouteBlock.innerHTML}`;
  window.open(tweetUrl, "_blank");
});