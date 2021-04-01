// mY function in Azure to resize a given image into a smallest and lighest one 

module.exports = async function (context, myBlob) {
    const thumbnail = require('image-thumbnail');
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
 
    const my_image = await thumbnail(myBlob);
    const result = context.bindings.outputBlob = my_image; 
    context.log("MON IMAGE", context.bindings.outputBlob)

    };
