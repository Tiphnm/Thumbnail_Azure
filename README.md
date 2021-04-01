# Thumbnail_Azure

Introduction to Azure Function and Azure Storage and how to bind them : create a function that resize a given picture using **Node.js** and another one that send mail everytime a picture is uploaded. 

#### Languages, tools and libraries 

- Node.js : image-thumbnail, nodemailer 
- Azure 

#### Structure  

Two functions that are complementary : **thumbnail.js** to convert my pictures and **email.js** to send mail to my users. Also for the purpose of the exercice you can see an uploaded image. Other files are dedicated to package and hidden files with sensitve data. 

#### Process 

Create an Azure container that will store your image. 

Create an Azure function, where a few steps are needed in order for everything to run nicely: 
- Choose a **BlobTrigger** Function 
- In your function, go to integration an add an **output**: don't forget to specific the path of your output (another one than from your input container maybe?) 
- Install your libraries on **KUDU**: 
            - `npm init -y`
            - `npm i image-thumnail`
            - you can find your function script on **home/site/wwwroot/<nameofyourfile>**
            
- Bind your function with your Blob with the following line : `context.bindings.<nameofyouroutputBlob>`

#### Next steps 

Implement my email function that works locally in my Azure Function. 



