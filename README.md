# 🔧 Maintenance Minder  ⚠️ 🚘
Maintenance Minder allows you to create and maintain a schedule of routine maintenance service for your vehicle(s).
Use this application to keep track of routine  service requirements like  oil changes, wheel alignment check, etc... and prolong the life of your vehicle.
This web app utilizes OAuth authentication. It has been implemented to restrict access to create, use, delete (CUD) data operations, by protecting these routes from anonymous users, with isLoggedIN middleware. Controller functions utilize OAuth to ensure that editing and deleting data can only be accomplished by the user that created that data. 

## 🎯 Objective 

To build and deploy a full-stack CRUD application from models - controllers, using Model-View-Controller (MVC) organization.
<br/>
<br/>
![car detailing](https://i.imgur.com/Y2KoPP4.png)
<br/>
# 🔑 Key Features
* 🗂️ Create and maintain an index of your vehicles ( VIN, make, model, and year)
* 🗓️ Create and maintain a separate service schedule for each vehicle in your index
* 🗄️ Maintain a record of completed services and the date they occurred

# 💾 Technologies Used
<h3 align="center"> Node|  Express  |  MongoDB  |  Embedded JavaScript  |   JavaScript ES6  |  CSS  |   Passport  |   Google API OAuth2.0|    Heroku  |     MongoDB Atlas  |  Bootstrap</h3>


# 🏁 Getting  Started

 👀 [ View Maintenance Minder project planning](https://trello.com/b/7PL5xh5Y/car-maintenace) ⬅️ Warning: clicking this link will redirect you to Trello.com

1. Click the link below to be redirected to the Maintence Minder web application

🖱️ [Maintenance Minder](https://maintenance-minder.herokuapp.com/)

2. Login using your Google account
3. Create your first vehicle and click the add vehicle link
4. Enter your vehicle's information on the following page
5. Click the Open link under "more info". Here you will  view your vehicle's information and have the option to both add and review maintenance service items
6. Click "see services" to view, use, and edit your service schedule
7. Logout when you're finished


## ⏭️ Next Steps
* Intergrate Google's calendar API  to allow users to add their maintenace service appointments to their calendar.
* Add the remaining 'icebox' features on my Trello list

 



