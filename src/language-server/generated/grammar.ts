/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { loadGrammar, Grammar } from 'langium';

let loaded: Grammar | undefined;
export const grammar = (): Grammar => loaded || (loaded = loadGrammar(`{
  "$type": "Grammar",
  "usedGrammars": [],
  "hiddenTokens": [
    {
      "$refText": "WS"
    },
    {
      "$refText": "ML_COMMENT"
    },
    {
      "$refText": "SL_COMMENT"
    }
  ],
  "metamodelDeclarations": [],
  "rules": [
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Model",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "persons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "Person"
              }
            },
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "greetings",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "Greeting"
              }
            },
            "elements": []
          }
        ],
        "cardinality": "*"
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Person",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "person",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "Greeting",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Hello",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "person",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "Person"
              },
              "terminal": {
                "$type": "RuleCall",
                "arguments": [],
                "rule": {
                  "$refText": "ID"
                }
              }
            }
          },
          {
            "$type": "Keyword",
            "value": "!"
          }
        ]
      }
    },
    {
      "$type": "TerminalRule",
      "name": "WS",
      "regex": "\\\\s+"
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "regex": "[_a-zA-Z][\\\\w_]*"
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": "number",
      "regex": "[0-9]+"
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "regex": "\\"[^\\"]*\\"|'[^']*'"
    },
    {
      "$type": "TerminalRule",
      "name": "ML_COMMENT",
      "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
    },
    {
      "$type": "TerminalRule",
      "name": "SL_COMMENT",
      "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
    }
  ],
  "name": "Mydsl",
  "definesHiddenTokens": true
}`));
