set :application, "iforms"
set :repository, "git@github.com:apatlola/iforms.git"
set :domain, '50.57.138.165' #Your Accelerators public IP address
set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

#if stage == "production"
 # set :deploy_to, "/home/railsapps/iforms/"
#else
  set :branch, "development"
  set :deploy_to, "/home/railsapps/iforms_staging/"
#end


set :user, "root"
set :scm_passphrase, "eagleOr2W6Whl0"

role :web, domain # Your HTTP server, Apache/etc
role :app, domain # This may be the same as your `Web` server
role :db, domain, :primary => true # This is where Rails migrations will run


set :chmod777, "public/csvfiles public/pdffiles"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
 namespace :deploy do
   task :start do ; end
   task :stop do ; end
   task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
   end
   task :permissions do
     run "#{try_sudo} chmod 777 #{File.join(current_path,'public/csvfiles/')};#{try_sudo} chmod 777 #{File.join(current_path,'public/pdffiles/')}"
 end
 end
 
 after "deploy:restart", "deploy:permissions"
  
#after "deploy:symlink"
#, "deploy:update_crontab"
#namespace :deploy do
#desc "Update the crontab file"
#task :update_crontab, :roles => :db do
#run "cd #{release_path} && whenever --update-crontab #{application}"
#end
#end
# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end

