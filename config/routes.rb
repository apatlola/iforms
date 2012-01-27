Iforms::Application.routes.draw do
  get "contactus/new"
  get "contactus/index"
  resources :contactus

  get "childforms/new"

  get "childforms/show"

  get "childforms/edit"

  get "appointments/new"

  get "appointments/index"

 # get "appointments/show"

  get "pdfuploads/index"

  get "pdfuploads/new"

  get "pdfuploads/show"

  devise_for :admins

  get "admin/index"

  devise_for :users, :path => '', :path_names => { :sign_in => "login", :sign_out => "logout", :sign_up => "" }, :controllers => {:registrations => 'registrations'}
  
get "deviseroles/index"
  #get "doctors/index"

  get "doctors/new"

  get "doctors/show"

 # get "patients/index"
  match "patient/appointments" => 'patients#index'#, :as =>"patients/appointments"
  match "appointments/show" => 'appointments#show', :via => :post
  match "doctor/appointments" => 'doctors#index'

  get "patients/new"
  resources :pdfuploads
  resources :doctors
  resources :forms
  resources :patients
  resources :appointments 
  resources :deviseroles do
    collection do
      post 'contacts'
    end
  end
  resources :childforms
  resources :iforms do 
    collection do
      get 'get_iform'
    end
  end
  

  

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => redirect("/users/login")
  
  match '/about', :to => "deviseroles#about"
  match '/contact', :to => "deviseroles#contact"
  match '/FAQ', :to => "deviseroles#FAQ"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
