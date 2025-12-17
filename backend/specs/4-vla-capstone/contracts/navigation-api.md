# API Contracts: Vision-Language-Action (VLA) & Capstone Educational Module

**Feature**: 4-vla-capstone
**Created**: 2025-12-14

## Navigation API

Since this is a static educational module, traditional APIs are not required. However, we define the following interface contracts for client-side navigation functionality:

### Navigation Service

#### getNextChapter(currentChapterId)
- **Description**: Returns the next chapter or null if at the last chapter
- **Method**: GET
- **Path**: `/api/navigation/next/{currentChapterId}`
- **Parameters**: 
  - currentChapterId (path, required): The ID of the current chapter
- **Response Codes**:
  - 200: Success with next chapter details
  - 404: Chapter not found
- **Response Schema**:
  ```json
  {
    "id": "string",
    "title": "string",
    "moduleId": "string",
    "position": "integer"
  }
  ```

#### getPrevChapter(currentChapterId)
- **Description**: Returns the previous chapter or null if at the first chapter
- **Method**: GET
- **Path**: `/api/navigation/prev/{currentChapterId}`
- **Parameters**: 
  - currentChapterId (path, required): The ID of the current chapter
- **Response Codes**:
  - 200: Success with previous chapter details
  - 404: Chapter not found
- **Response Schema**:
  ```json
  {
    "id": "string",
    "title": "string",
    "moduleId": "string",
    "position": "integer"
  }
  ```

#### getProgress(studentId, moduleId)
- **Description**: Returns completion status for the module by the student
- **Method**: GET
- **Path**: `/api/progress/{studentId}/{moduleId}`
- **Parameters**: 
  - studentId (path, required): The ID of the student
  - moduleId (path, required): The ID of the module
- **Response Codes**:
  - 200: Success with progress details
  - 404: Progress record not found
- **Response Schema**:
  ```json
  {
    "id": "string",
    "studentId": "string",
    "moduleId": "string",
    "chaptersCompleted": ["string"],
    "currentChapterId": "string",
    "startDate": "string",
    "lastAccessDate": "string",
    "timeSpent": "integer",
    "completionStatus": "string"
  }
  ```

## Search API

#### search(term)
- **Description**: Returns list of relevant content matches for a given search term
- **Method**: GET
- **Path**: `/api/search`
- **Parameters**: 
  - term (query, required): The search term
- **Response Codes**:
  - 200: Success with search results
- **Response Schema**:
  ```json
  {
    "results": [
      {
        "id": "string",
        "title": "string",
        "type": "string",
        "relevance": "number",
        "preview": "string"
      }
    ]
  }
  ```

#### searchByConcept(concept)
- **Description**: Returns content related to specific VLA concepts
- **Method**: GET
- **Path**: `/api/search/concept`
- **Parameters**: 
  - concept (query, required): The VLA concept to search for
- **Response Codes**:
  - 200: Success with concept-related results
- **Response Schema**:
  ```json
  {
    "results": [
      {
        "id": "string",
        "title": "string",
        "type": "string",
        "relevance": "number",
        "preview": "string"
      }
    ]
  }
  ```