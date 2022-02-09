package stepDefinations;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import MyRunner.TestRunner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.InputForm;

public class InputFormSubmit extends TestRunner {

	public RemoteWebDriver driver = this.connection;

	@Given("^Open the lambdatest selenium-playground page$")
	public void open_the_lambdatest_selenium_playground_page() throws Throwable {
		 
		 driver.manage().window().maximize();
		 driver.get("https://www.lambdatest.com/selenium-playground/");
		 driver.manage().deleteAllCookies();
	}
     InputForm IForm ;
	@Given("^click Input Form Submit under Input Forms$")
	public void click_Input_Form_Submit_under_Input_Forms() throws Throwable {
	    IForm=new InputForm(driver);
	    IForm.ClickInputFormSubmit().click();
	    
	}

	@Given("^Click Submit without filling in any information in the form$")
	public void click_Submit_without_filling_in_any_information_in_the_form() throws Throwable {
	    IForm.ClickSubmit().click();
	}

	@Given("^Assert \"([^\"]*)\" error message$")
	public void assert_error_message(String arg1) throws Throwable {
		WebElement ele = IForm.Name();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String ActualTitle = (String)js.executeScript("return arguments[0].validationMessage;", ele);
		String ExpectedTitle= "Please fill out this field." ;
	}

	@Given("^Fill in Name, Email, and other fields$")
	public void fill_in_Name_Email_and_other_fields() throws Throwable {
	    IForm.Name().sendKeys("Noothan");
	    IForm.Email().sendKeys("janjacob@gmail.com");
	    IForm.Password().sendKeys("nenucheppanu");
	    IForm.Company().sendKeys("admbal");
	    IForm.Website().sendKeys("https://www.lambdatest.com/");
	    Select city =  new Select(IForm.Country());
		city.selectByVisibleText("United States");
	    IForm.City().sendKeys("Tirupati");
	    IForm.Address1().sendKeys("dno-11,maa street");
	    IForm.Address2().sendKeys("maa nagaram");
	    IForm.State().sendKeys("maa rastram");
	    IForm.Zip().sendKeys("984823");
	  
	    
	}

	@When("^click Submit$")
	public void click_Submit() throws Throwable {
		IForm.ClickSubmit().click();
	}

	@Then("^Once submitted, validate the success message \"([^\"]*)\"$")
	public void once_submitted_validate_the_success_message(String arg1) throws Throwable {
	  String actualSuccessMsg =	IForm.SuccessMsg().getText();
	  Assert.assertEquals(arg1, actualSuccessMsg);
	  driver.close();
		
	}   
}
