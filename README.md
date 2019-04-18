## Yelp Business Data Analytics, Recommendation and Rating Prediction


### Table of Contents
+ [Data Sets](#Data-Sets)
+ [Project Overview](#Project-Overview)   
+ [Workflow Engine and API format](#Workflow-Engine-and-API-format)
+ [Data Extract,Transform and Load](#1-Data-Extract-Transform-and-Load)
+ [Data Dashboard and Visualization](#3-Data-Dashboard)
+ [Feature Enginerring](#4-Feature-Enginerring)
+ [Recommendation Algorithm](#5-Recommendation-Algorithm)
+ [Rating Prediction Model](#6-Rating-Prediction-Model)

<hr>



### Data Sets
- The Yelp dataset includes 1,223,094 tips by 1,637,138 user.There are over 1.2 million business attributes like hours, parking, availability, and ambience. It is aggregated check-ins over time for each of the 192,609 businesses. We will use the newly updated dataset from Yelp Dataset Website. You can download it from this [Link](https://www.yelp.com/dataset)

<hr>

### Project Overview
- This project is a full-stack data analytics application. The whole process incudes:
  + Get the raw data (From the Yelp.com)
  + Data Preprocessing, Extract-Transform-Load (JSON to CSV, Database: PostgreSQL 10)
  + Data Visualization and EDA - Discover and visualize the data to gain insights ( Matplotlib, Seaborn, JavaScript, D3, plot.ly and leaflet mapping)
  + Feature Engineering - Numeric Features,Categorical Features,Time Series Features,Text Features and Handling the missing data
  + Select the machine learning models,train and fine-tune the models (Logistic Regression,XGBoost,Light-GBM and Ensemble Models)
  + Select the recommendation algorithm(Item-based Collaborative filter)
  + Deploy the system and provide the APIs capabilities (Python Flask Web Server)
- **Project Functionalities**
  + **Dashboard:**   
    - Provide Yelp GTA business overview dashborad,which includes the total business number,rating number and reviewed number and also adds key filters to provide the detailed information. Also the application provides the full data tables to display the whole business information(Totla 33,412 businesses included)
  + **Business Search:**
    - Using Yelp Fusion API, the application can query the business in any category and from any location. The detailed result will be geomapping into the map with detailed contact information(phone,address,rating and etc..)
  + **Categories Chart:**
    - Categories in Yelp dataset is very complicated. There are always a long text to describe the business' category. The reason behind this is that categories are added by business owners. So we created a categorial algorithm to simplify the category description and easy to query.
  + **Recommendation Chart:**
    - Show whole bussiness full list and recommend the business based on user's input.The results are geo-mapping into the map with detailed contact information
  + **Rating Prediction:**
    - The application uses four machine learning models to predict the rating. The logistic Regression,XGBoost,light-GBM and ensemble models are trained in this application.if we set the threshold is 70%, the best model accuracy is around 68%.Also the feature importances are provided. 
  + **Rating Maps:**
    - The application will show the all business rating vs review counts in heatmap, the maps will be in different layers based on the rating and review counts
    
<hr>


### Workflow Engine and API format

#### Workflow
- Raw Data Transformation: JSON to CSV
- Data Storage : PostgreSQL   
- Workflow Engine (WFE): Flask Web Server/SQLAchemy/Python   
- Front END Web Application/GUI : HTML/CSS, JavaScript,D3,Leaflet.js,Plot.ly
- Back End: Feature Engineering,Machine Learning Models, Item-based Collaborative filter algorithm for Recommendation
- Production Deployment on Heroku.com or GCP

#### API format

<hr>

    
  






