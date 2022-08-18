Feature: Fill Todo PlaywrightTest

  @regressive
  Scenario: Fill one todo
    Given adiciono um item "valido"
    Then deve exibir o item "Estruturar dados"
