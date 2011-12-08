rake db:migrate
bundle exec rake assets:precompile
git add .
git commit -a -m "Checkins"
git push
git push heroku master
heroku rake db:migrate
