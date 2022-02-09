Feature: DragAndDropSlider
Scenario: Drag and Drop scenario
Given Open LambdaTests Selenium Playground
	And click Drag & Drop Sliders under Progress Bars & Sliders 
	And Select the slider Default value 
	When drag the bar to make it nintyfive
	Then validating whether the range value shows nintyfive
	
