Feature: Fill Todo PlaywrightTest

  @regressive
  Scenario: Fill one todo
    Given fill todo with one item
    When press enter
    Then must display the todo

  Scenario: Fill one todo
    Given fill todo with one item
    When fill todo with one item
    When press enter
    Then must display the todo