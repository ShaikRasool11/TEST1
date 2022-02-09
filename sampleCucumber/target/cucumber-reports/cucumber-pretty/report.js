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
  "duration": 1341361235,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.click_Drag_Drop_Sliders_under_Progress_Bars_Sliders()"
});
formatter.result({
  "duration": 2066723594,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.select_the_slider_Default_value()"
});
formatter.result({
  "duration": 43351,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.drag_the_bar_to_make_it_by()"
});
formatter.result({
  "duration": 4312080015,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.validating_whether_the_range_value_shows()"
});
formatter.result({
  "duration": 1429360251,
  "status": "passed"
});formatter.uri("InputFormSubmit.feature");
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
  "duration": 2867800943,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.click_Input_Form_Submit_under_Input_Forms()"
});
formatter.result({
  "duration": 996192236,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.click_Submit_without_filling_in_any_information_in_the_form()"
});
formatter.result({
  "duration": 281223734,
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
  "duration": 373016168,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.fill_in_Name_Email_and_other_fields()"
});
formatter.result({
  "duration": 3872593693,
  "status": "passed"
});
formatter.match({
  "location": "InputFormSubmit.click_Submit()"
});
formatter.result({
  "duration": 239366180,
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
  "duration": 448504518,
  "status": "passed"
});
formatter.uri("SimpleFormDemo.feature");
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
});
formatter.result({
  "duration": 4693497188,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.click_Simple_Form_Demo_under_Input_Forms()"
});
formatter.result({
  "duration": 1231124880,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.validate_that_the_URL_contains_simple_form_demo()"
});
formatter.result({
  "duration": 69397268,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.create_a_variable_to_enter_values_in_the_Enter_Message_text_box()"
});
formatter.result({
  "duration": 723336163,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.click_Get_Checked_Value()"
});
formatter.result({
  "duration": 318534152,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemo.validate_whether_the_same_text_message_is_displayed_under_the_Your_Message_section()"
});
formatter.result({
  "duration": 2615994696,
  "status": "passed"
});
});;;;