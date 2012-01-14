class PagesController < ApplicationController
  
  def home
    @title = "Home"
    @title2 = "Mike"
  end

  def contact
    @title = "Contact"
  end
  
  def about
    @title = "About"
  end

  def help
    @title = "Help"
  end
  
  def test2
    @title  = "test2"
  end
end
