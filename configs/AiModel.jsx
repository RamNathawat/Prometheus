/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course tutorial on following detail with field as Course Name, Description, along with chapter name, about, duration:Category:'Programming', Topic:Python, Level:Basic, Duration:1 hours, NoOf Chapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"CourseName\": \"Python Programming Fundamentals\",\n  \"Description\": \"This course introduces the fundamentals of Python programming for beginners. You will learn about variables, data types, operators, control flow, and functions. By the end of the course, you will be able to write simple Python programs to solve basic problems.\",\n  \"Chapters\": [\n    {\n      \"ChapterName\": \"Introduction to Python\",\n      \"About\": \"This chapter covers the basics of Python programming, including installation, running code, and basic syntax.\",\n      \"Duration\": \"20 minutes\"\n    },\n    {\n      \"ChapterName\": \"Variables and Data Types\",\n      \"About\": \"This chapter explains how to work with variables, different data types in Python, and how to perform basic operations on them.\",\n      \"Duration\": \"25 minutes\"\n    },\n    {\n      \"ChapterName\": \"Operators and Expressions\",\n      \"About\": \"This chapter covers various operators in Python, including arithmetic, comparison, logical, and assignment operators. It also explains how to build expressions using these operators.\",\n      \"Duration\": \"15 minutes\"\n    },\n    {\n      \"ChapterName\": \"Control Flow Statements\",\n      \"About\": \"This chapter introduces conditional statements (if-else) and loops (for, while) in Python. You will learn how to write code that executes different blocks based on specific conditions.\",\n      \"Duration\": \"20 minutes\"\n    },\n    {\n      \"ChapterName\": \"Functions\",\n      \"About\": \"This chapter explains how to define and call functions in Python. You will learn how to pass arguments to functions and return values from them.\",\n      \"Duration\": \"10 minutes\"\n    }\n  ],\n  \"Category\": \"Programming\",\n  \"Topic\": \"Python\",\n  \"Level\": \"Basic\",\n  \"Duration\": \"1 hour\",\n  \"NoOfChapters\": 5\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
