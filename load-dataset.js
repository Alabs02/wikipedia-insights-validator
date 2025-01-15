const fs = require("fs");
const sax = require("sax");

const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const datasetFilePath = "./data/simplewiki-latest-pages-articles-multistream.xml";
const outputFilePath = "./data/processed-dataset.json";

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

const parser = sax.createStream(true, { trim: true });

let articles = [];

let currentArticle = null;
let currentTag = null;

let isFirstOpenTag = true;
let isFirstCloseTag = true;
let isFirstText = true;
let textCounter = 0;

// Simple Benchmarking
console.time("Processing Time");

parser.on("opentag", (tag) => {
  currentTag = tag.name;

  if (tag.name === "page") {
    currentArticle = { id: null, title: null, content: null, comment: "" };
  }

  if (isFirstOpenTag && textCounter <= 20) {
    console.log({ tag });
  } else {
    isFirstOpenTag = false;
  }
});

parser.on("text", (text) => {
  textCounter++;

  if (isFirstText && textCounter <= 20) {
    // console.log({ text });
  } else {
    isFirstText = false;
  }

  if (!currentArticle) return;

  switch (currentTag) {
    case "id":
      if (!currentArticle.id) currentArticle.id += text;
      break;
    case "title":
      if (!currentArticle.title) currentArticle.title += text;
      break;
    case "text":
      if (!currentArticle.content) currentArticle.content += text;
      break;
  }
});

parser.on("comment", (comment) => {
  if (currentArticle) {
    currentArticle.comment = comment;
  }
});

parser.on("closetag", (tagName) => {
  if (tagName === "page" && currentArticle) {
    fs.appendFileSync(outputFilePath, JSON.stringify(currentArticle) + "\n");

    // Add the article to the articles array if it has less than 2000 items
    if (articles.length < 1000) {
      articles.push(currentArticle);
    }

    currentArticle = null;
  }

  if (isFirstCloseTag && tagName === "page") {
    console.log({ tagName });
    isFirstCloseTag = false;
  }
});

parser.on("end", () => {
  currentTag = null;
  console.timeEnd("Processing Time");
  console.log("Parsing complete.");
  console.log("First 20 articles:", articles.slice(0, 20));

  isFirstOpenTag = true;
  isFirstCloseTag = true;
})

const stream = fs.createReadStream(datasetFilePath, { encoding: "utf-8" });

stream.on("error", (err) => {
  console.error("Error reading file:", err);
});

stream.pipe(parser);

const keyword = "science";

const queryDatasetByKeyword = () => {
  const matches = articles.filter((article) => {
    article.content.toLowerCase().includes(keyword.toLowerCase());
  });

  console.log(`Found ${matches.length} articles about ${keyword}`);
  matches.forEach((match, index) => console.log(`${index + 1}. ${match.title}`));
  return matches;
}

const askLLM = async (question) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    max_tokens: 100
  }); 

  return response.data.choices[0].text.trim();
}

const validateResponse = (response, expectedKeyword) => {
  return response.includes(expectedKeyword) ? "Valid response" : "Invalid Response";
}

const execute = async () => {
  const matches = queryDatasetByKeyword();

  const question = `Explain the article titled ${matches[0].title}`;

  const response = await askLLM(question);

  console.log(validateResponse(response, keyword));
}


