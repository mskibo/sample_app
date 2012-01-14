require 'spec_helper'

describe PagesController do
  render_views
  before (:each) do
    @base_title="Ruby on Rails Tutorial Sample App"
  end
  describe "GET 'home'" do
    it "returns http success" do
      get 'home'
      response.should be_success
    end
   
       it "should have the correct title" do
          get 'home'
          response.should have_selector("title", :content => @base_title + " | Home")

    end
end

  describe "GET 'contact'" do
    it "returns http success" do
      get 'contact'
      response.should be_success
    end
    it "should have the correct title" do
        get 'contact'
        response.should have_selector("title", :content => "Ruby on Rails Tutorial Sample App | Contact")

  end
  end

  describe "GET 'about page'" do
    it "should be successful" do
      get 'about'
      response.should be_success
    end
       
    it "should have the correct title" do
          get 'about'
          response.should have_selector("title", :content => "Ruby on Rails Tutorial Sample App | About")

    end
    end

    describe "GET 'help page'" do
       it "should be successful" do
         get 'help'
         response.should be_success
       end

       it "should have the correct title" do
             get 'help'
             response.should have_selector("title", :content => "Ruby on Rails Tutorial Sample App | Help")

       end
       end

  describe "GET 'test page mds'" do
    it"should be successful" do
      get 'test2'
    end
  end
 
 end 

