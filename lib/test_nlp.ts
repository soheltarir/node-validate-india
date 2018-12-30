// Imports the Google Cloud client library
import language from '@google-cloud/language';

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = 'INCOMETAX DEPARTMENT\nGOVT OF INDIA\nPermanent Account Number Card\nBOHPC6420G\n/ Name\nSAMRAT CHADDA\nT\n17TR / Father\'s Name\nVIJAY KUMAR CHADDA\n卜\n귀찌 aft fra / Date of Birth\n15/02/1985\n飞EFTerz/ Signature\n';

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// // Detects entities in the document
// client.analyzeEntities({document})
//     .then((res: any) => {
//         const [result] = res;
//         const entities = result.entities;

//         console.log('Entities:');
//         entities.forEach((entity: any) => {
//             console.log(entity.name);
//             console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
//             if (entity.metadata && entity.metadata.wikipedia_url) {
//                 console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
//             }
//         });
//     })
//     .catch((err: Error) => console.log(err));

client
  .classifyText({document: document})
  .then((results: any) => {
    const classification = results[0];

    console.log('Categories:');
    classification.categories.forEach((category: any) => {
      console.log(
        `Name: ${category.name}, Confidence: ${category.confidence}`
      );
    });
  })
  .catch((err: Error) => {
    console.error('ERROR:', err);
  });