package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;

import MyRunner.TestRunner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.DragandDrop;


public class DragDrop extends TestRunner {

	public RemoteWebDriver driver = this.connection;
	@Given("^Open LambdaTests Selenium Playground$")
	public void open_LambdaTests_Selenium_Playground() throws Throwable {
		 
		 driver.manage().window().maximize();
	     driver.get("https://www.lambdatest.com/selenium-playground/");
		 driver.manage().deleteAllCookies();
		 
	}
DragandDrop dd;
	@Given("^click Drag & Drop Sliders under Progress Bars & Sliders$")
	public void click_Drag_Drop_Sliders_under_Progress_Bars_Sliders() throws Throwable {
	   dd= new DragandDrop(driver);
	   dd.ToolTip().click();
	   dd.ClickDragAndDrop().click();
	   
	}
	WebElement e;
	@Given("^Select the slider Default value$")
	public void select_the_slider_Default_value() throws Throwable {
		 e =dd.changeRange();
		
	}

	@When("^drag the bar to make it nintyfive$")
	public void drag_the_bar_to_make_it_by() throws Throwable {
		/*Actions move = new Actions(driver);
	     Action action = (Action) move.dragAndDropBy(e, 102, 0).build();
	     action.perform();*/ 
		 driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		Actions move = new Actions(driver);
		move.moveToElement(e).clickAndHold().moveByOffset(102,0).release().perform();
		Thread.sleep(3500);
	}

	@Then("^validating whether the range value shows nintyfive$")
	public void validating_whether_the_range_value_shows() throws Throwable {
	   String range= dd.VerifyRange().getText();
	   System.out.println("The range is "+range);
	     if(range.equalsIgnoreCase("95")){
			 System.out.println("95 is correctly printed");
		 }
	     driver.close();	
	}

}
