# 🌟 Wikipedia Insights Validator

Welcome to **Wikipedia Insights Validator**, a project designed to showcase the power of Large Language Models (LLMs) in extracting, interacting with, and validating information from open-source datasets like Wikipedia. This repository is a testament to the harmony between AI and data-driven solutions.

## 🚀 Project Aim
The primary objective of this project is to:
- Query an open-source dataset (Wikipedia Dumps).
- Interact with a Large Language Model (LLM) to answer dataset-related questions.
- Validate and provide constructive feedback on the LLM's responses.

Through this, the project demonstrates the potential of AI in modern problem-solving and knowledge validation.

---

## 🔧 Tools and Technologies
This project leverages a variety of powerful tools and frameworks:
- **Node.js**: The backbone for server-side scripting and application logic.
- **OpenAI API**: For querying and interacting with the GPT-based LLMs.
- **sax**: For streaming, parsing and processing XML-based Wikipedia Dumps.
- **dotenv**: For securely managing API keys and environment variables.
- **fs**: Node.js File System module to handle dataset files.
- **Wikipedia Dumps**: An open-source treasure trove of structured and unstructured knowledge.

---

## ✨ Features
1. **Dataset Integration**:
   - Parses Wikipedia Dumps for structured data.
   - Extracts articles based on custom queries.
   - **Download the simplewiki dataset [here](https://dumps.wikimedia.org/simplewiki/latest/simplewiki-latest-pages-articles-multistream.xml.bz2)**

2. **AI Interaction**:
   - Queries OpenAI's LLMs for insights related to the dataset.
   - Asks context-based questions about Wikipedia articles.

3. **Validation Mechanism**:
   - Validates LLM responses for accuracy, completeness, and relevance.
   - Provides structured feedback to improve interaction quality.

4. **Scalability**:
   - Designed with modular architecture for easy expansion and feature addition.

---

## 📂 Project Structure

📁 wikipedia-insights-validator/ ├── 📄 .env # Environment variables (API keys, etc.) ├── 📄 📁 data ├── loadDataset.js # Core script for parsing and querying dataset ├── 📄 package.json # Project dependencies and scripts ├── 📄 README.md # Project documentation ├── 📄 server.js # Optional: Web interface for querying LLMs └── 📄 queryLLM.js # LLM query interaction logic

---

## 🌟 How to Get Started
1. **Clone the repository:**

  ```bash
    git clone git@github.com:Alabs02/wikipedia-insights-validator.git
  ```

  ```bash
    cd wikipedia-insights-validator
  ```

2. **Install dependencies:**
  ```bash
    pnpm install
  ```

  **OR**

  ```bash
    npm i -S
  ```

3. **Set up your environment:**

  - Obtain your OpenAI API key.
  - Create a ==.env== file and add:

  ```env
    OPENAI_API_KEY=your_api_key_here
  ```
4. **Run the script:**
  ```bash
    pnpm dev
  ```

  **OR**

  ```bash
    npm run dev
  ```
---

## 🌐 Demo Use Cases
  - **Educational AI Assistants**: Enhance the way students learn by validating LLM-driven insights.
  - **Knowledge Validation**: Automatically fact-check AI-generated content against authoritative datasets.
  - **AI Research**: Benchmark LLM performance on open-source data.

---

## 🤝 Contributions

Contributions are welcome! If you’d like to add features, improve existing ones, or fix bugs, feel free to open a PR.

---

## 📜 License

This project is licensed under the MIT License.

---


## 🔗 Connect

If you have any questions or suggestions, feel free to connect:
  - [**Porfolio**](https://alabura.com?ref=github)
  - [**LinkedIn Profile**](https://www.linkedin.com/in/usmanunfolds/)
  - **Email**: <a href="mailto:usmanunfolds@alabura.com">usmanunfolds@alabura.com</a>

