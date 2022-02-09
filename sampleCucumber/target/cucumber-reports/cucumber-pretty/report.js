$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DragAndDrop.feature");
formatter.feature({
  "line": 1,
  "name": "DragAndDropSlider",
  "description": "",
  "id": "draganddropslider",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Drag and Drop scenario",
  "description": "",
  "id": "draganddropslider;drag-and-drop-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open LambdaTests Selenium Playground",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click Drag \u0026 Drop Sliders under Progress Bars \u0026 Sliders",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Select the slider Default value",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "drag the bar to make it nintyfive",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validating whether the range value shows nintyfive",
  "keyword": "Then "
});
formatter.match({
  "location": "DragDrop.open_LambdaTests_Selenium_Playground()"
});
formatter.result({
  "duration": 1499005912,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.click_Drag_Drop_Sliders_under_Progress_Bars_Sliders()"
});
formatter.result({
  "duration": 1726138388,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.select_the_slider_Default_value()"
});
formatter.result({
  "duration": 57850,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.drag_the_bar_to_make_it_by()"
});
formatter.result({
  "duration": 4268277244,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.validating_whether_the_range_value_shows()"
});
formatter.result({
  "duration": 463598808,
  "status": "passed"
});
formatter.uri("InputFormSubmit.feature");
formatter.feature({
  "line": 1,
  "name": "InputFormSubmit",
  "description": "",
  "id": "inputformsubmit",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Form filling scenario",
  "description": "",
  "id": "inputformsubmit;form-filling-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open the lambdatest selenium-playground page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click Input Form Submit under Input Forms",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Click Submit without filling in any information in the form",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Assert \"Please fill out this field.\" error message",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Fill in Name, Email, and other fields",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click Submit",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Once submitted, validate the success message \"Thanks for contacting us, we will get back to you shortly.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InputFormSubmit.open_the_lambdatest_selenium_playground_page()"
});
formatter.result({
  "duration": 2395002552,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.click_Input_Form_Submit_under_Input_Forms()"
});
formatter.result({
  "duration": 1494561045,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.click_Submit_without_filling_in_any_information_in_the_form()"
});fformatter.result({
  "duration": 869677354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "InputFormSubmit.assert_error_message(String)"
});
formatter.result({
  "duration": 408376939,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.fill_in_Name_Email_and_other_fields()"
});fformatter.result({
  "duration": 7935806527,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.click_Submit()"
});
formatter.result({
  "duration": 549206304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks for contacting us, we will get back to you shortly.",
      "offset": 46
    }
  ],
  "location": "InputFormSubmit.once_submitted_validate_the_success_message(String)"
});
formatter.result({
  "duration": 593500578,
  "status": "passed"
});fformatter.uri("SimpleFormDemo.feature");
formatter.feature({
  "line": 2,
  "name": "SimpleDemoForm",
  "description": "",
  "id": "simpledemoform",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verification of entered message",
  "description": "",
  "id": "simpledemoform;verification-of-entered-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open LambdaTests Selenium Playground from",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Simple Form Demo under Input Forms",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Validate that the URL contains simple-form-demo",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Create a variable to enter values in the Enter Message text box",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Get Checked Value",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Validate whether the same text message is displayed under the Your Message section",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleFormDemo.open_LambdaTests_Selenium_Playground_from()"
});fformatter.result({
  "duration": 3737269139,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.click_Simple_Form_Demo_under_Input_Forms()"
});fformatter.result({
  "duration": 4291437548,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.validate_that_the_URL_contains_simple_form_demo()"
});
formatter.result({
  "duration": 95047325,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.create_a_variable_to_enter_values_in_the_Enter_Message_text_box()"
});
formatter.result({
  "duration": 1590667023,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.click_Get_Checked_Value()"
});
formatter.result({
  "duration": 707750504,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.validate_whether_the_same_text_message_is_displayed_under_the_Your_Message_section()"
});
formatter.result({
  "duration": 1647262048,
  "status": "passed"
});
});