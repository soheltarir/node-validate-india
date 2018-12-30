import vision from '@google-cloud/vision';

/**
 * Extracts text from the image url provided using Google Vision API
 *
 * @export
 * @param {string} uri The URL of the image (pdf is not supported)
 * @returns Texts extracted from the image
 */
export async function extractTextFromImage(uri: string): Promise<string> {
    // Google API Client
    const client = new vision.ImageAnnotatorClient();
    // Performs text detection on the uri
    const [result] = await client.textDetection(uri);
    const detections = result.textAnnotations;
    return detections[0].description;
}
