# Data Model: ROS 2 Nervous System Educational Module

**Feature**: 1-ros2-nervous-system
**Created**: 2025-12-14

## Entity Relationships

```
[Module] 1 -- * [Chapter]
[Chapter] 1 -- * [CodeExample]
[Chapter] 1 -- * [VisualElement]
[Student] 1 -- * [Progress]
[Module] 1 -- * [Progress]
```

## Entity Definitions

### Module
- **ID**: Unique identifier for the module (string, required)
- **Title**: "ROS 2 Nervous System Educational Module" (string, required)
- **Description**: Educational content explaining ROS 2 concepts using biological nervous system analogies (string, required)
- **TargetAudience**: "Beginners & Students" (string, required)
- **Duration**: Estimated time to complete the module in minutes (integer, optional)
- **Chapters**: Array of Chapter IDs in the order they should be presented (array of strings, required)
- **LearningObjectives**: Array of high-level learning objectives (array of strings, required)

### Chapter
- **ID**: Unique identifier for the chapter (string, required)
- **ModuleID**: Reference to parent module (string, required)
- **Title**: Chapter title (string, required)
- **Subtitle**: Brief description of the chapter content (string, optional)
- **Content**: Markdown content of the chapter (500-800 words) (string, required)
- **Position**: Order of the chapter in the module (1-4) (integer, required)
- **LearningObjectives**: Array of specific learning objectives for the chapter (array of strings, required)
- **AnalogiesUsed**: List of biological analogies used in the chapter (array of strings, required)
- **Keywords**: Array of important terms covered in the chapter (array of strings, required)
- **EstimatedReadingTime**: Estimated time to read the chapter in minutes (integer, required)

### CodeExample
- **ID**: Unique identifier for the code example (string, required)
- **ChapterID**: Reference to parent chapter (string, required)
- **Title**: Brief description of what the code example demonstrates (string, required)
- **Code**: Simplified Python code (focusing on logic, not boilerplate) (string, required)
- **Explanation**: Text explaining the code example and its purpose (string, required)
- **Language**: Programming language ("Python" for this module) (string, required)
- **Type**: Category of code pattern ("Publisher", "Subscriber", "Service", "Client", "Loop Logic") (string, required)
- **Focus**: What the example emphasizes ("Logic", "Communication", "Structure") (string, required)
- **HasImportOmissions**: Boolean indicating if import statements were omitted for clarity (boolean, required)

### VisualElement
- **ID**: Unique identifier for the visual element (string, required)
- **ChapterID**: Reference to parent chapter (string, required)
- **Type**: Category of visual ("Mermaid Diagram", "SVG Illustration", "Process Flow", "System Architecture") (string, required)
- **Content**: The actual diagram/image content (string, required)
- **AltText**: Alternative text for accessibility (string, required)
- **Caption**: Descriptive caption (string, required)
- **PositionInChapter**: Where the visual appears relative to other content (integer, required)
- **Width**: Preferred display width as percentage (integer, required)
- **Interactive**: Whether the visual has interactive elements (boolean, required)

### Student
- **ID**: Unique identifier for the student (string, required)
- **DisplayName**: Name to display to the student (string, optional)
- **Preferences**: Object containing display and accessibility preferences (object, optional)
  - fontSize: "small", "normal", "large" (string)
  - theme: "light", "dark", "auto" (string)
  - contrast: "normal", "high" (string)
- **RegistrationDate**: When the student account was created (ISO date string, required)
- **LastAccessDate**: When the student last accessed the module (ISO date string, optional)

### Progress
- **ID**: Unique identifier for the progress record (string, required)
- **StudentID**: Reference to the student (string, required)
- **ModuleID**: Reference to the module (string, required)
- **ChaptersCompleted**: Array of completed chapter IDs (array of strings, required)
- **CurrentChapterID**: The chapter the student is currently on (string, optional)
- **StartDate**: When the student started the module (ISO date string, required)
- **LastAccessDate**: When the student last accessed the module (ISO date string, required)
- **TimeSpent**: Total time spent on the module in minutes (integer, required)
- **AssessmentScores**: Object mapping chapter IDs to scores (object, optional)
- **CompletionStatus**: "Not Started", "In Progress", "Completed" (string, required)

## Validation Rules

### Module Validation
- Title must be between 10 and 100 characters
- Description must be between 50 and 500 characters
- Chapters array must contain exactly 4 chapter IDs
- Learning objectives must contain at least 3 items
- Duration must be between 60 and 180 minutes

### Chapter Validation
- Title must be between 5 and 50 characters
- Content must be between 500 and 800 words
- Position must be between 1 and 4
- Learning objectives must contain at least 2 items
- EstimatedReadingTime must be between 5 and 15 minutes

### CodeExample Validation
- Title must be between 5 and 100 characters
- Code content must be between 5 and 50 lines
- Language must be "Python" for this module
- Type must be one of the allowed values
- Explanation must be between 20 and 500 characters

### VisualElement Validation
- Type must be one of the allowed values
- AltText must be between 10 and 200 characters
- Caption must be between 10 and 100 characters
- Width must be between 25 and 100 (percent)
- Content must not exceed 100KB in size

### Progress Validation
- CompletionStatus must be one of the allowed values
- TimeSpent must be >= 0
- ChaptersCompleted must be a subset of the module's chapters
- StartDate must be before or equal to LastAccessDate