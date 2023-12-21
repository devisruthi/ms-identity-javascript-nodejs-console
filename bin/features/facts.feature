Feature: Test Graph API

  Scenario Outline: Test User Name 
    Given I make a GET request to the "<resource>"
    Then the response status code should be 200
    And the "<property>" should be "<value>"

    Examples:
      | resource       | property      | value             |
      | GRAPH_ENDPOINT | displayName   | Sarath Kumar P.S  |
      | GRAPH_ENDPOINT | givenName     | Sarath Kumar      |